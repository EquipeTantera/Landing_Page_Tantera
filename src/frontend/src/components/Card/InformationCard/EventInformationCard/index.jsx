import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Dates from '../../Common/Date';
import Content from '../../../Content';

export default function EventInformationCard({ address, dates, observation, image }) {
  return(
    <section className={styles.section}>
      <div className={styles.section__title}>
        <h2 className={styles.section__title__text}>Informações do evento</h2>
      </div>
      <div className={styles.section__container}>
        <div className={styles["section__container-infos"]}>
          <div className={styles["section__container-infos__address"]}>
            <Content 
              title="Endereço"
              content={address}
              titleSize="2rem"
            />
          </div>
          <div className={styles["section__container-infos__div-dates"]}>
            <Dates 
              dates={dates}
            />
          </div>
          {observation && (
            <div className={styles["section__container-infos__div-observation"]}>
              <p className={styles["section__container-infos__div-observation__text"]}>{observation}</p>
            </div>
          )}
        </div>
        <div className={styles["section__container-image"]}>
          <img src={image} alt="Imagem do evento" className={styles["section__container-image__image"]} />
        </div>
      </div>
    </section>
  )
}

EventInformationCard.propTypes = {
  address: PropTypes.string.isRequired,
  dates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    startHour: PropTypes.string,
    endHour: PropTypes.string,
  })).isRequired,
  observation: PropTypes.string,
  image: PropTypes.string.isRequired
};