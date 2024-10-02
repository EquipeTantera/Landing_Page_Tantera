import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../../Buttons/Button';
import styles from './styles.module.scss';

export default function FormCard({ title, inputs, textButton, linkButton, backgroundType, inputStyle }) {
  const backgroundClass = backgroundType === 'purple' ? styles['formCard--purple'] : styles['formCard--white'];
  const titleClass = inputStyle === 'white' ? styles['formCard__title--white'] : '';

  return (
    <div className={`${styles.formCard} ${backgroundClass}`}>
      <h2 className={`${styles.formCard__title} ${titleClass}`}>{title}</h2>
      <div className={styles.formCard__content}>
        {inputs.map((inputProps, index) => (
          <Input key={index} {...inputProps} backgroundType={backgroundType} inputStyle={inputStyle} />
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
      type: PropTypes.oneOf(['text', 'select', 'textarea']).isRequired, 
      label: PropTypes.string,
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
  backgroundType: PropTypes.oneOf(['white', 'purple']),
  inputStyle: PropTypes.oneOf(['white', 'black']),
};
