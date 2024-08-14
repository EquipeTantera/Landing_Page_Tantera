import styles from './styles.module.scss';
import LargePartnerCard from '../../components/LargePartnerCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <LargePartnerCard 
            name="Furioso"
            description="A Furioso é uma empresa de tecnologia que atua no mercado de desenvolvimento de software."
            image='/partner-furioso.png'
            fullImage='/partner-furioso-full.png'
            events={[
              { name: 'Evento 1', date: '01/01/2021' },
              { name: 'Evento 2', date: '02/02/2021' },
            ]}
            impacts={[
              { name: 'Impacto 1' },
              { name: 'Impacto 2' },
              { name: 'Impacto 2' },
            ]}
            textButton="Conheça mais"
            linkButton="/furioso"
          />
        </section>
      </div>
    </>
  );
}
