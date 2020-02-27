// import news api
import NewsApi from "@/api/NewsApi.js";

const state = {
  filteringCriteria: "top-headlines",
  sortingCriteria: "popularity",
  currentSearchQuery: null,
  countryInitials: "us",
  totalResults: null,
  articlesList: null,
  articlesListStatus: {
    pending: false,
    fail: false,
    success: false
  }
};

const mutations = {
  SET_ARTICLES_LIST(state, payload) {
    state.articlesList = payload.articles;
  },
  SET_TOTAL_RESULTS(state, payload) {
    state.totalResults = payload;
  },
  SET_CURRENT_SEARCH_QUERY(state, payload) {
    state.currentSearchQuery = payload;
  },
  // update status to show loading, success, etc.
  SET_ARTICLES_LIST_STATUS_PENDING(state, payload) {
    state.articlesListStatus.pending = payload;
  },
  SET_ARTICLES_LIST_STATUS_SUCCESS(state, payload) {
    state.articlesListStatus.success = payload;
  },
  SET_ARTICLES_LIST_STATUS_FAIL(state, payload) {
    state.articlesListStatus.fail = payload;
  },
  SET_SORTING_CRITERIA(state, payload) {
    state.sortingCriteria = payload;
  },
  SET_FILTERING_CRITERIA(state, payload) {
    state.filteringCriteria = payload;
  }
};

const actions = {
  updateSortingCriteria({ commit }, sortingType) {
    commit("SET_SORT_BY", sortingType);
  },
  updateFilteringCriteria({ commit }, filteringType) {
    commit("SET_SORT_BY", filteringType);
  },
  async getSearchResults({ commit }, searchQuery) {
    commit("SET_ARTICLES_LIST_STATUS_FAIL", false);
    commit("SET_TOTAL_RESULTS", null);
    commit("SET_ARTICLES_LIST_STATUS_SUCCESS", false);
    commit("SET_ARTICLES_LIST_STATUS_PENDING", true);
    try {
      commit(
        "SET_ARTICLES_LIST",
        // TODO, dynamic filter + sort criteria
        await NewsApi.getNews(searchQuery, "top-headlines", "popularity", "US")
      );
      commit("SET_CURRENT_SEARCH_QUERY", searchQuery);
      commit("SET_TOTAL_RESULTS", state.articlesList.length);
      commit("SET_ARTICLES_LIST_STATUS_PENDING", false);
      commit("SET_ARTICLES_LIST_STATUS_SUCCESS", true);
    } catch (error) {
      commit("SET_ARTICLES_LIST_STATUS_PENDING", false);
      commit("SET_ARTICLES_LIST_STATUS_success", false);
      commit("SET_ARTICLES_LIST_STATUS_FAIL", true);
    }
  }
};

const getters = {
  totalResults: state => {
    return state.articlesList.articles.length;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
