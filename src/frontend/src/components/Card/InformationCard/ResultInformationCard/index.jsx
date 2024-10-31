import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Content from '../../../Content';
import Impacts from '../../Common/Impacts';
import { useEffect, useState } from 'react';

export default function ResultInformationCard({ results, title }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Content
        title={title}
      />
      <div className={styles['container__div']}>
        {isMobile ? (
          (results.map((result) => {
            return (
              <div className={styles['container__div-results']} key={result.name}>
                <p className={styles['container__div-results__paragraph']}>{result.name}</p>
              </div>
            );
          }))
        ) : (
          <div className={styles['container__div-results']}>
            <div className={styles['container__div-results__tag']} />
            <Impacts contents={results} isFull={true} />
          </div>
        )}
      </div>
    </div>
  );
}

ResultInformationCard.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
