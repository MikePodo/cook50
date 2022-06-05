import React from "react";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "~styles/components/recipemodal.module.scss";

const RecipeModal = ({ open, setOpen, food, saved, handleSave }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className={styles.screen}>
        <div className={styles.container}>
          <div className={styles.summaryContainer}>
            <img
              className={styles.image}
              src={food.recipe.image}
              alt={food.recipe.label}
            />
            <div className={styles.summaryInfo}>
              <h2 className={styles.title}>{food.recipe.label}</h2>
              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="utensils" className={styles.icon} />
                <p className={styles.infoText}>
                  {food.recipe.mealType[0].replace(/\b(\w)/g, (s) =>
                    s.toUpperCase()
                  )}
                </p>
              </div>
              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="plate-wheat" className={styles.icon} />
                <p className={styles.infoText}>
                  {food.recipe.dishType[0].replace(/\b(\w)/g, (s) =>
                    s.toUpperCase()
                  )}
                </p>
              </div>
              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="earth" className={styles.icon} />
                <p className={styles.infoText}>
                  {food.recipe.cuisineType[0].replace(/\b(\w)/g, (s) =>
                    s.toUpperCase()
                  )}
                </p>
              </div>
              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="stopwatch" className={styles.icon} />
                <p className={styles.infoText}>
                  <span>{food.recipe.totalTime}</span> minute
                  {food.recipe.totalTime === 1 ? "" : "s"}
                </p>
              </div>

              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="fire" className={styles.icon} />
                <p className={styles.infoText}>
                  <span>{parseInt(food.recipe.calories).toLocaleString()}</span>{" "}
                  calorie
                  {food.recipe.calories === 1 ? "" : "s"}
                </p>
              </div>
              <div className={styles.infoRow}>
                <FontAwesomeIcon icon="pepper-hot" className={styles.icon} />
                <p className={styles.infoText}>
                  <span>{food.recipe.ingredients?.length || 0}</span> ingredient
                  {food.recipe.ingredients?.length === 1 ? "" : "s"}
                </p>
              </div>

              <div className={styles.buttonsContainer}>
                <Tooltip title="View Recipe" placement="top" arrow>
                  <div
                    className={`${styles.button} ${styles.recipe}`}
                    onClick={() => {
                      window.open(food.recipe.url, "_blank");
                    }}
                  >
                    <FontAwesomeIcon icon="book-open" className={styles.icon} />
                  </div>
                </Tooltip>
                <Tooltip title="Save Recipe" placement="top" arrow>
                  <div
                    className={`${styles.button} ${styles.save}`}
                    onClick={handleSave}
                  >
                    <FontAwesomeIcon
                      icon={[saved ? "fas " : "far", "bookmark"]}
                      className={styles.icon}
                    />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.labelsContainer}>
              <div className={styles.labelsFlexContainer}>
                {[
                  ...food.recipe.healthLabels.slice(0, 5).map((title) => ({
                    title,
                    type: "health",
                  })),
                  ...food.recipe.dietLabels.map((title) => ({
                    title,
                    type: "diet",
                  })),
                  ...food.recipe.cautions.map((title) => ({
                    title,
                    type: "caution",
                  })),
                ].map((label) => (
                  <div className={`${styles.label} ${styles[label.type]}`}>
                    <p>{label.title}</p>
                  </div>
                ))}
              </div>
              <h3>Source: {food.recipe.source}</h3>
            </div>

            <div className={styles.ingredientsContainer}>
              <ul>
                {food.recipe.ingredientLines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RecipeModal;
