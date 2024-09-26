import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Buttons/Button';

export default function SmallEventCard({ title, date, ticket, address, image, buttonText, buttonPath }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__infos}>
        <h3 className={styles.container__infos__title}>{title}</h3>
        <div className={styles["container__infos__div-image"]}>
          <img src={image} alt={title} className={styles["container__infos__div-image__image"]} />
        </div>
        <div className={styles.container__infos__div}>
          <p className={styles.container__infos__div__date}>{date}</p>
          {address && 
            <p className={styles.container__infos__div__address}>
              <span className={styles.container__infos__div__address__span}>Endereço: </span>{address}
            </p>
          }
          <p className={styles.container__infos__div__ticket}>
            <span className={styles.container__infos__div__ticket__span}>Ingressos a partir: </span>{ticket}
          </p>
        </div>
        <div className={styles.container__infos__button}>
          <Button 
            title={buttonText}
            path={buttonPath}
          />
        </div>
      </div>
    </div>
  )
}

SmallEventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  ticket: PropTypes.string,
  address: PropTypes.string,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonPath: PropTypes.string,
};