import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export default function Button({ title, path }) {
  return (
    <Link to={path}>
      <button className={styles.button}>{title}</button>
    </Link>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};