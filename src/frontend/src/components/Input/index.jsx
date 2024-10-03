import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type, placeholder = '', options = [], label = '', name = '', value = '', onChange}) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      {type === 'select' ? (
        <div className={styles.container__div}>
          <select
            className={styles.container__div__input}
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
              <path d='M1 1L17 14.5L33 1' stroke='black' strokeWidth='2' />
            </svg>
          </div>
        </div>
      ) : type === 'textarea' ? (
        <textarea
          className={styles.container__div__textarea}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          className={styles.container__div__input}
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
  name: PropTypes.string, 
  value: PropTypes.string, 
  onChange: PropTypes.func,
};
