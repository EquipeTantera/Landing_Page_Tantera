import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function PaperBackground({ children }) {
  return (
    <div className={styles.paperBackground}>
      {children}
    </div>
  );
}

PaperBackground.propTypes = {
  children: PropTypes.node.isRequired,
};