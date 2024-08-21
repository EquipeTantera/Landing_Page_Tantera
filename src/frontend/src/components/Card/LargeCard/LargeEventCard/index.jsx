import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Button';
import Dates from '../../Common/Date';
import Content from '../../../Content';
import HorizontalSubtitle from '../../../HorizontalSubtitle';

export default function LargeEventCard({ name, description, fullImage, address, dates, textButton, linkButton }) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <HorizontalSubtitle 
            title={name}
            colorImage='purple'
            titleSize={"3rem"}
          />
        </div>

        <div className={styles.container__infos}>
          <Content 
            title="Descrição"
            content={description}
          />
        </div>

        <div className={styles.container__details}>
          <div className={styles["container__details__div-local"]}>
            <Content 
              title="Local"
              content={address}
            />
          </div>

          <div className={styles["container__details__div-date"]}>	
            <Dates 
              dates={dates}
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