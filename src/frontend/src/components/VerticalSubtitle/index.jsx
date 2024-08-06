import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function VerticalSubtitle({ title, subtitle, imageBackground }) {
  const baseStyle = {
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto'
  };

  const sectionStyle = imageBackground === 'red' ? {
    ...baseStyle,
    backgroundImage: 'url(public/red-papper-background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center'
  } : baseStyle;

  const subtitleStyle = subtitle === 'presidência' ? {
    backgroundImage: 'url(public/subtitle-presidency.svg)',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'left bottom',
    minHeight: '56rem'
  } : baseStyle;

  return (
    <section className={styles.section} style={sectionStyle}>
      <h3 className={styles.section__title}>{title}</h3>
      {subtitle && 
        <div className={styles.section__container}>
          <div className={styles.section__container__subtitle} style={subtitleStyle} />
        </div>
      }
    </section>
  );
}

VerticalSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageBackground: PropTypes.string,
};
