import styles from './styles.module.scss';
import LargeProductCard from '../../components/LargeProductCard';

export default function Home() {
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
        </section>
      </div>
    </>
  );
}
