import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../../Buttons/Button';
import styles from './styles.module.scss';

export default function FormCard({ title, inputs, textButton, linkButton }) {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formCard__title}>{title}</h2>
      <div className={styles.formCard__content}>
        {inputs.map((inputProps, index) => (
          <Input key={index} {...inputProps} />
        ))}
      </div>
      {textButton && linkButton && (
        <div className={styles.formCard__button}>
          <Button title={textButton} path={linkButton} />
        </div>
      )}
    </div>
  );
}

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'select']).isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  textButton: PropTypes.string,
  linkButton: PropTypes.string, 
};

FormCard.defaultProps = {
  textButton: null,
  linkButton: null,
};
