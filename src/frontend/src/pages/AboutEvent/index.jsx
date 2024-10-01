import { useParams } from 'react-router-dom';
import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";
import EventInformationCard from "../../components/Card/InformationCard/EventInformationCard";
import Button from "../../components/Buttons/Button";
import styles from "./styles.module.scss";
import PaperBackground from "../../components/PaperBackground";

const events = [
  {
    id: 1,
    name: "Festa Anterior 1",
    description: "Descrição completa da Festa Anterior 1",
    fullImage: "/partner-furioso.png",
    address: "Rua Alegria, 456",
    date: "01/01/2023",
    ticket: "R$ 50",
    observation: "Evento encerrado.",
  },
  {
    id: 2,
    name: "Festa Anterior 2",
    description: "Descrição completa da Festa Anterior 2",
    fullImage: "/partner-furioso.png",
    address: "Rua Diversão, 789",
    date: "02/02/2023",
    ticket: "R$ 60",
    observation: "Evento encerrado.",
  },
  {
    id: 3,
    name: "Festa Anterior 3",
    description: "Descrição completa da Festa Anterior 3",
    fullImage: "/partner-furioso.png",
    address: "Rua Festa, 101",
    date: "03/03/2023",
    ticket: "R$ 70",
    observation: "Evento encerrado.",
  },
  {
    id: 4,
    name: "O Covil",
    description: "Nova festa da Tan Tan",
    fullImage: "/partner-furioso-full.png",
    address: "Rua Furiosa, 123",
    date: "10/09/2023",
    ticket: "R$ 50",
    observation: "Entrada permitida apenas para maiores de 18 anos.",
  },
  {
    id: 5,
    name: "Campeonato de basquete",
    description: "Novo campeonato de basquete",
    fullImage: "/partner-furioso-full.png",
    address: "Rua Furiosa, 123",
    date: "10/09/2023",
    ticket: "R$ 70",
    observation: "Participação gratuita para sócios.",
  },
];

export default function AboutEvent() {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

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
            className={`${styles["container--title__vertical-subtitle"]}`}
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
              <Button title='Participar' path={`/eventos/${event.id}/inscricao`} />
            </div>
          </div>
        </section>
        <section className={styles["container--infos"]}>
          <EventInformationCard address={event.address} dates={[{ date: event.date, startHour: '08:00', endHour: '12:00' }]} observation={event.observation} image={event.fullImage} />
        </section>
      </PaperBackground>
    </>
  );
}
