import styles from './styles.module.scss';
import Impacts from '../../Common/Impacts';
import PropTypes from 'prop-types';
import Content from '../../../Content';

export default function ManagementInformationCard({ termOfOffice, results, title }) {
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
        <Impacts contents={results} isFull={true} />
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