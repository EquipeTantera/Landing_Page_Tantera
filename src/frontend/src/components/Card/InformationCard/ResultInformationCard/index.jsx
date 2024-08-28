import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Content from '../../../Content'
import Impacts from '../../Common/Impacts'


export default function ResultInformationCard({ results, title }) {
  return (
    <div className={styles.container}>
      <Content 
        title={title}
      />

      <div className={styles["container__div-results"]}>
        <div className={styles["container__div-results__tag"]} />
        <Impacts 
          contents={results}
          isFull={true}
        />
      </div>
    </div>
  )
}

ResultInformationCard.propTypes = {    
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
}