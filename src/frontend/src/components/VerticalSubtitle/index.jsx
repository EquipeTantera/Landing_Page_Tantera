import PropType from 'prop-types';
import styles from './styles.module.scss';

export default function VerticalSubtitle({ title }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>
        {title}
      </h2>
    </div>
  );
}

VerticalSubtitle.propTypes = {
  title: PropType.string.isRequired,
};