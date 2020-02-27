import Vue from "vue";
import Vuex from "vuex";
import news from "@/store/modules/news";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { news }
});
