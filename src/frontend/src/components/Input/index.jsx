import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Input({ type, placeholder, options }) {
  if (type === 'select') {
    return (
      <div className={styles.inputContainer}>
        <select className={styles.input} defaultValue="">
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="16"
            viewBox="0 0 34 16"
            fill="none"
          >
            <path d="M1 1L17 14.5L33 1" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select']).isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

Input.defaultProps = {
  placeholder: '',
  options: []
};
