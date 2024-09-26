import MainTitle from "../../components/MainTitle";
import styles from "./styles.module.scss"; // Importando o arquivo de estilos

export default function AboutEvents() {
  return (
    <>
      <MainTitle shadowText="Evento" mainText="Copa inteli" />
      <div className={styles.backgroundContainer}>
      </div>
    </>
  );
}
