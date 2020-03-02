// this file handles all api calls
import axios from "axios";

const baseUrl = "https://newsapi.org/v2";

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
    } else if (filter === "everything" && country !== "") {
      const languageConversion = country => {
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
    } else if (filter === "everything" && country === "") {
      return axios
        .get(
          `${baseUrl}/${filter}?q=${keywords}&sortBy=${sort}&page=${page}&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
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
