import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import ProfileCard from "../../components/Card/ProfileCard";
import Content from "../../components/Content";
import ManagementInformationCard from "../../components/Card/InformationCard/ManagementInformationCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import SummaryBoardCard from "../../components/Card/BoardCard/SummaryBoardCard";
import SmallManagementCard from "../../components/Card/SmallCard/SmallManagementCard";
import styles from './styles.module.scss';

export default function Management() {
  return (
    <>
      <MainTitle 
        shadowText="Gestão"
        mainText="Gestão 2024"
      />

      <section className={styles["container--presidency"]}>
        <div className={styles["container--presidency__subtitle"]}>
          <VerticalSubtitle 
            title="Presidência"
            imageBackground="red"
            subtitle="Presidência"
            verticalText="Presidiência"
          />

          <HorizontalSubtitle 
            title="Presidência"
            colorImage="red"
            className={styles["container--presidency__subtitle__horizontal"]}
          />
        </div>

        <div className={styles["container--presidency__infos"]}>
          <div className={styles["container--presidency__infos__profile"]}>
            <ProfileCard 
              image="https://placehold.co/400"
              role="Presidente"
              name="Raphaela"
            />
          </div>

          <div className={styles["container--presidency__infos__content"]}>
            <Content 
              content="A presidência da Atlética Tantera atua como guia estratégico, orientando a organização em suas principais decisões e garantindo que cada diretoria trabalhe de forma alinhada aos nossos valores. Com foco em inovação e crescimento, a presidência promove iniciativas que reforçam a união entre os membros e ampliam o impacto da Atlética dentro e fora da comunidade Inteli. A presidência também foca em promover um ambiente colaborativo, onde a diversidade de talentos é valorizada, e a inovação é estimulada em todas as frentes."
            />
          </div>

          <div className={styles["container--presidency__infos__results"]}>
            <ManagementInformationCard 
              termOfOffice="janeiro de 2024 - novembro de 2024"
              results={[
                { name: "6 diretorias" },
                { name: "+ de 12 eventos" },
                { name: "+ de 30 membros" }
              ]}
              title="Resultados"
            />
          </div>
        </div>
      </section>

      <section className={styles["container--boards"]}>
        <HorizontalSubtitle 
          title="Diretorias"
          colorImage="purple"
        />

        <div className={styles["container--boards__content"]}>
          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />

          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />

          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />

          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />

          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />

          <SummaryBoardCard 
            name="Tantech"
            image="/summary-board-card-tantech"
            buttonPath="/"
          />
        </div>
      </section>

      <section className={styles["container--previous-management"]}>
        <HorizontalSubtitle 
          title="Gestões Anteriores"
          colorImage="red"
        />

        <div className={styles["container--previous-management__content"]}>
          <SmallManagementCard 
            nameManagement="Gestão 2023"
            buttonPath="/"
          />
        </div>
      </section>
    </>
  );
}