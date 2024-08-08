import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function SummaryBoardCard({ name, image }) {
  return (
    <section className={styles.section}>
      <img className={styles.section__image} src={`${image}.png`} alt={name} />
      <h2 className={styles.section__title}>
        <span className={styles.section__title__span}>Diretor(a): </span>{name}
      </h2>
    </section>
  )
}

SummaryBoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};