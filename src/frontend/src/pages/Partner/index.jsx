import { useEffect, useState } from "react";
import axios from "axios";
import LargePartnerCard from "../../components/Card/LargeCard/LargePartnerCard";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";

export default function Partner() {
  const [partnerData, setPartnerData] = useState(null);

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/partners?populate=*");
        console.log(response.data); // Verificar a estrutura da resposta da API
        const data = response.data.data[0];

        const baseUrl = "http://localhost:1337"; 

        // Obtenção segura da URL do ícone
        const iconUrl = data?.attributes?.icon?.data?.attributes?.url
          ? `${baseUrl}${data.attributes.icon.data.attributes.url}`
          : "";

        // Obtenção segura da URL da imagem
        const imageUrl = data?.attributes?.image?.data?.[0]?.attributes?.url
          ? `${baseUrl}${data.attributes.image.data[0].attributes.url}`
          : "";

        // Manipulação correta dos eventos associados (manyToOne)
        const events = data?.attributes?.event_id?.data && Array.isArray(data.attributes.event_id.data) 
          ? data.attributes.event_id.data.map((event) => ({
            title: event.attributes.title || "Desconhecido",
            date: new Date(event.attributes.date).toLocaleDateString("pt-BR") || "Data não disponível",
          }))
          : data?.attributes?.event_id?.data?.attributes 
            ? [{
              title: data.attributes.event_id.data.attributes.title || "Desconhecido",
              date: new Date(data.attributes.event_id.data.attributes.date).toLocaleDateString("pt-BR") || "Data não disponível",
            }]
            : []; // Se não houver eventos, retorna array vazio

        console.log(events);

        // Manipulação correta dos resultados associados (oneToMany)
        const impacts = data?.attributes?.result_id?.data && Array.isArray(data.attributes.result_id.data)
          ? data.attributes.result_id.data.map((result) => ({
            name: result?.attributes?.name || " ", 
          }))
          : [];

        const formattedData = {
          name: data?.attributes?.title || "Nome indisponível",
          description: data?.attributes?.slogan || "Descrição indisponível",
          image: iconUrl,
          fullImage: imageUrl, 
          events,
          impacts,
          textButton: "Conheça Mais",
          linkButton: "https://www.instagram.com/furiosoenergydrink/",
        };

        setPartnerData(formattedData);
      } catch (error) {
        console.error("Erro ao buscar dados do parceiro:", error);
      }
    };

    fetchPartnerData();
  }, []);

  return (
    <>
      <MainTitle shadowText="Parceiros" mainText="Parceiros" />
      <PaperBackground>
        {partnerData ? (
          <LargePartnerCard {...partnerData} />
        ) : (
          <p>Carregando...</p>
        )}
      </PaperBackground>
    </>
  );
}
