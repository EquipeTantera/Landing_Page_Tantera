import { useState } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import Content from '../../Content';

export default function PlanningCard({ activities, boardImage, title }) {
  const [activityList, setActivityList] = useState(activities);

  const handleCheckboxChange = (index) => {
    const updatedActivities = [...activityList];
    updatedActivities[index].completed = !updatedActivities[index].completed;
    setActivityList(updatedActivities);
  };

  return (
    <div className={styles.container}>
      <div className={styles["container__div-image"]}>
        <img src={boardImage} alt="Imagem da Diretoria" className={styles["container__div-image__img"]} />
      </div>
      <div className={styles["container__div-activities"]}>
        <Content 
          title={title}
          titleColor={"white"}
        />

        <div className={styles["container__div-activities__activities"]}>
          <ul className={styles["container__div-activities__activities__list"]}>
            {activityList.map((activity, index) => (
              <li key={index} className={styles["container__div-activities__activities__list__item"]}>
                <input 
                  type="checkbox" 
                  className={styles["container__div-activities__activities__list__item__checkbox"]}
                  checked={activity.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
                <p className={styles["container__div-activities__activities__list__item__paragraph"]}>{activity.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

PlanningCard.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  boardImage: PropTypes.string,
  title: PropTypes.string.isRequired,
};
