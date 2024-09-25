import { useState } from 'react';
import PropTypes from 'prop-types';
import LargePartnerCard from '../../Card/LargeCard/LargePartnerCard';
import styles from './styles.module.scss'; 

export default function CarouselLargePartner({ partners }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handlePrev} className={styles.carousel__button}>
        &#8249; 
      </button>

      <div className={styles.carousel__card}>
        <LargePartnerCard key={partners[currentIndex].title} {...partners[currentIndex]} />
      </div>

      <button onClick={handleNext} className={styles.carousel__button}>
        &#8250; 
      </button>
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
