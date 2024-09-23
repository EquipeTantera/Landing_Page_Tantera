import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function HorizontalSubtitle({ title, colorImage, tag, titleSize, className }) {
  return (
    <>
      {tag === true ? <div className={styles.tag} /> : null}
      <div className={`${colorImage === "transparent" ? styles["container-transparent"] : styles.container} ${className || ''}`}
        style={{ backgroundImage: `url(vertical_subtitle_${colorImage}_desktop.png)` }} >
        <h2 style={colorImage === "transparent" ? { color: "#180733", fontSize: titleSize } : { fontSize: titleSize }} className={styles.container__title}>
          {title}
        </h2>
      </div>
    </>
  );
}

HorizontalSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  colorImage: PropTypes.oneOf(['purple', 'red', 'transparent']).isRequired,
  tag: PropTypes.bool,
  titleSize: PropTypes.string,
  className: PropTypes.string
};
