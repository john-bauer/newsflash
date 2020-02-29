// this file handles all api calls
import axios from "axios";

const baseUrl = "https://newsapi.org/v2";

const NewsApi = {
  getNews(filter, keywords, sort, pageNumber) {
    return axios
      .get(
        baseUrl +
          "/" +
          filter +
          "?q=" +
          keywords +
          "&sortBy=" +
          sort +
          "&page=" +
          pageNumber +
          "&apiKey=" +
          process.env.VUE_APP_NEWS_API_KEY
      )
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};

export default NewsApi;
