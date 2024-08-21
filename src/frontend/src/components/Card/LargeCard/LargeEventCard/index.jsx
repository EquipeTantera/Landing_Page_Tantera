import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Button';

export default function LargeEventCard({ name, description, fullImage, address, dates, textButton, linkButton }) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h3 className={styles.container__header__title}>{name}</h3>
        </div>

        <div className={styles.container__infos}>
          <p className={styles.container__infos__title}>Descrição</p>
          <p className={styles.container__infos__description}>{description}</p>
        </div>

        <div className={styles.container__details}>
          <div className={styles["container__details__div-local"]}>
            <p className={styles["container__details__div-local__title"]}>Local</p>
            <p className={styles["container__details__div-local__list__item__name"]}>{address}</p>
          </div>

          <div className={styles["container__details__div-date"]}>	
            <p className={styles["container__details__div-date__title"]}>Datas</p>
            <ul className={styles["container__details__div-date__list"]}>
              {dates.map((date, index) => (
                <li key={index} className={styles["container__details__div-date__list__item"]}> 
                  <div className={styles["container__details__div-date__list__item__container"]}>
                    <p className={styles["container__details__div-date__list__item__name"]}>{date.date}</p>
                    <p className={styles["container__details__div-date__list__item__hour"]}>{date.startHour} às {date.endHour}</p>
                  </div>
                </li>
              ))}
            </ul>
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
        <img src={fullImage} alt={name} className={styles["container-image__image"]} />
      </div>
    </div>
  );
}

LargeEventCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    startHour: PropTypes.string,
    endHour: PropTypes.string,
  })).isRequired,
  textButton: PropTypes.string.isRequired,
  linkButton: PropTypes.string.isRequired,
};