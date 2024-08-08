import styles from './styles.module.scss';
import SmallCard from '../../components/SmallCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SmallCard 
          type='product'
          title='Caneca Tantera'
          date='2021-10-10'
          price={'20,00'}
          description={'Caneca de cerâmica com estampa de gato'}
          image={'photo-small-card.png'}
        />
        
      </div>
    </>
  );
}
