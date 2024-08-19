import styles from './styles.module.scss';
import LargeProductCard from '../../components/LargeProductCard';
import LargeEventCard from '../../components/LargeEventCard';
import LargePartnerCard from '../../components/LargePartnerCard';
import CarouselCard from '../../components/CarouselCard';

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
          <LargeProductCard 
            name="Camiseta Furioso"
            description="Camiseta da empresa Furioso"
            fullImage="/partner-furioso-full.png"
            sizes={['P', 'M', 'G', 'GG']}
            colors={['Branca', 'Preta', 'Vermelha']}
            price="50,00"
            textButton="Comprar"
            linkButton="/comprar"
          />

          <LargeEventCard 
            name="Evento Furioso"
            description="Evento da empresa Furioso"
            fullImage="/partner-furioso-full.png"
            address='Rua Furiosa, 123'
            dates={[
              { date: '01/01/2022', startHour: '18:00', endHour: '22:00' },
              { date: '02/01/2022', startHour: '19:00', endHour: '23:00' },
            ]}
            textButton="Saiba mais"
            linkButton="/comprar"
          />
          <CarouselCard cards={carouselCards} />
          <LargePartnerCard 
            name="Furioso"
            description="Empresa Furioso"
            image="/partner-furioso.png"
            fullImage="/partner-furioso-full.png"
            events={[
              { name: 'Evento 1', date: '01/01/2022' },
              { name: 'Evento 2', date: '02/01/2022' },
            ]}
            impacts={[
              { name: 'Impacto 1' },
              { name: 'Impacto 2' },
            ]}
            textButton="Saiba mais"
            linkButton="/comprar"
          />
        </section>
      </div>
    </>
  );
}
