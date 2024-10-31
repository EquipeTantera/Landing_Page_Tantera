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
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    class_id: "",
    year_id: "",
    course_id: "",
    plan_ids: "",
  });  
  const [sent, setSent] = useState(false);
  const [classes, setClasses] = useState([]);
  const [years, setYears] = useState([]);
  const [courses, setCourses] = useState([]);
  const [FAQLoading, setFAQLoading] = useState(true);
  const [FAQ, setFAQ] = useState([]);
  const [plansData, setPlansData] = useState([]);

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

  // Função para buscar os dados dos planos de sócio
  useEffect(() => {
    const fetchMembershipPlanData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/plans?populate=*`);

        // Formatação de todos os planos de sócio
        const formattedPlansData = response.data.data.map((planItem) => ({
          id: planItem.id,
          name: planItem.attributes.name,
          price: planItem.attributes.price,
          description: planItem.attributes.description || "Descrição não disponível",
          fullImage: planItem.attributes.image?.data?.attributes?.formats?.small?.url || "default-image-url",
          advantages: planItem.attributes.advantage_id?.data?.map(
            (advantage) => advantage.attributes.description
          ) || [],
          paymentTypes: [planItem.attributes.payment?.data?.attributes?.name || "N/A"], 
          participants: planItem.attributes.event_forms?.data?.map(
            (form) => form.attributes.name
          ) || [],
        }));

        setPlansData(formattedPlansData); 
        console.log("Plans Data:", formattedPlansData);
      } catch (error) {
        console.error("Erro ao buscar dados dos planos de sócio:", error);
      }
    };

    fetchMembershipPlanData();
  }, []);

  const handleSubmit = async () => {
    // Formatar o payload conforme necessário
    const payload = {
      data: {
        name: formData.name,
        phone_number: formData.phone_number,
        email: formData.email,
        participant: true, 
        plan_ids: formData.plan_ids ? parseInt(formData.plan_ids, 10) : null, 
        class_id: formData.class_id ? parseInt(formData.class_id, 10) : null,
        year_id: formData.year_id ? parseInt(formData.year_id, 10) : null,
        course_id: formData.course_id ? parseInt(formData.course_id, 10) : null,
      },
    };
  
    try {
      const response = await axios.post(`${API_BASE_URL}/event-forms`, payload);
      setSent(true);
      console.log("Inscrição realizada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar a inscrição:", error.response?.data || error.message);
      console.log("Erro detalhado:", error.response?.data?.error || error.message);
      alert(`Erro ao enviar a inscrição: ${error.response?.data?.error?.message || error.message}`);
    }
  };
  

  const formInputs = [
    {type: "text", placeholder: 'Digite seu nome completo', name: "name", label: "Nome", onChange: handleChange, value: formData.name},
    {type: 'email', placeholder: 'Digite seu e-mail', label: 'E-mail', name: 'email', onChange: handleChange, value: formData.email},
    {type: "tel", placeholder:'Digite seu telefone', name: "phone_number", label: "Telefone", onChange: handleChange, value: formData.phone_number},
    {
      type: "select",
      label: "Plano de Sócio",
      placeholder: "Selecione o Plano de Sócio",
      name: "plan_ids",
      options: plansData.map((plan) => ({ value: plan.id, label: plan.name })),
      onChange: handleChange,
      value: formData.plan_ids,
    },
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
        {plansData.map((plan) => (
          <LargeMembershipPlanCard 
            key={plan.id}
            name={plan.name}
            description={plan.description} // Certifique-se de passar a descrição
            fullImage={plan.fullImage}     // Certifique-se de passar a imagem correta
            price={plan.price}
            advantages={plan.advantages}
            paymentTypes={plan.paymentTypes} // Corrigir para `paymentTypes`
          />
        ))}
          
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