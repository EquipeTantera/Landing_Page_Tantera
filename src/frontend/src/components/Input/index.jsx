import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type, placeholder = '', value = '', options = [], label = '', name = '', inputStyle, onChange }) {
  const inputClass = inputStyle === 'white' ? styles['container__div__input--white'] : styles['container__div__input--black'];
  const labelClass = inputStyle === 'white' ? styles['label--white'] : styles['label--black'];
  const svgColor = inputStyle === 'white' ? '#D9D9D9' : '#000000';

  return (
    <div className={styles.container}>
      {label && <label className={`${styles.label} ${labelClass}`}>{label}</label>}
      {type === 'select' ? (
        <div className={styles.container__div}>
          <select
            className={`${styles.container__div__input} ${inputClass}`}
            defaultValue={value || ''}
            name={name}
            onChange={onChange}
        >
          <option value='' disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
          <div className={styles.container__div__icon}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='34'
              height='16'
              viewBox='0 0 34 16'
              fill='none'
            >
              <path d="M1 1L17 14.5L33 1" stroke={svgColor} strokeWidth="2" />
            </svg>
          </div>
        </div>
      ) : type === 'textarea' ? (
        <textarea
          className={` ${styles.container__div__textarea}  ${inputClass}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          className={`${styles.container__div__input} ${inputClass}`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select', 'textarea', 'number', 'email']).isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.string,
  inputStyle: PropTypes.oneOf(['white', 'black']),
  onChange: PropTypes.func,
  name: PropTypes.string,
};

