import Vue from "vue"
import Icon from './icon/icon'
import Button from './button/button'
import ButtonGroup from './button/buttonGroup'
import Input from './input/input'
import Cascader from './cascader/cascader.vue'
import Demo from "./demo.vue"
import Row from './grid/row'
import Col from './grid/col'
import Tabs from './tabs/tabs'
import TabHead from './tabs/tab-head'
import TabBody from './tabs/tab-body'
import TabItem from './tabs/tab-item'
import TabPane from './tabs/tab-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'
import Switch from './switch/switch.vue'
import ColorPicker from './colorPicekr/picker-dropdown.vue'
import Slider from './slider/index'

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
Vue.component('GNav', Nav)
Vue.component('GNavItem', NavItem)
Vue.component('GSubNav', SubNav)
Vue.component('GSwitch', Switch)
Vue.component('GColorPicker', ColorPicker)
Vue.component('GSlider', Slider)

Vue.config.productionTip = false

new Vue({
render: h => h(Demo)
}).$mount("#app");