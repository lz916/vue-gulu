import Vue from "vue";
import Demo from "./demo.vue";
import Row from './row';
import Col from './col';
import Tabs from './tabs';
import TabHead from './tab-head';
import TabBody from './tab-body';
import TabItem from './tab-item';
import TabPane from './tab-pane';
import Popover from './popover'

Vue.component('GRow', Row)
Vue.component('GCol', Col)
Vue.component('GTabs', Tabs)
Vue.component('GTabHead', TabHead)
Vue.component('GTabBody', TabBody)
Vue.component('GTabItem', TabItem)
Vue.component('GTabPane', TabPane)
Vue.component('GPopover', Popover)

Vue.config.productionTip = false;

new Vue({
render: h => h(Demo)
}).$mount("#app");