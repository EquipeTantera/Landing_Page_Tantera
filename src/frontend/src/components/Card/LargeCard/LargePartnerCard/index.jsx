import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Buttons/Button';
import Content from '../../../Content';
import HorizontalSubtitle from '../../../HorizontalSubtitle';
import Impacts from '../../Common/Impacts';

export default function LargePartnerCard({ title, description, image, fullImage, events, impacts, textButton, linkButton, name }) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <HorizontalSubtitle 
            title={name}
            colorImage='red'
            titleSize={"3rem"}
          />
        </div>

        <div className={styles.container__infos}>
          <img src={image} alt={name} className={styles.container__infos__image} />

          <div className={styles.container__infos__description}>
            <Content 
              content={description}
            />
          </div>
        </div>

        <div className={styles.container__details}>
          <div className={styles["container__details__div-event"]}>
            <p className={styles["container__details__div-event__title"]}>Eventos</p>
            <ul className={styles["container__details__div-event__list"]}>
              {events.map((event) => (
                <li key={event.title} className={styles["container__details__div-event__list__item"]}>
                  <p className={styles["container__details__div-event__list__item__name"]}>{event.title} - {event.date}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles["container__details__div-impact"]}>	
            <p className={styles["container__details__div-impact__title"]}>Impactos</p>
            <Impacts 
              contents={impacts}
            />
          </div>
        </div>
        
        <div className={styles.container__div}>
          <Button 
            title={textButton}
            path={linkButton}
          />
        </div>
      </div>

      <div className={styles["container-image"]}>
        <img src={fullImage} alt={title} className={styles["container-image__image"]} />
      </div>
    </div>
  );
}

LargePartnerCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
  impacts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
  textButton: PropTypes.string.isRequired,
  linkButton: PropTypes.string.isRequired,
};

