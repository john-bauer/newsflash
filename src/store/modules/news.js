// import news api
import NewsApi from "@/api/NewsApi.js";

const state = {
  articlesList: null,
  status: {
    loading: false
  }
};

const mutations = {
  SET_ARTICLES_LIST(state, payload) {
    state.articlesList = payload.articles;
  },
  SET_STATUS_LOADING(state, payload) {
    state.status.loading = payload;
  }
};

const actions = {
  async getSearchResults({ commit }, searchQuery) {
    try {
      commit("SET_STATUS_LOADING", true);
      commit(
        "SET_ARTICLES_LIST",
        await NewsApi.getNews(
          searchQuery.filter,
          searchQuery.keywords,
          searchQuery.sort
        )
      );
      commit("SET_STATUS_LOADING", false);
    } catch (error) {
      return error;
    }
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
