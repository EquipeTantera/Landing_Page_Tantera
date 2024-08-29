import styles from './styles.module.scss';
import LargeProductCard from '../../components/LargeProductCard';
import LargeEventCard from '../../components/LargeEventCard';
import LargePartnerCard from '../../components/LargePartnerCard';
import CarouselCard from '../../components/CarouselCard';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';

export default function Home() {
  const carouselCards = [
    {
      image: '/partner-furioso.png',
      event: 'Evento 1',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 2',
    },
    {
      image: '/partner-furioso.png',
      event: 'Evento 3',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 4',
    },
    {
      image: '/partner-furioso.png',
      event: 'Evento 5',
    },
    {
      image: '/profile-tantech.jpeg',
      event: 'Evento 6',
    },
  ];

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
          <CarouselCard cards={carouselCards} />
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

          <LargeProductCard 
            name='Produto 1'
            description='Descrição do produto 1'
            fullImage='/product-1-full.png'
            price={100.00}
            colors={['Azul', 'Vermelho', 'Verde']}
            textButton='Comprar'
            linkButton='/'
            sizes={['P', 'M', 'G']}
          />

        </section>
      </div>
    </>
  );
}
