// this file handles all api calls
import axios from "axios";

const baseUrl = "https://newsapi.org/v2";

/* 
TODO: top-headlines endpoint accepts a "country" parameter, 
while everything endpoint accepts a language parameter.

Set up the following pattern:

1) User selects country on frontend (default to All)

2) If filter is top-headlines, pass country to api and show 
country selection in url

3) If filter is everything, match selected country to language, 
pass language to api, and show language in url

*/

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
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};

export default NewsApi;
