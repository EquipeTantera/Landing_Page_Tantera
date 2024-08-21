import styles from './styles.module.scss';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>

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

        </section>
      </div>
    </>
  );
}
