import { useEffect, useState } from "react";
import axios from "axios";
import MainTitle from "../../components/MainTitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import MediumEventCard from "../../components/Card/MediumEventCard";
import CarouselSmallEventCard from "../../components/Carousels/CarouselSmallEventCard";
import { API_BASE_URL, BASE_URL } from "../../services/config";
import styles from "./styles.module.scss";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events?populate=*`);
        const events = response.data.data;

        const formattedEvents = events.map((event) => {
          const imageUrl = event?.attributes?.image?.data?.attributes?.url
            ? event.attributes.image.data.attributes.url
            : "";

          return {
            title: event?.attributes?.title || "",
            description: event?.attributes?.description || "",
            image: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
            address: `${event?.attributes?.street || ""}, ${event?.attributes?.number || ""}, ${event?.attributes?.postal_code || ""}`,
            date: new Date(event?.attributes?.date).toLocaleDateString("pt-BR"),
            startTime: event?.attributes?.start_time || "",
            endTime: event?.attributes?.end_time || "",
            ticket: event?.attributes?.price || "",
            buttonText: "Saiba mais",
            buttonPath: `/event/${event.id}`,
            eventType: event?.attributes?.event_type || "Outros", 
          };
        });

        setEventsData(formattedEvents);
      } catch (error) {
        console.error("Erro ao buscar dados dos eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  // Separar eventos por tipo
  const fests = eventsData.filter((event) => event.eventType === "Festa");
  const championships = eventsData.filter((event) => event.eventType === "Campeonato");

  return (
    <>
      <MainTitle shadowText="Eventos" mainText="Eventos" />

      {/* Seção de Festas */}
      <section className={styles.container__fests}>
        <HorizontalSubtitle title="Festas" colorImage="purple" titleSize="3rem" />
        
        <div className={styles.container__fests__nextParty}>
          <p className={styles.container__fests__nextParty__text}>Próxima festa</p>
        </div>

        {/* Renderizar a próxima festa */}
        <div className={styles.container__fests__cards}>
          {fests.length > 0 ? (
            <MediumEventCard {...fests[0]} />
          ) : (
            <p>Sem eventos de festas no momento</p>
          )}
        </div>

        <div className={styles.container__fests__nextParty}>
          <p className={styles["container__fests__nextParty__text--second"]}>Festas anteriores</p>
        </div>

        <div className={styles.container__fests__carousel}>
          <CarouselSmallEventCard events={fests.slice(1)} interval={3000} />
        </div>
      </section>

      {/* Seção de Campeonatos */}
      <section className={styles.container__championships}>
        <HorizontalSubtitle title="Campeonatos" colorImage="red" titleSize="3rem" />
        
        <div className={styles.container__championships__nextParty}>
          <p className={styles.container__fests__nextParty__text}>Próximo campeonato</p>
        </div>

        {/* Renderizar o próximo campeonato */}
        <div className={styles.container__championships__cards}>
          {championships.length > 0 ? (
            <MediumEventCard {...championships[0]} />
          ) : (
            <p>Sem campeonatos no momento</p>
          )}
        </div>

        <div className={styles.container__championships__nextParty}>
          <p className={styles["container__championships__nextParty__text--second"]}>Campeonatos Anteriores</p>
        </div>

        <div className={styles.container__championships__carousel}>
          <CarouselSmallEventCard events={championships.slice(1)} interval={3000} />
        </div>
      </section>

      {/* Seção de Campeonatos */}
      <section className={styles.container__championships}>
        <HorizontalSubtitle title="Outros" colorImage="purple" titleSize="3rem" />
        
        <div className={styles.container__championships__nextParty}>
          <p className={styles.container__fests__nextParty__text}>Próximo evento</p>
        </div>

        {/* Renderizar o próximo campeonato */}
        <div className={styles.container__championships__cards}>
          {championships.length > 0 ? (
            <MediumEventCard {...championships[0]} />
          ) : (
            <p>Sem eventos no momento</p>
          )}
        </div>

        <div className={styles.container__championships__nextParty}>
          <p className={styles["container__championships__nextParty__text--second"]}>Eventos Anteriores</p>
        </div>

        <div className={styles.container__championships__carousel}>
          <CarouselSmallEventCard events={championships.slice(1)} interval={3000} />
        </div>
      </section>
    </>
  );
}
