import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";

import { grey } from "~styles/variables.module.scss";
import styles from "~styles/components/foodcard.module.scss";

import RecipeModal from "~components/RecipeModal";

const FoodCard = ({ recipe, food }) => {
  const [recipeOpen, setRecipeOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const currentRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    currentRecipes?.some((food) => food.recipe.url === recipe.url) &&
      setSaved(true);
  }, []);

  const handleSave = (e) => {
    e.stopPropagation();
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
      toast("Unsaved Recipe");
    } else {
      newSavedRecipes = [...newSavedRecipes, { ...food }];
      toast("Saved Recipe");
    }

    localStorage.setItem("savedRecipes", JSON.stringify(newSavedRecipes));
    setSaved((prev) => !prev);
  };

  const handleOpenRecipe = () => {
    window.open(recipe.url, "_blank");
  };

  return (
    <>
      <RecipeModal
        open={recipeOpen}
        setOpen={setRecipeOpen}
        food={food}
        saved={saved}
        handleSave={handleSave}
      />
      <div className={styles.container} onClick={() => setRecipeOpen(true)}>
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
        </div>
        <div className={styles.saveButtonContainer}>
          <Tooltip title="Save Recipe" placement="bottom" arrow>
            <div
              className={`${styles.button} ${styles.save}`}
              onClick={handleSave}
            >
              <FontAwesomeIcon
                icon={[saved ? "fas " : "far", "bookmark"]}
                className={styles.buttonIcon}
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
