import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../services/config";
import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";
import FullBoardCard from "../../components/Card/BoardCard/FullBoardCard";
import styles from "./styles.module.scss";

// formulário de contato
const Form = ({ inputs, textButton, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {inputs.map((input, index) => (
        <div key={index} className={styles.formField}>
          <label className={styles.formLabel}>{input.label}</label>
          {input.type === 'select' ? (
            <select
              name={input.name}
              onChange={handleChange}
              className={styles.formSelect}
            >
              {input.options.map((option, idx) => (
                <option key={idx} value={option.value}>{option.label}</option>
              ))}
            </select>
          ) : input.type === 'textarea' ? (
            <textarea
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleChange}
              className={styles.formTextarea}
            />
          ) : (
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleChange}
              className={styles.formInput}
            />
          )}
        </div>
      ))}
      <button type="submit" className={styles.formButton}>
        {textButton}
      </button>
    </form>
  );
};

// página sobre nós
export default function AboutUs() {
  const [contactPurposes, setContactPurposes] = useState([]);
  const [foundationDescription, setFoundationDescription] = useState('');
  const [mascotDescription, setMascotDescription] = useState('');
  const [mascotImage, setMascotImage] = useState('');
  const [directories, setDirectories] = useState([]);
  const [purposeList, setPurposeList] = useState([]);
  const formInputs = [
    {
      type: 'text',
      placeholder: 'Digite seu nome',
      label: 'Nome',
      name: 'name',
    },
    {
      type: 'email',
      placeholder: 'Digite seu e-mail',
      label: 'E-mail',
      name: 'email',
    },
    {
      type: 'text',
      placeholder: 'Digite seu número de telefone',
      label: 'Telefone',
      name: 'telephone',
    },
    {
      type: 'select',
      placeholder: 'Selecione seu motivo de contato',
      label: 'Motivo',
      name: 'purpose_id',
      options: [
        ...contactPurposes,
      ],
    },
    {
      type: 'textarea',
      placeholder: 'Digite sua mensagem',
      label: 'Mensagem',
      name: 'message',
    },
  ];

  // Função para buscar os dados do backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePurposes = await axios.get(`${API_BASE_URL}/purposes`);
        const contactPurposes = responsePurposes.data.data;
        const formattedPurposes = contactPurposes.map((purpose) => ({
          value: purpose.id, 
          label: purpose.attributes.purpose_name,
        }));
        setContactPurposes(formattedPurposes);
        const responseAboutUs = await axios.get(`${API_BASE_URL}/about-uses`);
        const aboutUsData = responseAboutUs.data.data[0].attributes;
        setFoundationDescription(aboutUsData.foundation);
        setMascotDescription(aboutUsData.mascot_description);
        setMascotImage(aboutUsData.mascot_image_url);
        const purposesArray = aboutUsData.purpose.split(';').map(p => p.trim());
        setPurposeList(purposesArray);
        const responseDirectories = await axios.get(`${API_BASE_URL}/specific-boards`);
        setDirectories(responseDirectories.data.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  // Função para enviar dados do formulário
  const handleSubmit = async (formData) => {
    try {
      await axios.post(`${API_BASE_URL}/contacts`, {
        data: {
          name: formData.name,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
          purpose_id: formData.purpose_id,
        }
      });
      alert("Contato enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      alert("Houve um erro ao enviar seu contato. Tente novamente.");
    }
  };
  return (
    <>
      <MainTitle shadowText="Sobre nós" mainText="Sobre nós" />

      
      <section className={styles.section}>
        <div className={styles["container-about-us"]}>
          {window.innerWidth > 768 ? (
            <VerticalSubtitle title="Fundação" imageBackground="purple" />
          ) : (
            <HorizontalSubtitle
              title="Fundação"
              colorImage="purple"
              titleSize="3rem"
              className={styles.horizontalSubtitle}
            />
          )}
          <div className={styles["container-about-us__content"]}>
            <Content content={foundationDescription || "Carregando..."} />
          </div>
        </div>
      </section>

      <section className={styles["section-purpose"]}>
        <div className={styles["container-purpose"]}>
          <div className={styles["container-purpose__div"]}>
            <div className={styles["container-purpose__div__div-text"]}>
              <div className={styles["container-purpose__div__div-text__title"]}>
                <h3 className={styles["container-purpose__div__div-text__title"]}>Propósito</h3>
              </div>
              <div>
                {purposeList.length > 0 ? (
                  purposeList.map((purpose, index) => (
                    <p key={index} className={styles["container-purpose__div__div-text__paragraph"]}>
                      {purpose}
                    </p>
                  ))
                ) : (
                  <p>Carregando propósitos...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <HorizontalSubtitle
          title="Diretorias"
          colorImage="red"
          titleSize="3rem"
          className={styles.horizontalSubtitle}
        />
        <div className={styles.containerBoard}>
          <VerticalSubtitle
            title="Diretoria"
            imageBackground="red"
            verticalText="Presidência"
            subtitle="presidência"
          />
          <div className={styles.boardDiv}>
            {directories.map((directory) => (
              <FullBoardCard
                key={directory.id}
                nameBoard={directory.attributes.name}
                description={directory.attributes.about}
                linkButton={`/diretoria/${directory.id}`}
              />
            ))}
          </div>
        </div>
      </section>


      <section className={styles.section}>
        <HorizontalSubtitle title="Mascote" titleSize="3rem" colorImage="purple" />
        <div className={styles["container-mascot"]}>
          <img
            src={mascotImage || "/mascot.png"}
            alt="Mascote"
            className={styles["container-mascot__image"]}
          />
        </div>
        <div className={styles["container-mascot__content"]}>
          <Content content={mascotDescription || "Carregando..."} />
        </div>
      </section>


      <section className={styles.section}>
        <HorizontalSubtitle title="Entre em contato" colorImage="purple" titleSize="3rem" />
        <div className={styles["container-form"]}>
          <div className={styles["container-form__tag"]} />
          <Form inputs={formInputs} textButton="Enviar" onSubmit={handleSubmit} />
        </div>
      </section>
    </>
  );
}