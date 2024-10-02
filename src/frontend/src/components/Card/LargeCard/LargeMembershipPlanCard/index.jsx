import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import HorizontalSubtitle from '../../../HorizontalSubtitle';
import Content from '../../../Content';

export default function LargeMembershipPlanCard({ name, description, fullImage, advantages, paymentTypes, price }) {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <HorizontalSubtitle 
          title={name}
          colorImage='purple'
          titleSize={"3rem"}
        />
      

        <div className={styles.container__infos}>
          <Content 
            title="Descrição"
            content={description}
          />
        </div>

        <div className={styles.container__advantages}>
          <Content
            title="Vantagens"
          />

          <ul className={styles["container__advantages__list"]}>
            {advantages.map((advantage, index) => {
              return <li key={index} className={styles["container__advantages__list__item"]}>{advantage}</li>
            })}
          </ul>
        </div>

        <div className={styles.container__paymentTypes}>
          <div className={styles.container__paymentTypes__div}>
            <Content 
              title={"Formas de pagamento"}
            />

            <ul className={styles["container__paymentTypes__div__list"]}>
              {paymentTypes.map((paymentType, index) => {
                return <li key={index} className={styles["container__paymentTypes__div__list__item"]}>{paymentType}</li>
              })}
            </ul>
          </div>

          <div className={styles["container__paymentTypes__div-price"]}>
            <Content 
              title={"Preço"}
            />
            <p className={styles["container__paymentTypes__div-price__paragraph"]}>
            <span className={styles["container__paymentTypes__div-price__paragraph__span"]}>R$ </span> {price}
            </p>
          </div>
        </div>
      </div>

      <div className={styles["container-image"]}>
        <img src={fullImage} alt={name} className={styles["container-image__image"]} />
      </div>
    </div>
  )
}

LargeMembershipPlanCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fullImage: PropTypes.string.isRequired,
  advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
  paymentTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};