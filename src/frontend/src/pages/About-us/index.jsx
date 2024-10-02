import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import FullBoardCard from "../../components/Card/BoardCard/FullBoardCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import Content from "../../components/Content";
import FormCard from "../../components/Card/FormCard";
import styles from "./styles.module.scss";

export default function AboutUs() {

  const inputs = [
    { type: 'text', placeholder: 'Seu nome', label: 'Nome' },
    { type: 'text', placeholder: 'Seu email', label: 'Email' },
    { type: 'select', placeholder: 'Selecione uma opção', label: 'Selecione', options: [
      { value: 'opcao1', label: 'Opção 1' },
      { value: 'opcao2', label: 'Opção 2' },
    ] 
    },
  ];
  return (
    <>
      <MainTitle 
        shadowText="Sobre nós"
        mainText="Sobre nós"
      />
      <div className={styles.aboutUsContainer}>
      <HorizontalSubtitle
          title="Fundação"
          colorImage="purple"
          titleSize="3rem"
          className={styles.horizontalSubtitle}
        />
        <VerticalSubtitle 
          title="Fundação"
          imageBackground="purple"
          className={styles.verticalSubtitle}
        />
          <Content 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
            className={styles.content}
          />
      </div>
      <div className={styles.imageContainer}>
        <img 
          src="/background_purple_events.png" 
          alt="Background About Us"
          className={styles.aboutUsImage}
        />
        <div className={styles.textOverlay}>
          <div className={styles.textContainer}>
            <p className={styles.normalText}>
              Estabelecer <span className={styles.highlightText}>identidade</span> e <span className={styles.highlightText}>tradição</span>;
            </p>
            <p className={styles.normalText}>
              Cultivar valores de <span className={styles.highlightText}>união</span> e <span className={styles.highlightText}>colaboração</span>;
            </p>
            <p className={styles.normalText}>
              Fomentar o <span className={styles.highlightText}>espírito</span> <span className={styles.highlightText}>esportivo</span>;
            </p>
            <p className={styles.normalText}>
              Incentivar a <span className={styles.highlightText}>vivência</span> <span className={styles.highlightText}>universitária</span>;
            </p>
            <p className={styles.normalText}>
              Gerar aprendizado sobre <span className={styles.highlightText}>gestão</span> e <span className={styles.highlightText}>trabalho</span> em equipe.
            </p>
          </div>
          <div className={styles.purposeTitle}>Propósito</div>

        </div>
      </div>
      <HorizontalSubtitle
          title="Diretorias"
          colorImage="red"
          titleSize="3rem"
          className={styles.horizontalSubtitle}
        />
      <div className={styles.directorSection}>
        <VerticalSubtitle 
          title="Diretoria"
          imageBackground="red"
          subtitle="presidência"
        />
        <div className={styles.fullBoardCardContainer}>
          {[...Array(6)].map((_, index) => (
            <FullBoardCard 
              key={index} 
              nameBoard={`Nome ${index + 1}`} 
              description="Integer ultrices elementum mauris nec tincidunt. Mauris et lectus vel nulla condimentum dapibus. Praesent " 
              className={styles.fullBoardCard}
            />
          ))}
        </div>
      </div>
      <HorizontalSubtitle 
        title="Mascote"
        colorImage="purple"
      />
      <div className={styles.mascotContainer}>
        <img 
          src="/mascot.png" 
          alt="Mascote"
          className={styles.mascotImage}
        />
      </div>

      <div className={styles.centeredContentContainer}>
        <Content 
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
          className={styles.centeredContent}
        />
      </div>
      <div className={styles.centeredContentForm}>
      <div className={styles.tag} />
      <FormCard 
            title="Entre em Contato" 
            inputs={inputs} 
            textButton="Enviar"
            linkButton="/submit"
            backgroundType="purple"
            inputStyle="white"
          />
      </div>
    </>
  );
}
