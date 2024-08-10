import styles from './styles.module.scss';
import Button from '../../components/Button';
import SmallProductCard from '../../components/SmallProductCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <Button 
            title={"teste do componente de botão"}
            path={"/parceiros"}
          />

          <SmallProductCard 
            type={"product"}
            title={"teste"}
            description={"teste de descrição do produto"}
            price={"10,00"}
            image={"photo-small-card.png"}
            buttonText={"Saiba mais"}
            buttonPath={"/"}
          />
        </section>
      </div>
    </>
  );
}
