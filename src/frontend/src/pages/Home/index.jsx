import styles from './styles.module.scss';
import LargeEventCard from '../../components/LargeEventCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <LargeEventCard 
            name="Furioso"
            description="A Furioso é uma empresa de tecnologia que atua no mercado de desenvolvimento de software."
            image='/partner-furioso.png'
            fullImage='/partner-furioso-full.png'
            address={"Rua das Flores, 123"}
            dates={[
              { date: '20/01', startHour: '10h', endHour: '11h' },
              { date: '20/01', startHour: '10h', endHour: '11h' },
            ]}
            textButton="Conheça mais"
            linkButton="/furioso"
          />
        </section>
      </div>
    </>
  );
}
