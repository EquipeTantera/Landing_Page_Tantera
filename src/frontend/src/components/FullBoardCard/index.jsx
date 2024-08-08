import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function FullBoardCard({ nameBoard, description }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>
        {nameBoard}
      </h2>
      <p className={styles.section__description}>{description}</p>
    </section>
  )
}

FullBoardCard.propTypes = {
  nameBoard: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};