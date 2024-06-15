import Content from '../../components/Content';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.container__section}>
        <Content 
          title={"teste do componente de conteúdo"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisi ac ultricies fermentum, nunc nunc ullamcorper purus, nec cursus nunc nunc nec"}
        />
      </section>

    </div>
  );
}
