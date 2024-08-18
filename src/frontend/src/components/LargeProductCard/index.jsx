import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../Button';

export default function LargeProductCard({ name, description, fullImage, textButton, linkButton, price, sizes, colors }) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h3 className={styles.container__header__title}>{name}</h3>
        </div>

        <div className={styles.container__infos}>
          <p className={styles.container__infos__description}>{description}</p>
        </div>

        <div className={styles.container__details}>
          <div className={styles["container__details__div-container"]}>
            <div className={styles["container__details__div-sizes"]}>
              <p className={styles["container__details__div-sizes__title"]}>Tamanhos:</p>
              <ul className={styles["container__details__div-sizes__list"]}>
                {sizes.map((size, index) => (
                  <li key={index} className={styles["container__details__div-sizes__list__item"]}>
                    <p className={styles["container__details__div-sizes__list__item__name"]}>{size}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles["container__details__div-color"]}>	
              <p className={styles["container__details__div-color__title"]}>Cores:</p>
              <ul className={styles["container__details__div-color__list"]}>
                {colors.map((color, index) => (
                  <li key={index} className={styles["container__details__div-color__list__item"]}> 
                    <p className={styles["container__details__div-color__list__item__name"]}>{color}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles["container__details__div-price"]}>
            <p className={styles["container__details__div-price__paragraph"]}>R$ <span className={styles["container__details__div-price__paragraph__span"]}>{price}</span>
            </p>
          </div>
        </div>
        
        <div className={styles.container__gallery}>
          <div className={styles["container__gallery__div"]}>
            <img src={fullImage} alt={name} className={styles["container__gallery__div__image"]} />
          </div>
          <div className={styles["container__gallery__div"]}>
            <img src={fullImage} alt={name} className={styles["container__gallery__div__image"]} />
          </div>
          <div className={styles["container__gallery__div"]}>
            <img src={fullImage} alt={name} className={styles["container__gallery__div__image"]} />
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

LargeProductCard.propTypes = {
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
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};