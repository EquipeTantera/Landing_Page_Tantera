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
        const data = response.data.data[0];

        // Manipular URLs de imagem para garantir que sejam absolutas
        const baseUrl = "http://localhost:1337"; // Adicione a URL base do Strapi

        const iconUrl = data.attributes.icon.data.attributes.url
          ? `${baseUrl}${data.attributes.icon.data.attributes.url}`
          : "";

        const imageUrl = data.attributes.image.data[0].attributes.url
          ? `${baseUrl}${data.attributes.image.data[0].attributes.url}`
          : "";

        const events = data.attributes.event_id && Array.isArray(data.attributes.event_id.data)
          ? data.attributes.event_id.data.map((event) => ({
            name: event.attributes.name,
            date: event.attributes.date,
          }))
          : data.attributes.event_id
            ? [{
              name: data.attributes.event_id.data.attributes.name,
              date: data.attributes.event_id.data.attributes.date,
            }]
            : [];

        const impacts = data.attributes.result_id && Array.isArray(data.attributes.result_id.data)
          ? data.attributes.result_id.data.map((result) => ({
            name: result.attributes.name || "Resultado Desconhecido", // Fornecendo um valor padrão
          }))
          : [];
          
        const formattedData = {
          name: data.attributes.title,
          description: data.attributes.slogan,
          image: iconUrl, // URL ajustada da imagem
          fullImage: imageUrl, // URL ajustada da imagem principal
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
