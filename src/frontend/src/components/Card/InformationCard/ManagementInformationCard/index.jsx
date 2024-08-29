import styles from './styles.module.scss';
import Impacts from '../../Common/Impacts';
import PropTypes from 'prop-types';
import Content from '../../../Content';
import { useEffect, useState } from 'react';

export default function ManagementInformationCard({ termOfOffice, results, title }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <div className={styles.container}>
      <div className={styles.container__title}>
        <p className={styles.container__title__paragraph}>
          <span className={styles.container__title__paragraph__span}>Período de Mandato: </span> 
          {termOfOffice}
        </p>
      </div>
      <div className={styles.container__infos}>
        <div className={styles.container__infos__title}>
          <Content 
            title={title}
          />
        </div>

        {isMobile ? (
          (results.map((result) => {
            return (
              <div className={styles.container__infos__results} key={result.name}>
                <p className={styles.container__infos__results__paragraph}>{result.name}</p>
              </div>
            );
          }))
        ) : (
          <div className={styles.container__infos__results}>
            <div className={styles.container__infos__results__tag} />
            <Impacts contents={results} isFull={true} />
          </div>
        )}
      </div>
    </div>
  )
}

ManagementInformationCard.propTypes = {
  termOfOffice: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};