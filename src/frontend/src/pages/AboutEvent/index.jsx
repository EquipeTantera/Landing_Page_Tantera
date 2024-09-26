import MainTitle from "../../components/MainTitle";
import VerticalSubtitle from "../../components/VerticalSubtitle";
import Content from "../../components/Content";
import EventInformationCard from "../../components/Card/InformationCard/EventInformationCard"; // Importando o EventInformationCard
import Button from "../../components/Buttons/Button";
import styles from "./styles.module.scss";

export default function AboutEvents() {
  return (
    <>
      <MainTitle shadowText="Evento" mainText="Copa Inteli" />
      <div className={styles.backgroundContainer}>
        <div className={styles.overlayContent}>
          <VerticalSubtitle 
            title="Sobre o evento"
            imageBackground="purple"
            className={styles.verticalSubtitle}
          />
          <div className={styles.contentContainer}>
            <Content 
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec aliquet sem. Morbi volutpat neque sed auctor elementum. Donec justo magna, porttitor in sagittis id, malesuada ac est. Aenean congue metus sed mauris pretium, vitae hendrerit nunc tincidunt."
              className={styles.content}
            />
            <div className={styles.buttonContainer}>
              <Button title='Participar' path='/' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eventInfoContainer}>
        <EventInformationCard 
          address='Rua dos Bobos, 0'
          dates={[
            {
              date: '01/01/2021',
              startHour: '08:00',
              endHour: '12:00',
            },
            {
              date: '02/01/2021',
              startHour: '08:00',
              endHour: '12:00',
            },
          ]}
          observation='Observação do evento'
          image='/copa-inteli.png'
        />
      </div>
    </>
  );
}
