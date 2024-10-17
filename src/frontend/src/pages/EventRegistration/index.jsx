import { useParams } from 'react-router-dom';
import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss";
import LargeEventCard from "../../components/Card/LargeCard/LargeEventCard";
import PaperBackground from "../../components/PaperBackground";
import Form from "../../components/Card/FormCard";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../services/config";
import axios from "axios";

export default function EventRegistration() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [courses, setCourses] = useState([]);
  const [participantType, setParticipantType] = useState('');
  const [loading, setLoading] = useState(true);
  const [dropdownLoading, setDropdownLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", phone_number: "", email: "", participant: "", class_id: "", year_id: "", course_id: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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
              startHour: new Date(eventData.attributes.start_time).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }), // Remove os segundos
              endHour: new Date(eventData.attributes.end_time).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }), // Remove os segundos
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
          value: String(classItem.id), 
          label: String(classItem.attributes.class_course),
        }));

        const formattedYears = yearsResponse.data.data.map((yearItem) => ({
          value: String(yearItem.id),
          label: String(yearItem.attributes.year),
        }));

        const formattedCourses = coursesResponse.data.data.map((courseItem) => ({
          value: String(courseItem.id),
          label: String(courseItem.attributes.course_name),
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      data: {
        name: formData.name,
        phone_number: formData.phone_number,
        email: formData.email,
        participant: participantType === "Jogador" ? true : false,
        event_id: parseInt(id, 10), 
        class_id: formData.class_id ? parseInt(formData.class_id, 10) : null,
        year_id: formData.year_id ? parseInt(formData.year_id, 10) : null,
        course_id: formData.course_id ? parseInt(formData.course_id, 10) : null,
      },
    };

    setSending(true);

    try {
      await axios.post(`${API_BASE_URL}/event-forms`, payload);
      setSent(true);
      setSending(false);
    } catch (error) {
      console.error("Erro ao enviar a inscrição:", error);
      console.log("Payload:", payload);
      alert("Erro ao enviar a inscrição. Tente novamente.");
      setSending(false);
    }
  };

  if (loading || dropdownLoading) {
    return <p>Carregando...</p>;
  }

  if (!event) {
    return <p>Evento não encontrado.</p>;
  }

  const formInputs = [
    { type: 'text', placeholder: 'Digite seu nome', label: 'Nome', name: 'name', onChange: handleChange, value: formData.name },
    { type: 'text', placeholder: 'Digite seu número de telefone', label: 'Número de Telefone', name: 'phone_number', onChange: handleChange, value: formData.phone_number },
    { type: 'email', placeholder: 'Digite seu e-mail', label: 'E-mail', name: 'email', onChange: handleChange, value: formData.email },
    ...(event.eventType === 'Campeonato' ? [
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
      name: 'course_id',
      options: courses, 
      onChange: handleChange,
      value: formData.course_id,
    },
    { 
      type: 'select',
      label: 'Turma',
      placeholder: 'Selecione sua Turma',
      name: 'class_id',
      options: classes, 
      onChange: handleChange,
      value: formData.class_id,
    },
    { 
      type: 'select',
      label: 'Ano de Entrada',
      placeholder: 'Selecione o ano em que você entrou no Inteli',
      name: 'year_id',
      options: years, 
      onChange: handleChange,
      value: formData.year_id,
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
            textButton={sent ? "Enviado!" : "Enviar Inscrição"}
            onSubmit={handleSubmit}
            isContact={false}
          />
        </section>
      </PaperBackground>
    </>
  );
}
