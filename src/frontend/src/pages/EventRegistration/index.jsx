import { useParams } from 'react-router-dom';
import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss";
import LargeEventCard from "../../components/Card/LargeCard/LargeEventCard";
import PaperBackground from "../../components/PaperBackground";
import Form from "../../components/Card/FormCard";
import { useState, useEffect } from "react";
import { API_BASE_URL, BASE_URL } from "../../services/config";
import axios from "axios";

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
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [courses, setCourses] = useState([]);
  const [participantType, setParticipantType] = useState('');
  const [loading, setLoading] = useState(true);
  const [dropdownLoading, setDropdownLoading] = useState(true);

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
          fullImage: eventData.attributes.image?.data?.[0]?.attributes?.url || "", 
          eventType: eventData.attributes.event_type?.data?.attributes?.type || "Desconhecido", 
        };

        setEvent(formattedEvent); 
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do evento:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [id]);

  // Função para buscar dados de classes, cursos e anos
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const [classesResponse, yearsResponse, coursesResponse] = await Promise.all([
          axios.get(`${API_BASE_URL}/classes?populate=*`),
          axios.get(`${API_BASE_URL}/years?populate=*`),
          axios.get(`${API_BASE_URL}/courses?populate=*`),
        ]);

        const formattedClasses = classesResponse.data.data.map((classItem) => ({
          value: classItem.id,
          label: classItem.attributes.class_course,
        }));

        const formattedYears = yearsResponse.data.data.map((yearItem) => ({
          value: yearItem.id,
          label: yearItem.attributes.year,
        }));

        const formattedCourses = coursesResponse.data.data.map((courseItem) => ({
          value: courseItem.id,
          label: courseItem.attributes.course_name,
        }));

        setClasses(formattedClasses);
        setYears(formattedYears);
        setCourses(formattedCourses);
        setDropdownLoading(false); 
      } catch (error) {
        console.error("Erro ao buscar dados dos dropdowns:", error);
        setDropdownLoading(false);
      }
    };

    fetchDropdownData();
  }, []);

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
      placeholder: 'Selecione seu Curso',
      options: courses, 
    },
    { 
      type: 'select',
      label: 'Turma',
      placeholder: 'Selecione sua Turma',
      options: classes, 
    },
    { 
      type: 'select',
      label: 'Ano de Entrada',
      placeholder: 'Selecione o ano em que você entrou no Inteli',
      options: years, 
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
