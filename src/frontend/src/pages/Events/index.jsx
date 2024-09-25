import MainTitle from "../../components/MainTitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import MediumEventCard from "../../components/Card/MediumEventCard";
import SmallEventCard from "../../components/Card/SmallCard/SmallEventCard";
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
        <p className={styles.nextPartyText}>próxima festa</p>
      </div>
      
      <div className={styles.eventCardContainer}>
        <MediumEventCard 
          title="O Covil"
          description="Nova festa da Tan Tan"
          image="/partner-furioso-full.png"
          address='Rua Furiosa, 123'
          date="10/09/2023"
          ticket="01/01/01"
          buttonText="Saiba mais"
          linkButton="/comprar"
        />
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.nextParty}>
        <p className={styles.nextPartyText}>Festas anteriores</p>
      </div>

      <div className={styles.smallEventCards}>
        <SmallEventCard 
          title="Festa Anterior 1"
          date="01/01/2023"
          ticket="R$ 50"
          address="Rua Alegria, 456"
          image="/partner-furioso.png"
          buttonText="Saiba mais"
          buttonPath="/comprar"
        />
        <SmallEventCard 
          title="Festa Anterior 2"
          date="02/02/2023"
          ticket="R$ 60"
          address="Rua Diversão, 789"
          image="/partner-furioso.png"
          buttonText="Saiba mais"
          buttonPath="/comprar"
        />
        <SmallEventCard 
          title="Festa Anterior 3"
          date="03/03/2023"
          ticket="R$ 70"
          address="Rua Festa, 101"
          image="/partner-furioso.png"
          buttonText="Saiba mais"
          buttonPath="/comprar"
        />
      </div>
    </>
  );
}
