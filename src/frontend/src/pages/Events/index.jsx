import MainTitle from "../../components/MainTitle";
import HorizontalSubtitle from "../../components/HorizontalSubtitle";
import MediumEventCard from "../../components/Card/MediumEventCard";
import CarouselSmallEventCard from "../../components/Carousels/CarouselSmallEventCard";
import styles from "./styles.module.scss";

export default function Events() {
  const pastEvents = [
    {
      title: "Festa Anterior 1",
      date: "01/01/2023",
      ticket: "R$ 50",
      address: "Rua Alegria, 456",
      image: "/partner-furioso.png",
      buttonText: "Saiba mais",
      buttonPath: "/comprar",
    },
    {
      title: "Festa Anterior 2",
      date: "02/02/2023",
      ticket: "R$ 60",
      address: "Rua Diversão, 789",
      image: "/partner-furioso.png",
      buttonText: "Saiba mais",
      buttonPath: "/comprar",
    },
    {
      title: "Festa Anterior 3",
      date: "03/03/2023",
      ticket: "R$ 70",
      address: "Rua Festa, 101",
      image: "/partner-furioso.png",
      buttonText: "Saiba mais",
      buttonPath: "/comprar",
    },
  ];

  return (
    <>
      <MainTitle shadowText="Eventos" mainText="Eventos" />

      <section className={styles.container__fests}>
        <HorizontalSubtitle title="Festas" colorImage="purple" titleSize="3rem" />
        <div className={styles.container__fests__nextParty}>
          <p className={styles.container__fests__nextParty__text}>Próxima festa</p>
        </div>
        
        <div className={styles.container__fests__cards}>
          <MediumEventCard 
            title="O Covil"
            description="Nova festa da Tan Tan"
            image="/partner-furioso-full.png"
            address="Rua Furiosa, 123"
            date="10/09/2023"
            ticket="01/01/01"
            buttonText="Saiba mais"
            linkButton="/comprar"
          />
        </div>

        <div className={styles.container__fests__nextParty}>
          <p className={styles["container__fests__nextParty__text--second"]}>Festas anteriores</p>
        </div>

        <div className={styles.container__fests__carousel}>
          <CarouselSmallEventCard events={pastEvents} interval={3000} />
        </div>
      </section>

      <section className={styles.container__championships}>  
        <HorizontalSubtitle title="Campeonatos" colorImage="red" titleSize="3rem" />
        <div className={styles.container__championships__nextParty}>
          <p className={styles.container__fests__nextParty__text}>Próximo campeonato</p>
        </div>
      
        <div className={styles.container__championships__cards}>
          <MediumEventCard 
            title="Campeonato de basquete"
            description="Novo campeonato de basquete"
            image="/partner-furioso-full.png"
            address="Rua Furiosa, 123"
            date="10/09/2023"
            ticket="01/01/01"
            buttonText="Saiba mais"
            linkButton="/evento"
          />
        </div>

        <div className={styles.container__championships__nextParty}>
          <p className={styles["container__championships__nextParty__text--second"]}>Campeonatos Anteriores</p>
        </div>

        <div className={styles.container__championships__carousel}>
          <CarouselSmallEventCard events={pastEvents} interval={3000} />
        </div>
      </section>  
    </>
  );
}
