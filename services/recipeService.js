import axios from "axios";

const BASE_URL = "https://api.edamam.com/api/";

const axiosReq = async (route) => {
  const { data } = await axios.get(
    `${BASE_URL}${route}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  );
  return data;
};

const routes = {
  fetchList: () => {
    return axiosReq(`recipes/v2?type=public&q=&diet=balanced`);
  },

  fetchMore: (url) => {
    return axios.get(url).then(({ data }) => data);
  },

  searchRecipes: (query) => {
    return axiosReq(`recipes/v2?type=public&q=${query}`);
  },
};

export default routes;
