import React from "react";
import MainTitle from "../../components/MainTitle";
import PaperBackground from "../../components/PaperBackground";
import LargeMembershipPlanCard from "../../components/Card/LargeCard/LargeMembershipPlanCard";
import Accordion from "../../components/Accordion";
import styles from "./styles.module.scss";
import FormCard from "../../components/Card/FormCard";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../services/config";
import axios from "axios";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";

export default function MembershipPlan() {
  const [formData, setFormData] = useState({ name: "", phone_number: "", email: "", class_id: "", year_id: "", course_id: "" });
  const [sent, setSent] = useState(false);
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [courses, setCourses] = useState([]);
  const [FAQLoading, setFAQLoading] = useState(true);
  const [FAQ, setFAQ] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      } catch (error) {
        console.error("Erro ao buscar dados dos dropdowns:", error);
      }
    };

    fetchDropdownData();
  }, []);

  // Função para buscar as perguntas e respostas do FAQ
  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/faqs`);
        const formattedFAQ = response.data.data.map((faqItem) => ({
          buttonText: faqItem.attributes.question,
          panelText: faqItem.attributes.answer,
          colorImage: "purple",
        }));

        setFAQ(formattedFAQ);
        setFAQLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do FAQ:", error);
        setFAQLoading(false);
      }
    };

    fetchFAQData();
  }, []);

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

  const formInputs = [
    {type: "text", name: "name", label: "Nome", required: true},
    {type: "email", name: "email", label: "E-mail", required: true},
    {type: "tel", name: "phone_number", label: "Telefone", required: true},
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
  ]

  return (
    <>
      <MainTitle 
        shadowText="Seja sócio"
        mainText="Planos de Sócios"
      />

      <PaperBackground>
        <section>
          <LargeMembershipPlanCard 
            name="Plano de Sócio"
            description="Descrição do plano de sócio"
            fullImage="https://via.placeholder.com/150"
            advantages={[
              "Vantagem 1",
              "Vantagem 2",
              "Vantagem 3",
            ]}
            paymentTypes={[
              "Tipo de pagamento 1",
              "Tipo de pagamento 2",
              "Tipo de pagamento 3",
            ]}
            price="100,00"
          />
        </section>

        <section className={styles["section--register"]}>
          <div className={styles["section--register__title"]}>
            <HorizontalSubtitle 
              title="Inscreva-se já"
              colorImage="transparent"
            />
          </div>
          <div className={styles["section--register__form"]}>
            <FormCard 
              title="Formulário de Inscrição"
              inputs={formInputs}
              textButton={sent ? "Enviado!" : "Enviar Inscrição"}
              onSubmit={handleSubmit}
              isContact={false}
            />
          </div>
        </section>

        <section className={styles["section--faq"]}>
          {FAQLoading && <p>Carregando...</p>}
          <Accordion 
            items={FAQ}
          />
        </section>
      </PaperBackground>
    </>
  );
}