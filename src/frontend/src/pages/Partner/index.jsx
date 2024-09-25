import { useEffect, useState } from "react";
import axios from "axios";
import LargePartnerCard from "../../components/Card/LargeCard/LargePartnerCard";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import { API_BASE_URL, BASE_URL } from "../../services/config";

export default function Partner() {
  const [partnersData, setPartnersData] = useState([]);

  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/partners?populate=*`);
        const partners = response.data.data;

        const formattedPartners = partners.map((partner) => {
          const iconUrl = partner?.attributes?.icon?.data?.attributes?.url
            ? partner.attributes.icon.data.attributes.url
            : "";

          const imageUrl = partner?.attributes?.image?.data?.[0]?.attributes
            ?.url
            ? partner.attributes.image.data[0].attributes.url
            : "";

          const urlPartner = partner?.attributes?.url
            ? partner.attributes.url
            : "";

          const events = partner?.attributes?.event_id?.data
            ? [
              {
                title:
                  partner.attributes.event_id.data.attributes.title || "",
                date: partner.attributes.event_id.data.attributes.date
                  ? new Date(
                    partner.attributes.event_id.data.attributes.date
                  ).toLocaleDateString("pt-BR")
                  : "",
              },
            ]
            : [];

          const impacts = Array.isArray(partner?.attributes?.result_id?.data)
            ? partner.attributes.result_id.data.map((result) => ({
              name: result?.attributes?.description || "",
            }))
            : [];

          // Retorno dos dados do parceiro integrado
          return {
            title: partner?.attributes?.title || "",
            description: partner?.attributes?.slogan || "",
            image: iconUrl.startsWith("http")
              ? iconUrl
              : `${BASE_URL}${iconUrl}`,
            fullImage: imageUrl.startsWith("http")
              ? imageUrl
              : `${BASE_URL}${imageUrl}`,
            events,
            impacts,
            textButton: "Conheça Mais",
            linkButton: urlPartner,
          };
        });

        setPartnersData(formattedPartners);
      } catch (error) {
        console.error("Erro ao buscar dados dos parceiros:", error);
      }
    };

    fetchPartnersData();
  }, []);

  return (
    <>
      <MainTitle shadowText="Parceiros" mainText="Parceiros" />
      <PaperBackground>
        {partnersData.length > 0 ? (
          partnersData.map((partner, index) => (
            <LargePartnerCard key={index} {...partner} />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </PaperBackground>
    </>
  );
}
