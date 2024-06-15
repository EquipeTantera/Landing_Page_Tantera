import Content from '../../components/Content';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Home</h1>

      <Content 
        title={"teste"}
        content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisi ac ultricies fermentum, nunc nunc ullamcorper purus, nec cursus nunc nunc nec"}
      />

    </div>
  );
}
