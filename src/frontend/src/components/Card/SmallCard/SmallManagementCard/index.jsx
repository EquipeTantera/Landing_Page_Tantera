import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../../../Buttons/Button';
import Content from '../../../Content';


export default function SmallManagementCard({ nameManagement, buttonPath }) {
  return (
    <div className={styles.container}>
      <p className={styles.container__name}>
        <Content 
          title={nameManagement}
          titleColor="white"
        />
      </p>
      <div className={styles["container--button"]}>
        <Button 
          title="Saiba mais"
          path={buttonPath}
        />
      </div>      
    </div>
  )
}

SmallManagementCard.propTypes = {
  nameManagement: PropTypes.string.isRequired,
  buttonPath: PropTypes.string.isRequired
};