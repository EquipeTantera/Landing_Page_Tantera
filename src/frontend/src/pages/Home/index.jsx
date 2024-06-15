import VerticalSubtitle from '../../components/VerticalSubtitle';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <VerticalSubtitle title='teste teste' colorImage='red'/>
      <div className={styles.container}>
        <h1 className={styles.container__title}>Home</h1>
      </div>
    </>
  );
}
