import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import VueMoment from "vue-moment";
import "./assets/scss/app.scss";

Vue.use(Buefy);
Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
