import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import ProfileCard from "../../components/Card/ProfileCard";
import Content from "../../components/Content";
import ManagementInformationCard from "../../components/Card/InformationCard/ManagementInformationCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import SummaryBoardCard from "../../components/Card/BoardCard/SummaryBoardCard";
import SmallManagementCard from "../../components/Card/SmallCard/SmallManagementCard";
import { API_BASE_URL, BASE_URL } from "../../services/config";
import axios from "axios";
import styles from './styles.module.scss';

export default function Management() {
  const { ano } = useParams(); 
  const [managementData, setManagementData] = useState(null);
  const [presidencyImage, setPresidencyImage] = useState(null);
  const [presidencyName, setPresidencyName] = useState("");
  const [presidencyResults, setPresidencyResults] = useState([]);
  const [managementDescription, setManagementDescription] = useState("");

  const formatDate = (dateString) => {
    const [year, month] = dateString.split("-"); 
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const monthName = monthNames[parseInt(month) - 1];
    return `${monthName} de ${year}`;
  };


  // Função para pegar os dados gerais da presidência
  useEffect(() => {
    const fetchManagementData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/boards?populate[imagem]=*&populate[members_id][populate]=image`);
        const management = response.data.data.find((management) => management.attributes.year === ano);

        if (management) {
          setManagementData(management.attributes);
          const president = management.attributes.members_id?.data.find(member => member.attributes.role === "Presidente");
          setPresidencyImage(president.attributes.image.data.attributes.url);
          setPresidencyName(president.attributes.name);
          setManagementDescription(management.attributes.description);

          console.log(management.attributes);
        } else {
          console.log("Gestão não encontrada");
        }

      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      };
    }

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


    fetchManagementData();
    fetchManagementGeneral();

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
          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />
        </div>
      </section>

      {/* Exibir as gestões anteriores apenas se não for a gestão atual */}
      {!managementData.current && (
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
