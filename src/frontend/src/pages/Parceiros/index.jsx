import HorizontalSubtitle from '../../components/HorizontalSubtitle';
import MainTitle from '../../components/MainTitle';
import styles from './styles.module.scss';

export default function Parceiros() {
  return (
    <>
    <MainTitle
    shadowText="Parceiros"
    mainText="Parceiros"
    bgColor={styles.container__section}
    />
      <HorizontalSubtitle title='teste teste' colorImage='red' tag={false} />
      <div className={styles.container}>
      </div>
    </>
  );
}
