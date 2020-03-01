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
  getNews(filter, keywords, sort, page, country) {
    if (filter === "top-headlines") {
      return axios
        .get(
          `${baseUrl}/${filter}?country=${country}&q=${keywords}&sortBy=${sort}&page=${page}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
        )
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error;
        });
    } else if (filter === "everything") {
      const languageConversion = country => {
        /* TODO: Explore a more elegant solution for this... */
        if (country === "us") {
          return "en";
        } else if (country === "es") {
          return "es";
        } else if (country === "de") {
          return "de";
        } else if (country === "fr") {
          return "fr";
        }
      };
      let lang = languageConversion(country);
      console.log("got here...");
      return axios
        .get(
          `${baseUrl}/${filter}?language=${lang}&q=${keywords}&sortBy=${sort}&page=${page}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
        )
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error;
        });
    }
  }
};

export default NewsApi;
