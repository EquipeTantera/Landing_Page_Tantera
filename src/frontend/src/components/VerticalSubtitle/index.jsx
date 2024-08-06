import PropType from 'prop-types';
import styles from './styles.module.scss'

export default function VerticalSubtitle({ title, subtitle, imageBackground }) {
  let sectionStyle = {
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto'
  };

  let subtitleStyle = {
    backgroundImage: `url(${imageBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto'
  };

  if (imageBackground === 'red') {
    sectionStyle = {
      backgroundImage: 'url(public/red-papper-background.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      // minHeight: '40rem'
    };
  }

  if (subtitle === 'presidência') {
    subtitleStyle = {
      backgroundImage: 'url(public/subtitle-presidency.svg)',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'left bottom',
      minHeight: '56rem'
    };
  }

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
  title: PropType.string.isRequired,
  subtitle: PropType.string,
  imageBackground: PropType.string,
}