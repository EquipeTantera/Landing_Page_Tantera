import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function ProfileCard({ image, role, name }) {
  const truncateName = (name, limit) => {
    if (name.length > limit) {
      return name.substring(0, limit) + '...';
    }
    return name;
  };

  const characterLimit = 6; 

  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.container__image} />
      <div className={styles.container__footer}>
        <span className={styles.container__footer__role}>{role}:</span>
        <span className={styles.container__footer__name}>
          {truncateName(name, characterLimit)}
        </span>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
