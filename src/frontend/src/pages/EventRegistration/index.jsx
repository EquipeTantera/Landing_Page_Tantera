import { useParams } from 'react-router-dom';
import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss";
import LargeEventCard from "../../components/Card/LargeCard/LargeEventCard";
import PaperBackground from "../../components/PaperBackground";
import Form from "../../components/Card/FormCard";

const events = [
  {
    id: 1,
    name: "Festa Anterior 1",
    description: "Descrição completa da Festa Anterior 1",
    fullImage: "/partner-furioso.png",
    address: "Rua Alegria, 456",
    dates: [
      { date: '01/01/2022', startHour: '18:00', endHour: '22:00' },
    ],
  },
  {
    id: 2,
    name: "Festa Anterior 2",
    description: "Descrição completa da Festa Anterior 2",
    fullImage: "/partner-furioso.png",
    address: "Rua Diversão, 789",
    dates: [
      { date: '02/02/2022', startHour: '19:00', endHour: '23:00' },
    ],
  },
  {
    id: 3,
    name: "Festa Anterior 3",
    description: "Descrição completa da Festa Anterior 3",
    fullImage: "/partner-furioso.png",
    address: "Rua Festa, 101",
    dates: [
      { date: '03/03/2023', startHour: '20:00', endHour: '00:00' },
    ],
  },
  {
    id: 4,
    name: "O Covil",
    description: "Nova festa da Tan Tan",
    fullImage: "/partner-furioso-full.png",
    address: "Rua Furiosa, 123",
    dates: [
      { date: '10/09/2023', startHour: '18:00', endHour: '22:00' },
    ],
  },
  {
    id: 5,
    name: "Campeonato de basquete",
    description: "Novo campeonato de basquete",
    fullImage: "/partner-furioso-full.png",
    address: "Rua Furiosa, 123",
    dates: [
      { date: '10/09/2023', startHour: '09:00', endHour: '18:00' },
    ],
  },
];

export default function EventRegistration() {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <p>Evento não encontrado.</p>;
  }

  const formInputs = [
    { type: 'text', placeholder: 'Digite seu nome', label: 'Nome' },
    { type: 'text', placeholder: 'Digite seu e-mail', label: 'E-mail' },
    { 
      type: 'select', 
      placeholder: 'Selecione seu motivo de contato', 
      options: [
        { value: 'motivo1', label: 'Motivo 1' },
        { value: 'motivo2', label: 'Motivo 2' },
        { value: 'motivo3', label: 'Motivo 3' },
      ], 
      label: 'Motivo' 
    },
    { type: 'textarea', placeholder: 'Digite sua mensagem', label: 'Mensagem' },
  ];
      
  return (
    <>
      <MainTitle shadowText="Inscrição" mainText={`${event.name} - Inscrição`} />
      <PaperBackground>
        <LargeEventCard 
          name={event.name}
          description={event.description}
          fullImage={event.fullImage}
          address={event.address}
          dates={event.dates}
          textButton="Saiba mais"
          linkButton={`/eventos/${event.id}`}
        />
        <section className={styles.form}>
          <div className={styles.tag} />
          <Form 
            title="Entre em Contato"
            inputs={formInputs}
            textButton="Enviar"
            linkButton="/contato" 
          />
        </section>
      </PaperBackground>
    </>
  );
}
