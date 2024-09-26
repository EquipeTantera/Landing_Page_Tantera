import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Buttons/Button';

export default function SmallProductCard({ title, description, price, image, buttonText, buttonPath, isAvailable }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__infos}>
        <h3 className={styles.container__infos__title}>{title}</h3>
        <div className={styles.container__infos__div}>
          <img src={image} alt={title} className={styles.container__infos__div__image} />
        </div>
        <>
          <div className={`${styles["container__infos__product-price"]}  ${!isAvailable ? styles["container__infos__product-price--unavailable"] : '' }`}>
            <p className={styles["container__infos__product-price__price"]}>
              <span className={styles["container__infos__product-price__price__span"]}>
                {isAvailable ? 'R$ ' : ''}
              </span> 
              {isAvailable ? price : 'Esgotado'}
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonPath: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired
};