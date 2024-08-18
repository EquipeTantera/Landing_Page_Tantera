import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function CarouselCard({ image, event }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.container__image} />
      <div className={styles.container__footer}>
        <span className={styles.container__footer__event}>{event}</span>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  image: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};
