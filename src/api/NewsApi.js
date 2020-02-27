// this file handles all api calls
import axios from "axios";

const baseUrl = "https://newsapi.org/v2";

const NewsApi = {
  getNews(searchQuery, filteringCriteria, sortingCriteria, countryInitials) {
    return axios
      .get(
        baseUrl +
          "/" +
          filteringCriteria +
          "?q=" +
          searchQuery +
          "&sortBy=" +
          sortingCriteria +
          "sources?country=" +
          countryInitials +
          "&apiKey=" +
          process.env.VUE_APP_NEWS_API_KEY
      )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};

export default NewsApi;
