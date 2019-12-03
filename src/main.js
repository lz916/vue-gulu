import Vue from "vue";
import Demo from "./demo.vue";
import Row from './row'
import Col from './col'
Vue.component('GRow', Row)
Vue.component('GCol', Col)

Vue.config.productionTip = false;

new Vue({
render: h => h(Demo)
}).$mount("#app");