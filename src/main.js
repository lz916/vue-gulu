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

import Tabs1 from './tabs1/tabs'
import TabPane1 from './tabs1/tab-pane.vue'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'
import Switch from './switch/switch.vue'
import ColorPicker from './colorPicekr/picker-dropdown.vue'
import Slider from './slider/index'
import Carousel from './carousel/carousel.vue'
import CarouselItem from './carousel/carousel-item.vue'
import Pagination from './pagination/pagination.vue'

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
Vue.component('GTabs1', Tabs1)
Vue.component('GTabPane1', TabPane1)
Vue.component('GCarousel', Carousel)
Vue.component('GCarouselItem', CarouselItem)
Vue.component('GPagination', Pagination)

Vue.config.productionTip = false

new Vue({
render: h => h(Demo)
}).$mount("#app");