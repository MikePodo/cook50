import React, { useState, useEffect } from "react";

import styles from "~styles/pages/search.module.scss";
import recipeService from "~services/recipeService";

import Navbar from "~components/Navbar";
import SearchBar from "~components/SearchBar";
import FoodCard from "~components/FoodCard";

const Search = ({ data, query }) => {
  const [foodData, setFoodData] = useState(data);

  useEffect(() => {
    setFoodData(data);
  }, [query]);

  const fetchMore = async (url) => {
    const res = await recipeService.fetchMore(url);
    setFoodData((prev) => ({ ...res, hits: [...prev.hits, ...res.hits] }));
  };

  return (
    <div className={styles.screen}>
      <Navbar />
      <SearchBar />
      <h3 className={styles.showingResultsText}>
        {foodData?.hits?.length > 0
          ? `Showing recipes for ${query}`
          : `No recipes found from: ${query}`}
      </h3>
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
  const query = context.query.q;

  const res = await recipeService.searchRecipes(query);

  return { props: { data: res, query } };
}

export default Search;
