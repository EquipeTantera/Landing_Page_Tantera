import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Button';

export default function SmallProductCard({ title, description, price, image, buttonText, buttonPath }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__infos}>
        <h3 className={styles.container__infos__title}>{title}</h3>
        <div className={styles.container__infos__div}>
          <img src={image} alt={title} className={styles.container__infos__div__image} />
        </div>
        <>
          <div className={styles["container__infos__product-price"]}>
            <p className={styles["container__infos__product-price__price"]}>
              <span className={styles["container__infos__product-price__price__span"]}>R$ </span>{price}
            </p>
          </div>
          <p className={styles.container__infos__description}>{description}</p>
        </>
      </div>
      <div className={styles.container__infos__button}>
        <Button 
          title={buttonText}
          path={buttonPath}
        />
      </div>
    </div>
  );

}

SmallProductCard.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  ticket: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonPath: PropTypes.string,
};