import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <HorizontalSubtitle title='teste teste' colorImage='red' tag={false}/>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Home</h1>
      </div>
    </>
  );
}
