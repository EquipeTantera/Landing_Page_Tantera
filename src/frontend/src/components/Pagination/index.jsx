import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className={styles.pagination}>
      {pages.map(page => (
        <span
          key={page}
          className={`${styles.pagination__page} ${page === currentPage ? styles['pagination__page--active'] : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
      <span className={styles.pagination__separator}>|</span>
      <a
        href="#"
        className={styles.pagination__link}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(currentPage + 1);
        }}
      >
        Próxima página
      </a>
      <span className={styles.pagination__separator}>|</span>
      <a
        href="#"
        className={styles.pagination__link}
        onClick={(e) => {
          e.preventDefault();
          onPageChange(totalPages);
        }}
      >
        Última página
      </a>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
