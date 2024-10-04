import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import FullBoardCard from "../../components/Card/BoardCard/FullBoardCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";
import Form from "../../components/Card/FormCard";
import styles from "./styles.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../services/config";

export default function AboutUs() {
  const [contactPurposes, setContactPurposes] = useState([]);

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
      placeholder: 'Digite seu número de WhatsApp',
      label: 'WhatsApp',
      name: 'whatsapp', 
    },
    {
      type: 'select',
      placeholder: 'Selecione seu motivo de contato',
      label: 'Motivo',
      name: 'purpose', 
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

  // Função para buscar os motivos de contato do backend
  useEffect(() => {
    const fetchContactPurposes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/purposes`);
        const contactPurposes = response.data.data;

        const formattedPurposes = contactPurposes.map((purpose) => ({
          value: purpose.attributes.purpose_name,
          label: purpose.attributes.purpose_name,
        }));

        setContactPurposes(formattedPurposes);
        console.log("Motivos de contato:", formattedPurposes);
      } catch (error) {
        console.error("Erro ao buscar motivos de contato:", error);
      }
    };

    fetchContactPurposes();
  }, []);

  return (
    <>
      <MainTitle 
        shadowText="Sobre nós"
        mainText="Sobre nós"
      />
      <section className={styles.section}>
        <div className={styles["container-about-us"]}>
          {window.innerWidth > 768 ? (
            <VerticalSubtitle 
              title="Fundação"
              imageBackground="purple"
            />
          ) : (
            <HorizontalSubtitle
              title="Fundação"
              colorImage="purple"
              titleSize="3rem"
              className={styles.horizontalSubtitle}
            />
          )}

          <div className={styles["container-about-us__content"]}>
            <Content 
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
            />
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
                <p className={styles["container-purpose__div__div-text__paragraph"]}>
                  Estabelecer <span className={styles["container-purpose__div__div-text__paragraph__span"]}>identidade</span> e <span className={styles["container-purpose__div__div-text__paragraph__span"]}>tradição</span>;
                </p>
                <p className={styles["container-purpose__div__div-text__paragraph"]}>
                  Cultivar valores de <span className={styles["container-purpose__div__div-text__paragraph__span"]}>união</span> e <span className={styles["container-purpose__div__div-text__paragraph__span"]}>colaboração</span>;
                </p>
                <p className={styles["container-purpose__div__div-text__paragraph"]}>
                  Fomentar o <span className={styles["container-purpose__div__div-text__paragraph__span"]}>espírito</span> <span className={styles["container-purpose__div__div-text__paragraph__span"]}>esportivo</span>;
                </p>
                <p className={styles["container-purpose__div__div-text__paragraph"]}>
                  Incentivar a <span className={styles["container-purpose__div__div-text__paragraph__span"]}>vivência</span> <span className={styles["container-purpose__div__div-text__paragraph__span"]}>universitária</span>;
                </p>
                <p className={styles["container-purpose__div__div-text__paragraph"]}>
                  Gerar aprendizado sobre <span className={styles["container-purpose__div__div-text__paragraph__span"]}>gestão</span> e <span className={styles["container-purpose__div__div-text__paragraph__span"]}>trabalho</span> em equipe.
                </p>
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
        <div className={styles["container-board"]}>
          <VerticalSubtitle 
            title="Diretoria"
            imageBackground="red"
            verticalText="Presidência"
            subtitle="presidência"
          />
          <div className={styles["container-board__div"]}>
            {[...Array(6)].map((_, index) => (
              <FullBoardCard 
                key={index} 
                nameBoard={`Nome ${index + 1}`} 
                description="Integer ultrices elementum mauris nec tincidunt. Mauris et lectus vel nulla condimentum dapibus. Praesent " 
                linkButton={`/diretoria/${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <HorizontalSubtitle 
          title="Mascote"
          titleSize="3rem"
          colorImage="purple"
        />
        <div className={styles["container-mascot"]}>
          <img 
            src="/mascot.png" 
            alt="Mascote"
            className={styles["container-mascot__image"]}
          />
        </div>
        <div className={styles["container-mascot__content"]}>
          <Content 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles["container-form"]}>
          <div className={styles["container-form__tag"]} />
          <Form 
            title="Entre em Contato"
            inputs={formInputs}
            textButton="Enviar"
            isContact={true} 
            onSubmit={() => {}}
            backgroundType="purple"
            inputStyle="white"
          />
        </div>
      </section>
    </>
  );
}
