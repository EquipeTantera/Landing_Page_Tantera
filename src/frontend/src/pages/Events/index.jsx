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
          const imageUrl = event?.attributes?.image?.data?.[0]?.attributes?.url || "";

          return {
            title: event?.attributes?.title || "",
            description: event?.attributes?.description || "",
            image: imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`,
            address: `${event?.attributes?.street || ""}, ${event?.attributes?.number || ""}, ${event?.attributes?.postal_code || ""}`,
            date: new Date(event?.attributes?.date).toLocaleDateString("pt-BR"),
            startTime: event?.attributes?.start_time || "",
            endTime: event?.attributes?.end_time || "",
            ticket: String(event?.attributes?.price || ""),
            buttonText: "Saiba mais",
            buttonPath: `/event/${event.id}`,
            eventType: event?.attributes?.event_type?.data?.attributes?.type || "Outros", 
          };
        });

        setEventsData(formattedEvents);
      } catch (error) {
        console.error("Erro ao buscar dados dos eventos:", error);
      }
    };

    fetchEventsData();
  }, []);

  // Data atual para comparar com as datas dos eventos
  const currentDate = new Date();

  // filtrar eventos pelo tipo (categoria)
  const filterEventsByType = (eventType) => {
    return eventsData.filter((event) => event.eventType === eventType);
  };

  // filtrar eventos futuros (próximos) e passados (anteriores)
  const filterUpcomingEvents = (events) => {
    return events.filter((event) => new Date(event.startTime) > currentDate);
  };

  const filterPastEvents = (events) => {
    return events.filter((event) => new Date(event.endTime) < currentDate);
  };

  // Eventos filtrados por tipo
  const fests = filterEventsByType("Festas");
  const championships = filterEventsByType("Campeonatos");
  const others = filterEventsByType("Outros");

  // Separar eventos futuros e passados
  const upcomingFests = filterUpcomingEvents(fests);
  const pastFests = filterPastEvents(fests);

  const upcomingChampionships = filterUpcomingEvents(championships);
  const pastChampionships = filterPastEvents(championships);

  const upcomingOthers = filterUpcomingEvents(others);
  const pastOthers = filterPastEvents(others);

  return (
    <>
      <MainTitle shadowText="Eventos" mainText="Eventos" />

      {/* Seção de Festas */}
      <section className={styles.container__fests}>
        <HorizontalSubtitle
          title="Festas"
          colorImage="purple"
          titleSize="3rem"
        />

        <div className={styles.container__fests__nextParty}>
          <p className={styles.container__fests__nextParty__text}>
            Próxima festa
          </p>
        </div>

        <div className={styles.container__fests__cards}>
          {upcomingFests.length > 0 ? (
            <MediumEventCard {...upcomingFests[0]} />
          ) : (
            <p>Sem festas no momento</p>
          )}
        </div>

        <div className={styles.container__fests__nextParty}>
          <p className={styles["container__fests__nextParty__text--second"]}>
            Festas anteriores
          </p>
        </div>

        <div className={styles.container__fests__carousel}>
          <CarouselSmallEventCard events={pastFests} interval={3000} />
        </div>
      </section>

      {/* Seção de Campeonatos */}
      <section className={styles.container__championships}>
        <HorizontalSubtitle
          title="Campeonatos"
          colorImage="red"
          titleSize="3rem"
        />

        <div className={styles.container__championships__nextParty}>
          <p className={styles.container__fests__nextParty__text}>
            Próximo campeonato
          </p>
        </div>

        <div className={styles.container__championships__cards}>
          {upcomingChampionships.length > 0 ? (
            <MediumEventCard {...upcomingChampionships[0]} />
          ) : (
            <p>Sem campeonatos no momento</p>
          )}
        </div>

        <div className={styles.container__championships__nextParty}>
          <p
            className={
              styles["container__championships__nextParty__text--second"]
            }
          >
            Campeonatos Anteriores
          </p>
        </div>

        <div className={styles.container__championships__carousel}>
          <CarouselSmallEventCard events={pastChampionships} interval={3000} />
        </div>
      </section>

      {/* Seção de Outros */}
      <section className={styles.container__championships}>
        <HorizontalSubtitle
          title="Outros"
          colorImage="purple"
          titleSize="3rem"
        />
        <div className={styles.container__championships__nextParty}>
          <p className={styles.container__championships__nextParty__text}>
            Próximos eventos
          </p>
        </div>

        <div className={styles.container__championships__cards}>
          {upcomingOthers.length > 0 ? (
            <MediumEventCard {...upcomingOthers[0]} />
          ) : (
            <p>Sem outros eventos no momento</p>
          )}
        </div>

        <div className={styles.container__championships__nextParty}>
          <p className={styles["container__championships__nextParty__text--second"]}>
            Eventos Anteriores
          </p>
        </div>

        <div className={styles.container__championships__carousel}>
          <CarouselSmallEventCard events={pastOthers} interval={3000} />
        </div>
      </section>

    </>
  );
}
