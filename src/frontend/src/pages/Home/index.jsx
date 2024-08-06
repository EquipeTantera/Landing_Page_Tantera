import VerticalSubtitle from '../../components/VerticalSubtitle';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <VerticalSubtitle />
        </section>
      </div>
    </>
  );
}
