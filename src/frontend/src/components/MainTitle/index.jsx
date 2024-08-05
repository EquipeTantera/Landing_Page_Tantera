import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function MainTitle({ shadowText, mainText }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__secundary}>{shadowText}</h2>
      <h1 className={styles.container__primary}>{mainText}</h1>
    </div>
  );
}

MainTitle.propTypes = {
  shadowText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired
};