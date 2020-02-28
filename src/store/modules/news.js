// import news api
import NewsApi from "@/api/NewsApi.js";

const state = {
  articlesList: null
};

const mutations = {
  SET_ARTICLES_LIST(state, payload) {
    state.articlesList = payload.articles;
  }
};

const actions = {
  updateSortingCriteria({ commit }, sortingType) {
    commit("SET_SORT_BY", sortingType);
  },
  async getSearchResults({ commit }, searchQuery) {
    try {
      commit(
        "SET_ARTICLES_LIST",
        await NewsApi.getNews(
          searchQuery.filter,
          searchQuery.keywords,
          searchQuery.sort
        )
      );
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
