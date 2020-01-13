import Vue from "vue"
import Icon from './icon'
import Button from './button'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Cascader from './cascader.vue'
import Demo from "./demo.vue"
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabHead from './tab-head'
import TabBody from './tab-body'
import TabItem from './tab-item'
import TabPane from './tab-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('GIcon', Icon)
Vue.component('GRow', Row)
Vue.component('GCol', Col)
Vue.component('GTabs', Tabs)
Vue.component('GTabHead', TabHead)
Vue.component('GTabBody', TabBody)
Vue.component('GTabItem', TabItem)
Vue.component('GTabPane', TabPane)
Vue.component('GPopover', Popover)
Vue.component('GCollapse', Collapse)
Vue.component('GCollapseItem', CollapseItem)
Vue.component('GButton', Button)
Vue.component('GButtonGroup', ButtonGroup)
Vue.component('GInput',Input)
Vue.component('GCascader', Cascader)

Vue.config.productionTip = false

new Vue({
render: h => h(Demo)
}).$mount("#app");