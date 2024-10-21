import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import ProfileCard from "../../components/Card/ProfileCard";
import Content from "../../components/Content";
import ManagementInformationCard from "../../components/Card/InformationCard/ManagementInformationCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import SummaryBoardCard from "../../components/Card/BoardCard/SummaryBoardCard";
import SmallManagementCard from "../../components/Card/SmallCard/SmallManagementCard";
import { API_BASE_URL } from "../../services/config";
import axios from "axios";
import styles from './styles.module.scss';

export default function Management() {
  const { ano } = useParams(); 
  const [managementData, setManagementData] = useState(null);
  const [presidencyImage, setPresidencyImage] = useState(null);
  const [presidencyName, setPresidencyName] = useState("");
  const [vicePresidencyImage, setVicePresidencyImage] = useState(null); // Estado para o Vice-presidente
  const [vicePresidencyName, setVicePresidencyName] = useState(""); // Estado para o Vice-presidente
  const [presidencyResults, setPresidencyResults] = useState([]);
  const [managementDescription, setManagementDescription] = useState("");
  const [boardData, setBoardData] = useState([]);

  const formatDate = (dateString) => {
    const [year, month] = dateString.split("-"); 
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const monthName = monthNames[parseInt(month) - 1];
    return `${monthName} de ${year}`;
  };

  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/boards?populate[imagem]=*&populate[members_id][populate]=image`);
        const management = response.data.data.find((management) => management.attributes.year === ano);

        if (management) {
          setManagementData(management.attributes);

          // Encontra o presidente
          const president = management.attributes.members_id?.data.find(member => member.attributes.role === "Presidente");
          setPresidencyImage(president?.attributes?.image?.data?.attributes?.url || null);
          setPresidencyName(president?.attributes?.name || "Presidente não encontrado");

          // Encontra o vice-presidente (se houver)
          const vicePresident = management.attributes.members_id?.data.find(member => member.attributes.role === "Vice-Presidente");
          if (vicePresident) {
            setVicePresidencyImage(vicePresident?.attributes?.image?.data?.attributes?.url || null);
            setVicePresidencyName(vicePresident?.attributes?.name || "Vice-presidente não encontrado");
          }

          setManagementDescription(management.attributes.description);

        } else {
          console.log("Gestão não encontrada");
        }

      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      };
    };

    const fetchManagementGeneral = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/boards?populate=*`);
        const management = response.data.data.find((management) => management.attributes.year === ano);
    
        if (management) {
          const results = management.attributes.result_ids?.data.map(result => result.attributes.description) || [];
          setPresidencyResults(results.map((result) => ({ name: result })));
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };   
    
    const fetchManagementBoard = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/boards?populate[imagem]=*&populate[specific_board_id][populate][img]=*&populate[specific_board_id][populate][director_ids][populate]=image`
        );
        const board = response.data.data.find((board) => board.attributes.year === ano);
    
        if (board) {
          const boardDetails = board.attributes.specific_board_id.data.map((boardItem) => {
            const directors = boardItem.attributes.director_ids?.data.filter(
              (member) => member.attributes.role.toLowerCase().includes("diretor")
            ).map((director) => ({
              name: director.attributes.name, 
              role: director.attributes.role,
              image: director.attributes.image?.data?.attributes?.url || ""
            })) || [];
    
            const directorName = directors.length > 0 ? directors[0].name : "Nenhum Diretor Encontrado";
    
            return {
              name: directorName, 
              boardName: boardItem.attributes.name, 
              image: boardItem.attributes.img?.data?.attributes?.url || "", 
              directors 
            };
          });
    
          setBoardData(boardDetails); 
        } else {
          console.log("Gestão não encontrada");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchManagementData();
    fetchManagementGeneral();
    fetchManagementBoard();
  }, [ano]);

  if (!managementData) {
    return <p>Carregando...</p>;
  }

  const formattedStartDate = formatDate(managementData.start_date);
  const formattedEndDate = formatDate(managementData.end_date);

  return (
    <>
      <MainTitle 
        shadowText="Gestão"
        mainText={`Gestão ${managementData.year}`}  
      />

      <section className={styles["container--presidency"]}>
        <div className={styles["container--presidency__subtitle"]}>
          <VerticalSubtitle 
            title="Presidência"
            imageBackground="red"
            subtitle="Presidência"
            verticalText="Presidiência"
          />

          <HorizontalSubtitle 
            title="Presidência"
            colorImage="red"
            className={styles["container--presidency__subtitle__horizontal"]}
          />
        </div>

        <div className={styles["container--presidency__infos"]}>
          <div className={styles["container--presidency__infos__profile"]}>
            <ProfileCard 
              image={presidencyImage} 
              role="Presidente"
              name={presidencyName}
            />
            
            {vicePresidencyName && vicePresidencyImage && (
              <ProfileCard 
                image={vicePresidencyImage} 
                role="Vice"
                name={vicePresidencyName}
              />
            )}
          </div>

          <div className={styles["container--presidency__infos__content"]}>
            <Content 
              content={managementDescription}
            />
          </div>

          <div className={styles["container--presidency__infos__results"]}>
            <ManagementInformationCard 
              termOfOffice={`De ${formattedStartDate} até ${formattedEndDate}`} 
              results={presidencyResults}  
              title="Resultados"
            />
          </div>
        </div>
      </section>

      <section className={styles["container--boards"]}>
        <HorizontalSubtitle 
          title="Diretorias"
          colorImage="purple"
        />

        <div className={styles["container--boards__content"]}>
          {boardData.map((board, index) => (
            <SummaryBoardCard 
              key={index}
              name={board.name}
              image={board.image}
              buttonPath={`/diretorias/${board.boardName}`} 
            />
          ))}
        </div>
      </section>

      {managementData.current && (
        <section className={styles["container--previous-management"]}>
          <HorizontalSubtitle 
            title="Gestões Anteriores"
            colorImage="red"
          />

          <div className={styles["container--previous-management__content"]}>
            <SmallManagementCard 
              nameManagement="Gestão 2023"
              buttonPath="/gestao/2023"
            />
          </div>
        </section>
      )}
    </>
  );
}
