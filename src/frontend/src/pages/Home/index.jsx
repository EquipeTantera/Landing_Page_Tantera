import styles from './styles.module.scss';
import Footer from '../../components/Footer';
import SmallCard from '../../components/SmallCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SmallCard 
          type='product'
          title='Caneca Tantera'
          date='2021-10-10'
          
        />
        
      </div>
      <Footer />
    </>
  );
}
