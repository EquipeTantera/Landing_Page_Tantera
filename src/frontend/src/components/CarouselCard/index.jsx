import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function CarouselCard({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__track}>
          {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
            <div key={index} className={styles.carousel__card}>
              <img src={card.image} alt={card.event} className={styles.carousel__image} />
              <div className={styles.carousel__footer}>
                <span className={styles.carousel__event}>{card.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carousel__dots}>
        {cards.map((_, index) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="36"
            viewBox="0 0 31 36"
            fill="none"
            className={styles.carousel__dot}
            key={index}
            onClick={() => handleDotClick(index)}
          >
            <circle
              cx="15.5"
              cy="18"
              r="4"
              className={`${styles.carousel__dotCircle} ${currentIndex === index ? styles.active : ''}`}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
    })
  ).isRequired,
};
