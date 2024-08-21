import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Dates from '../../Common/Date';
import Content from '../../../Content';
import TitleCard from '../../Common/TitleCard';

export default function EventInformationCard({ address, dates, observation, image }) {
  return(
    <section className={styles.section}>
      <div className={styles.section__title}>
        <TitleCard 
          content="Informações do evento"
          isManagement={false}
        />
      </div>
      <div className={styles.section__container}>
        <div className={styles["section__container-infos"]}>
          <div className={styles["section__container-infos__div"]}>
            <div className={styles["section__container-infos__div__address"]}>
              <Content 
                title="Endereço"
                content={address}
                titleSize="2rem"
              />
            </div>
            <div className={styles["section__container-infos__dic__div-dates"]}>
              <Dates 
                dates={dates}
              />
            </div>
          </div>
          {observation && (
            <div className={styles["section__container-infos__div-observation"]}>
              <Content 
                title={"Observações"}
                content={observation}
                titleSize="2rem"
              />
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