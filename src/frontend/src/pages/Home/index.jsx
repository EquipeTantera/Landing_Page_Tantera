import styles from './styles.module.scss';
import Button from '../../components/Button';
import SmallEventCard from '../../components/SmallEventCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <Button 
            title={"teste do componente de botão"}
            path={"/parceiros"}
          />

          <SmallEventCard 
            title={"teste do componente de evento"}
            date={"01/01/2022"}
            ticket={"R$ 100,00"}
            address={"Rua do Evento, 123"}
            image={"photo-small-card.png"}
            buttonText={"Saiba Mais"}
            buttonPath={"/eventos"}
          />
        </section>
      </div>
    </>
  );
}
