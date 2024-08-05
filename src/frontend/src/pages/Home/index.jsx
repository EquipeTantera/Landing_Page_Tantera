import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import Content from '../../components/Content';
import styles from './styles.module.scss';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <HorizontalSubtitle title='teste teste' colorImage='red' tag={false} />
      <div className={styles.container}>
        <section className={styles.container__section}>
          <Content 
            title={"teste do componente de conteúdo"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisi ac ultricies fermentum, nunc nunc ullamcorper purus, nec cursus nunc nunc nec"}
          />
          <Content 
            content={"Componente de conteúdo sem subtitulo"}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
