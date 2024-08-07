import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function SmallCard({ type, title, date, ticket, description, price, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__infos}>
        <h3 className={styles.container__infos__title}>{title}</h3>
        <img src={image} alt={title} className={styles.container__infos__image} />
        {type === 'event' && ( 
          <div className={styles.container__infos__event}>
            <p className={styles.container__infos__event__date}>{date}</p>
            <p className={styles.container__infos__event__ticket}>{ticket}</p>
          </div>
        )}
        {type === 'product' && (
          <>
            <div className={styles["container__infos__product-price"]}>
              <p className={styles["container__infos__product-price__price"]}>
                <span className={styles["container__infos__product-price__price__span"]}>R$ </span>{price}
              </p>
            </div>
            <p className={styles.container__infos__description}>{description}</p>
          </>
        )}
      </div>
    </div>
  );

}

SmallCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  ticket: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string.isRequired,
};