import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function MainTitle({ shadowText, mainText, bgColor }) {
  return (
    <div className={styles['title-container']} style={{ backgroundColor: bgColor }}>
      <h1 className={styles['title-shadow']}>{shadowText}</h1>
      <h1 className={styles['title']}>{mainText}</h1>
    </div>
  );
}

MainTitle.propTypes = {
  shadowText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default MainTitle;
