import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function HorizontalSubtitle({ title, colorImage, tag }) {
  return (
    <>
      {tag && <div className={styles.tag}/>}
      <div className={styles.container} style={{ backgroundImage: `url(vertical_subtitle_${colorImage}_desktop.png)` }}>
        <h2 className={styles.container__title}>
          {title}
        </h2>
      </div>
    </>
  );
}

HorizontalSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  colorImage: PropTypes.oneOf(['purple', 'red']).isRequired,
  tag: PropTypes.bool,
};
