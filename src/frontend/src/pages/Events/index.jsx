import MainTitle from "../../components/MainTitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import EventInformationCard from "../../components/Card/InformationCard/EventInformationCard";
import styles from "./styles.module.scss";

export default function Events() {
  return (
    <>
      <MainTitle 
        shadowText="Eventos"
        mainText="Eventos"
      />
      <HorizontalSubtitle 
        title="Festas"
        colorImage="purple"
        titleSize="3rem"
      />
      <div className={styles.nextParty}>
        <p className={styles.nextPartyText}>
          próxima festa
        </p>
      </div>
      <EventInformationCard
        address="Endereço da festa"
        dates={[
          { date: "Data 1", startHour: "18:00", endHour: "23:00" },
          { date: "Data 2", startHour: "18:00", endHour: "23:00" }
        ]}
        observation="Observação importante sobre a festa"
        image="url_da_imagem"
      />
    </>
  );
}
