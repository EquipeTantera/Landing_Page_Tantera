import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import SmallEventCard from '../../Card/SmallCard/SmallEventCard';

export default function CarouselSmallEventCard({ events, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalEvents = events.length;
  const numEvents = window.innerWidth < 768 ? 1 : 3;
  const totalDots = Math.ceil((totalEvents - numEvents + 1) / numEvents);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (window.innerWidth >= 768) {
          if (prevIndex >= totalEvents - numEvents) {
            return 0;
          } else {
            return Math.min(prevIndex + numEvents, totalEvents - numEvents);
          }
        } else {
          if (prevIndex >= totalEvents - numEvents) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, [totalEvents, interval, numEvents]);

  const getVisibleEvents = () => {
    if (totalEvents <= numEvents) return events;

    const visibleEvents = [];

    for (let i = 0; i < numEvents; i++) {
      const eventIndex = currentIndex + i;
      if (eventIndex < totalEvents) {
        visibleEvents.push(events[eventIndex]);
      }
    }

    return visibleEvents;
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIndex(dotIndex * numEvents);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div className={styles.carousel__track}>
          {getVisibleEvents().map((event, index) => (
            <SmallEventCard
              key={index}
              title={event.title}
              date={event.date}
              ticket={event.ticket}
              address={event.address}
              image={event.image}
              buttonText={event.buttonText}
              buttonPath={event.buttonPath}
            />
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
                currentIndex / numEvents === index ? styles.active : ''
              }`}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

CarouselSmallEventCard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      ticket: PropTypes.string,
      address: PropTypes.string,
      image: PropTypes.string.isRequired,
      buttonText: PropTypes.string,
      buttonPath: PropTypes.string,
    })
  ).isRequired,
  interval: PropTypes.number,
};
