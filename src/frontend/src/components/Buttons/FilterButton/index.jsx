import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function FilterButton({ text }) {
  return (
    <button className={styles.filterButton}>
      <img src="/icon-filter.svg" alt="Filtrar" className={styles.filterButton__icon} />
      <span className={styles.filterButton__text}>{text}</span>
    </button>
  );
}

FilterButton.propTypes = {
  text: PropTypes.string.isRequired,
};
