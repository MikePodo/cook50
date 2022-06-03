import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip";

import styles from "~styles/components/foodcard.module.scss";

const FoodCard = ({ food }) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved((prev) => !prev);
  };

  const handleOpenRecipe = () => {
    window.open(food.url, "_blank");
  };

  return (
    <div className={styles.container}>
      <img src={food.image} alt={food.label} className={styles.image} />
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{food.label}</h1>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="stopwatch" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{food.totalTime}</span> minute
            {food.totalTime === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="fire" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{parseInt(food.calories).toLocaleString()}</span> calorie
            {food.calories === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="pepper-hot" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{food.ingredients?.length || 0}</span> ingredient
            {food.ingredients?.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.healthLabelsContainer}>
          {food.healthLabels.map((label, i) => (
            <>
              {i < 4 && (
                <div className={styles.healthLabel} key={i}>
                  <p>{label}</p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <Tooltip title="Save Recipe" placement="bottom" arrow>
          <div
            className={`${styles.button} ${styles.save}`}
            onClick={handleSave}
          >
            <FontAwesomeIcon
              icon={[saved ? "fas " : "far", "bookmark"]}
              className={`${styles.buttonIcon} ${styles.save}`}
            />
          </div>
        </Tooltip>
        <Tooltip title="Open Recipe" placement="bottom" arrow>
          <div
            className={`${styles.button} ${styles.recipe}`}
            onClick={handleOpenRecipe}
          >
            <FontAwesomeIcon
              icon="book-open"
              className={`${styles.buttonIcon} ${styles.recipe}`}
            />
          </div>
        </Tooltip>
        <Tooltip title="View Recipe" placement="bottom" arrow>
          <div className={`${styles.button} ${styles.view}`}>
            <FontAwesomeIcon
              icon="eye"
              className={`${styles.buttonIcon} ${styles.view}`}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default FoodCard;
