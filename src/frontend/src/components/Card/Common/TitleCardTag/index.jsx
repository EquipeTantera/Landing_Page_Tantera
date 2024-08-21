import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function TitleCardTag({ isManagement, content }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        {isManagement ? <span className={styles.container__title__span}>Período de Mandato: </span> : ''}
        {content}
      </h2>
    </div>
  )
}

TitleCardTag.propTypes = {
  isManagement: PropTypes.bool,
  content: PropTypes.string.isRequired,
};