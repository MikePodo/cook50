import React, { useEffect } from "react";
import styles from "~styles/pages/index.module.scss";

import recipeService from "~services/recipeService";

const Home = () => {
  useEffect(() => {
    const f = async () => {
      const res = await recipeService.fetchRecipe("chicken");
      console.log(res);
    };
    f();
  });

  return (
    <div className={styles.container}>
      <h1>Cook50</h1>
    </div>
  );
};

export default Home;
