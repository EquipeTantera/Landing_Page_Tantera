import PropTypes from 'prop-types';
import styles from './SearchResults.module.scss';

export default function SearchResults({ totalProducts, totalPages }) {
  return (
    <div className={styles.results}>
      <p className={styles.text}>
        Resultados: <strong>{totalProducts}</strong> produtos em <strong>{totalPages}</strong> páginas
      </p>
    </div>
  );
}

SearchResults.propTypes = {
  totalProducts: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}; 