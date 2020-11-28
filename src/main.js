import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";


import {MdDialog, MdButton, MdCard} from "vue-material/dist/components";
Vue.use(MdDialog)
Vue.use(MdButton)
Vue.use(MdCard)

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBp9pjc5gMH2nAjsmlTPXFdTJSBmwqhhvM",
  authDomain: "keshab-portfolio-docs.firebaseapp.com",
  databaseURL: "https://keshab-portfolio-docs.firebaseio.com",
  projectId: "keshab-portfolio-docs",
  storageBucket: "keshab-portfolio-docs.appspot.com",
  messagingSenderId: "168334021748",
  appId: "1:168334021748:web:0d487167d00db2caa2ed21"
});
export const db = firebase.firestore()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
