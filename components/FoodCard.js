import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";

import { grey } from "~styles/variables.module.scss";
import styles from "~styles/components/foodcard.module.scss";

const FoodCard = ({ recipe, food }) => {
  const [saved, setSaved] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const currentRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    currentRecipes.some((food) => food.recipe.url === recipe.url) &&
      setSaved(true);
  }, []);

  const handleSave = () => {
    let newSavedRecipes = [];
    const currentRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    if (currentRecipes) {
      newSavedRecipes = currentRecipes;
    }
    if (saved) {
      const index = newSavedRecipes.findIndex(
        (food) => food.recipe.url === recipe.url
      );
      newSavedRecipes.splice(index, 1);
      toast("Removed Recipe From Saved");
    } else {
      newSavedRecipes = [...newSavedRecipes, { ...food }];
      toast("Added Recipe To Saved");
    }

    localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
    setSaved((prev) => !prev);
  };

  const handleOpenRecipe = () => {
    window.open(recipe.url, "_blank");
  };

  return (
    <div className={styles.container}>
      {!imgLoaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          className={styles.image}
          sx={{ bgcolor: grey }}
        />
      )}
      <img
        src={recipe.image}
        alt={recipe.label}
        className={styles.image}
        onLoad={() => setImgLoaded(true)}
        style={{ display: imgLoaded ? "flex" : "none" }}
      />
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{recipe.label}</h1>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="stopwatch" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{recipe.totalTime}</span> minute
            {recipe.totalTime === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="fire" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{parseInt(recipe.calories).toLocaleString()}</span> calorie
            {recipe.calories === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.infoRow}>
          <FontAwesomeIcon icon="pepper-hot" className={styles.icon} />
          <p className={styles.infoText}>
            <span>{recipe.ingredients?.length || 0}</span> ingredient
            {recipe.ingredients?.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className={styles.healthLabelsContainer}>
          {recipe.healthLabels.map((label, i) => (
            <React.Fragment key={i}>
              {i < 4 && (
                <div className={styles.healthLabel}>
                  <p>{label}</p>
                </div>
              )}
            </React.Fragment>
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
