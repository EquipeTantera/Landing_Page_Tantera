import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function Dates({ dates }) {
  return(
    <div className={styles.container}>
      <p className={styles.container__title}>Datas</p>
      <ul className={styles.container__list}>
        {dates.map((date, index) => (
          <li key={index} className={styles.container__list__item}>
            <div className={styles.container__list__item__container}>
              <p className={styles.container__list__item__name}>{date.date}</p>
              <p className={styles.container__list__item__hour}>{date.startHour} às {date.endHour}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

Dates.propTypes = {
  dates: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    startHour: PropTypes.string,
    endHour: PropTypes.string,
  })).isRequired,
};