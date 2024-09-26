import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LargePartnerCard from '../../Card/LargeCard/LargePartnerCard';
import styles from './styles.module.scss';

export default function CarouselLargePartner({ partners }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex);
  };

  return (
    <div className={styles.carousel}>
      {!isMobile && (
        <button onClick={handlePrev} className={styles.carousel__button}>
          &#8249;
        </button>
      )}

      <div className={styles.carousel__card}>
        <LargePartnerCard key={partners[currentIndex].title} {...partners[currentIndex]} />
      </div>

      {!isMobile && (
        <button onClick={handleNext} className={styles.carousel__button}>
          &#8250;
        </button>
      )}

      {isMobile && (
        <div className={styles.carousel__dots}>
          {partners.map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="36"
              viewBox="0 0 31 36"
              fill="none"
              className={styles.carousel__dot}
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
      )}
    </div>
  );
}

CarouselLargePartner.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      fullImage: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          date: PropTypes.string,
        })
      ).isRequired,
      impacts: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ).isRequired,
      textButton: PropTypes.string.isRequired,
      linkButton: PropTypes.string.isRequired,
    })
  ).isRequired,
};
