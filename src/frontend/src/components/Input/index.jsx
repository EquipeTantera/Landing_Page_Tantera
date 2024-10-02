import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type, placeholder = "", options = [], label = "", inputStyle }) {
  const inputClass = inputStyle === 'white' ? styles['input--white'] : styles['input--black'];
  const labelClass = inputStyle === 'white' ? styles['label--white'] : styles['label--black'];
  const svgColor = inputStyle === 'white' ? '#D9D9D9' : '#000000';

  return (
    <div className={styles.container}>
      {label && <label className={`${styles.label} ${labelClass}`}>{label}</label>}
      {type === 'select' ? (
        <div className={styles.container__div}>
          <select className={`${styles.container__div__input} ${inputClass}`} defaultValue="">
            <option value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className={styles.container__div__icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="16"
              viewBox="0 0 34 16"
              fill="none"
            >
              <path d="M1 1L17 14.5L33 1" stroke={svgColor} strokeWidth="2" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          className={`${styles.container__div__input} ${inputClass}`}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select']).isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.string,
  inputStyle: PropTypes.oneOf(['white', 'black']),
};
