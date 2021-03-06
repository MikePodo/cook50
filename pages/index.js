import React, { useState } from "react";

import styles from "~styles/pages/index.module.scss";
import recipeService from "~services/recipeService";

import Navbar from "~components/Navbar";
import SearchBar from "~components/SearchBar";
import FoodCard from "~components/FoodCard";

const Home = ({ data }) => {
  const [foodData, setFoodData] = useState(data);

  const fetchMore = async (url) => {
    const res = await recipeService.fetchMore(url);
    setFoodData((prev) => ({ ...res, hits: [...prev.hits, ...res.hits] }));
  };

  return (
    <div className={styles.screen}>
      <Navbar />
      <SearchBar />
      <div className={styles.foodListContainer}>
        {foodData?.hits?.length > 0 &&
          foodData.hits.map((food, i) => (
            <FoodCard key={i} food={food} recipe={food.recipe} />
          ))}
      </div>
      {foodData?.hits?.length > 0 && (
        <div className={styles.nextBtnContainer}>
          <div
            className={`${styles.nextBtn} ${
              !foodData._links?.next ? styles.disabled : null
            }`}
            onClick={() => fetchMore(foodData._links.next.href)}
          >
            Load More
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await recipeService.fetchList();

  return { props: { data: res } };
}

export default Home;
