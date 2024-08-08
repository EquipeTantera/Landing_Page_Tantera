import styles from './styles.module.scss';
import SmallEventCard from '../../components/SmallEventCard';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SmallEventCard
          title='Caneca Tantera'
          date='2021-10-10'
          ticket={'20,00'}
          image={'photo-small-card.png'}
        />
        
      </div>
    </>
  );
}
