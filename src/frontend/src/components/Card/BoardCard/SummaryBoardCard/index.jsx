import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../Buttons/Button';

export default function SummaryBoardCard({ name, image, buttonPath }) {
  return (
    <section className={styles.section}>
      <img className={styles.section__image} src={`${image}`} alt={name} />
      <h2 className={styles.section__title}>
        <span className={styles.section__title__span}>Diretor(a): </span>{name}
      </h2>
      <Button 
        title='Conhecer a diretoria'
        path={buttonPath}
      />
    </section>
  )
}

SummaryBoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonPath: PropTypes.string.isRequired,
};