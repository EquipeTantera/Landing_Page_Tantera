import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__numbers}>
        {pages.map(page => (
          <span
            key={page}
            className={`${styles.pagination__page} ${page === currentPage ? styles['pagination__page--active'] : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>
      <span className={styles.pagination__separator1}>|</span>
      <div className={styles.pagination__links}>
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
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
