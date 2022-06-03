import axios from "axios";

const BASE_URL = "https://api.edamam.com/api/";

const axiosReq = async (route) => {
  const { data } = await axios.get(
    `${BASE_URL}${route}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  );
  return data;
};

const routes = {
  fetchRecipe: (query) => {
    return axiosReq(`recipes/v2?type=public&q=${query}`);
  },
};

export default routes;
