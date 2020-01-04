import Vue from 'vue'
import App from './App.vue'
import Clipboard from 'v-clipboard'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false
Vue.use(Clipboard)


new Vue({
  created() {
    AOS.init({ disable: "phone" });
  },
  render: h => h(App),
}).$mount('#app')
