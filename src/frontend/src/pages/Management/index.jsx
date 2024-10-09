import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import ProfileCard from "../../components/Card/ProfileCard";
import Content from "../../components/Content";
import ManagementInformationCard from "../../components/Card/InformationCard/ManagementInformationCard";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import SummaryBoardCard from "../../components/Card/BoardCard/SummaryBoardCard";
import SmallManagementCard from "../../components/Card/SmallCard/SmallManagementCard";

export default function Management() {
  return (
    <>
      <MainTitle 
        shadowText="Gestão"
        mainText="Gestão 2024"
      />

      <section>
        <div>
          <VerticalSubtitle 
            title="Presidência"
            imageBackground="red"
            verticalText="Presidiência"
          />
        </div>

        <div>
          <ProfileCard 
            image="https://placehold.co/400"
            role="Presidente"
            name="Raphaela"
          />

          <div>
            <Content 
              content="A presidência da Atlética Tantera atua como guia estratégico, orientando a organização em suas principais decisões e garantindo que cada diretoria trabalhe de forma alinhada aos nossos valores. Com foco em inovação e crescimento, a presidência promove iniciativas que reforçam a união entre os membros e ampliam o impacto da Atlética dentro e fora da comunidade Inteli. A presidência também foca em promover um ambiente colaborativo, onde a diversidade de talentos é valorizada, e a inovação é estimulada em todas as frentes."
            />
          </div>

          <div>
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

      <section>
        <HorizontalSubtitle 
          title="Diretorias"
          colorImage="purple"
        />

        <div>
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

      <section>
        <HorizontalSubtitle 
          title="Gestões Anteriores"
          colorImage="red"
        />

        <div>
          <SmallManagementCard 
            nameManagement="Gestão 2023"
            buttonPath="/"
          />
        </div>
      </section>
    </>
  );
}