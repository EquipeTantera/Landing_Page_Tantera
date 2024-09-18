import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Impacts({ contents, isFull = false }) {
  return (
    <ul className={styles.list}>
      {contents.map((content) => (
        <li
          key={content.name}
          className={`${styles.list__item} ${isFull ? styles.list__item__full : ''}`}
        >
          <p className={styles.list__item__paragraph}>{content.name}</p>
        </li>
      ))}
    </ul>
  );
}

Impacts.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  isFull: PropTypes.bool, 
};