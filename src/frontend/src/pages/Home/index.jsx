import styles from './styles.module.scss';
import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import EventInformationCard from '../../components/Card/InformationCard/EventInformationCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <HorizontalSubtitle 
            title="Produtos"
            tag="false"
            colorImage='transparent'
          />

          <EventInformationCard 
            address='Rua dos Bobos, 0'

          />

        </section>
      </div>
    </>
  );
}
