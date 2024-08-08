import styles from './styles.module.scss';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.container__section}>
          <Button 
            title={"teste do componente de botão"}
            path={"/parceiros"}
          />
        </section>
      </div>
    </>
  );
}
