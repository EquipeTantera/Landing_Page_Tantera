import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs';
import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";
import EventInformationCard from "../../components/Card/InformationCard/EventInformationCard";
import Button from "../../components/Buttons/Button";
import styles from "./styles.module.scss";
import PaperBackground from "../../components/PaperBackground";

export default function AboutEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);


  useEffect(() => {
    // rota do backend
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://54.145.177.228:1337/api/events/${id}?populate=*`
        );

        const eventData = response.data.data;

        const formattedDates = [
          {
            date: dayjs(eventData.attributes.start_time).format('DD/MM/YYYY'),
            startHour: dayjs(eventData.attributes.start_time).format('HH:mm'),
            endHour: dayjs(eventData.attributes.end_time).format('HH:mm'),
          },
        ];

        // Mapeamento dos atributos
        const mappedEvent = {
          id: eventData.id,
          name: eventData.attributes.title,
          description: eventData.attributes.description,
          fullImage:
            eventData?.attributes?.image?.data?.[0]?.attributes?.url || "",
          address: `${eventData.attributes.street}, ${eventData.attributes.number}, ${eventData.attributes.postal_code}`,
          dates: formattedDates,          
          ticket: `R$ ${eventData.attributes.price}`,
          observation: eventData.attributes.note,
        };

        setEvent(mappedEvent);
      } catch (error) {
        console.error("Erro ao buscar o evento:", error);
      }
    };

    fetchEvent();
  }, [id]);


  if (!event) {
    return <p>Evento não encontrado.</p>;
  }

  return (
    <>
      <MainTitle shadowText="Evento" mainText={event.name} />
      <PaperBackground>
        <section className={styles["container--title"]}>
          <VerticalSubtitle
            title="Sobre o evento"
            imageBackground="purple"
            className={styles["container--title__vertical-subtitle"]}
          />
          <HorizontalSubtitle
            title="Sobre o evento"
            colorImage="purple"
            titleSize="3rem"
            className={styles["container--title__horizontal-subtitle"]}
          />

          <div className={styles["container--event"]}>
            <Content content={event.description} />
            <div className={styles["container--button"]}>
              <Button
                title="Participar"
                path={`/eventos/${event.id}/inscricao`}
              />
            </div>
          </div>
        </section>
        <section className={styles["container--infos"]}>
          <EventInformationCard
            address={event.address}
            // Passa a string formatada diretamente para o componente
            dates={[{ date: event.formattedDates }]}
            observation={event.observation}
            image={event.fullImage}
          />
        </section>
      </PaperBackground>
    </>
  );
}
