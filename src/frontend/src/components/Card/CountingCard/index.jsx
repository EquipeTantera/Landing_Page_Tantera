import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function CountingCard({ text, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        {text}
      </div>
      <div className={styles.container__count}>
        {count}
      </div>
    </div>
  );
}

CountingCard.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
