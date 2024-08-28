import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Impacts({ contents }) {
  return (
    <ul className={styles.list}>
      {contents.map((content) => (
        <li key={content.name} className={styles.list__item}>
          <p className={styles.list__item__paragraph}>{content.name}</p>
        </li>
      ))}
    </ul>
  )
}

Impacts.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
}