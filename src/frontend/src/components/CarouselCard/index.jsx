import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function CarouselCard({ cards, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cards.length;
  const numCards = window.innerWidth < 768 ? 1 : 3;
  const totalDots = Math.ceil((totalCards - numCards + 1) / numCards);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (window.innerWidth >= 768) {
          if (prevIndex >= totalCards - numCards) {
            return 0;
          } else {
            return Math.min(prevIndex + numCards, totalCards - numCards);
          }
        } else {
          if (prevIndex >= totalCards - numCards) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [totalCards, interval, numCards]);

  const getVisibleCards = () => {
    if (totalCards <= numCards) return cards;

    const visibleCards = [];

    for (let i = 0; i < numCards; i++) {
      const cardIndex = currentIndex + i;
      if (cardIndex < totalCards) {
        visibleCards.push(cards[cardIndex]);
      }
    }

    return visibleCards;
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex * numCards);
  };

  const handleCardClick = () => {
    navigate('/Parceiros');
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__track}>
          {getVisibleCards().map((card, index) => (
            <div
              key={index}
              className={styles.carousel__card}
              onClick={handleCardClick}
              role="button"
              tabIndex="0"
            >
              <img src={card.image} alt={card.event} className={styles.carousel__image} />
              <div className={styles.carousel__footer}>
                <span className={styles.carousel__event}>{card.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.carousel__dots}>
        {Array.from({ length: totalDots }).map((_, index) => (
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
              className={`${styles.carousel__dotCircle} ${
                currentIndex / numCards === index ? styles.active : ''
              }`}
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
  interval: PropTypes.number,
};
