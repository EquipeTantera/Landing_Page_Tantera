import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function ProfileCard({ image, role, name }) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.container__image} />
      <div className={styles.container__footer}>
        <span className={styles.container__footer__role}>{role}:</span>
        <span className={styles.container__footer__name}>{name}</span>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
