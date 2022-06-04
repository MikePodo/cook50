import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "~styles/pages/saved.module.scss";

import Navbar from "~components/Navbar";
import FoodCard from "~components/FoodCard";

const Home = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchSaved = async () => {
      const saved = JSON.parse(localStorage.getItem("savedRecipes"));
      saved && setSavedRecipes(saved);
    };
    fetchSaved();
  }, []);

  return (
    <div className={styles.screen}>
      <Navbar />
      {savedRecipes?.length > 0 ? (
        <div className={styles.foodListContainer}>
          {savedRecipes.map((food, i) => (
            <FoodCard key={i} food={food} recipe={food.recipe} />
          ))}
        </div>
      ) : (
        <div className={styles.noSavedContainer}>
          <h2 className={styles.noSavedText}>
            No saved recipes yet! Press the save button on a recipe to add it to
            the list.
          </h2>
          <div className={styles.backBtn} onClick={() => router.push("/")}>
            <p>Back to home</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
