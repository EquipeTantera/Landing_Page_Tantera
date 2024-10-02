import PropTypes from 'prop-types';
import Input from '../../Input';
import styles from './styles.module.scss';
import Button from '../../Buttons/Button';

export default function FormCard({ title, inputs, textButton, onSubmit, isContact }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <form className={styles.container__content} onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        {inputs.map((inputProps, index) => (
          <div key={index} className={styles.container__input}>
            <Input {...inputProps} />
          </div>
        ))}
        {textButton && (
          <div className={styles["container--button"]}>
            {isContact ? (
              <Button 
                title={textButton}
                path={"mailto:atleticainteli@inteli.edu.br"}
              />
            ) : (
              <button type="submit" className={styles["container--button__button"]}>
                {textButton}
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'select', 'textarea', 'number', 'email']).isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      onChange: PropTypes.func, 
      name: PropTypes.string, 
      value: PropTypes.string, 
    })
  ).isRequired,
  textButton: PropTypes.string,
  onSubmit: PropTypes.func, 
  isContact: PropTypes.bool.isRequired,
};
