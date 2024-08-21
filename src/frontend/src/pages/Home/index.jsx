import styles from './styles.module.scss';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';
import LargePartnerCard from '../../components/Card/LargeCard/LargePartnerCard';

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

          <LargePartnerCard 
            name='Fulano de Tal'
            description='Fulano de Tal é uma empresa de tecnologia que atua no mercado de desenvolvimento de softwares e aplicativos.'
            fullImage='/partner-furioso-full.png'
            image='/partner-furioso.png'
            events={[
              {
                name: 'Evento 1',
                date: '01/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
              {
                name: 'Evento 2',
                date: '02/01/2021',
                startHour: '08:00',
                endHour: '12:00',
              },
            ]}
            impacts={[
              { name: 'Impacto 1' },
              { name: 'Impacto 2' },
            ]}
            textButton='Conhecer a empresa'
            linkButton='/'
          />

        </section>
      </div>
    </>
  );
}
