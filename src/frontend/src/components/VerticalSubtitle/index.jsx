import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function VerticalSubtitle({ title, subtitle, imageBackground, verticalText }) {
  let sectionStyle;

  const baseStyle = {
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto',
  };

  if (imageBackground === 'red') {
    sectionStyle = {
      ...baseStyle,
      backgroundImage: 'url("/red-papper-background.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'initial',
    };
  } else if (imageBackground === 'purple') {
    sectionStyle = {
      ...baseStyle,
      backgroundImage: 'url("/purple-papper-background.png")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      height: '25rem',
      display: 'flex',
      alignItems: 'center',
    };
  } else {
    sectionStyle = baseStyle;
  }

  const subtitleStyle = subtitle === 'presidência' ? {
    minHeight: '56rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'v.$white-1',
  } : baseStyle;

  return (
    <section className={styles.section} style={sectionStyle}>
      <h3 className={styles.section__title}>{title}</h3>
      {subtitle && (
        <div className={styles.section__container}>
          {imageBackground === 'red' && verticalText ? (
            <div className={styles.section__container__verticalText}>
              <span>{verticalText}</span>
              <span>{verticalText}</span>
            </div>
          ) : (
            <div className={styles.section__container__subtitle} style={subtitleStyle} />
          )}
        </div>
      )}
    </section>
  );
}

VerticalSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageBackground: PropTypes.string,
  verticalText: PropTypes.string, 
};
