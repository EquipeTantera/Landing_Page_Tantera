import { useParams } from 'react-router-dom';
import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss";
import LargeEventCard from "../../components/Card/LargeCard/LargeEventCard";
import PaperBackground from "../../components/PaperBackground";
import Form from "../../components/Card/FormCard";
import { useState, useEffect } from "react";
import { API_BASE_URL, BASE_URL } from "../../services/config";
import axios from "axios";

const events = [
  {
    id: 1,
    name: "Festa Anterior 1",
    type: "Festa",
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
    type: "Festa",
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
    type: "Outros",
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
    type: "Festa",
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
    type: "Campeonato",
    description: "Novo campeonato de basquete",
    fullImage: "/partner-furioso-full.png",
    address: "Rua Furiosa, 123",
    dates: [
      { date: '10/09/2023', startHour: '09:00', endHour: '18:00' },
    ],
  },
];

const courses = [
  { id: 1, name: "Engenharia" },
  { id: 2, name: "Medicina" },
  { id: 3, name: "Direito" },
];

const classes = [
  { id: 1, name: "Turma A" },
  { id: 2, name: "Turma B" },
];

const years = [
  { id: 1, year: "2020" },
  { id: 2, year: "2021" },
  { id: 3, year: "2022" },
];

export default function EventRegistration() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [participantType, setParticipantType] = useState('');
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados do evento no backend
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}?populate=*`);
        const eventData = response.data.data;

        const formattedEvent = {
          id: eventData.id,
          title: eventData.attributes.title || "Evento",
          description: eventData.attributes.description || "Sem descrição disponível",
          address: `${eventData.attributes.street || ''}, Nº ${eventData.attributes.number || ''}, CEP: ${eventData.attributes.postal_code || ''}`,
          dates: [
            {
              date: new Date(eventData.attributes.date).toLocaleDateString(),
              startHour: new Date(eventData.attributes.start_time).toLocaleTimeString(),
              endHour: new Date(eventData.attributes.end_time).toLocaleTimeString(),
            },
          ],
          fullImage: eventData.attributes.image?.data?.[0]?.attributes?.url || "", // Busca a imagem principal
          eventType: eventData.attributes.event_type?.data?.attributes?.type || "Desconhecido", // Tipo de evento
        };

        setEvent(formattedEvent); // Define o evento formatado no estado
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do evento:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (!event) {
    return <p>Evento não encontrado.</p>;
  }

  const formInputs = [
    { type: 'text', placeholder: 'Digite seu nome', label: 'Nome' },
    { type: 'number', placeholder: 'Digite seu número de telefone', label: 'Número de Telefone' },
    { type: 'email', placeholder: 'Digite seu e-mail', label: 'E-mail' },
    ...(event.type === 'Campeonato' ? [
      { 
        type: 'select', 
        label: 'Você é Jogador(a) ou Espectador(a)?', 
        placeholder: 'Selecione...', 
        options: [
          { value: 'Jogador', label: 'Jogador(a)' },
          { value: 'Espectador', label: 'Espectador(a)' },
        ],
        onChange: (e) => setParticipantType(e.target.value),
      }
    ] : []),
    
    { 
      type: 'select',
      label: 'Curso',
      placeholder: 'Selecione o Curso',
      options: courses.map(course => ({ value: String(course.id), label: course.name })), 
    },
    { 
      type: 'select',
      label: 'Turma',
      placeholder: 'Selecione a Turma',
      options: classes.map(classItem => ({ value: String(classItem.id), label: classItem.name })), 
    },
    { 
      type: 'select',
      label: 'Ano de Entrada',
      placeholder: 'Selecione o Ano de Entrada',
      options: years.map(year => ({ value: String(year.id), label: year.year })), 
    },
  ];

  return (
    <>
      <MainTitle shadowText="Inscrição" mainText={`${event.title} - Inscrição`} />
      <PaperBackground>
        <LargeEventCard 
          name={event.title}
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
            title="Formulário de Inscrição"
            inputs={formInputs}
            textButton="Enviar Inscrição"
            linkButton="#"
          />
        </section>
      </PaperBackground>
    </>
  );
}
