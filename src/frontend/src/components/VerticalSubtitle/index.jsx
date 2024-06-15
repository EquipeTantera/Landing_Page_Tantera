import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function VerticalSubtitle({ title, colorImage }) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(../../../public/vertical_subtitle_${colorImage}_desktop.png)` }}>
      <h2 className={styles.container__title}>
        {title}
      </h2>
    </div>
  );
}

VerticalSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  colorImage: PropTypes.oneOf(['purple', 'red']).isRequired,
};
