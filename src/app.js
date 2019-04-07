import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
console.log(Vue)
Vue.component('gButton', Button)
Vue.component('gButtonGroup', ButtonGroup)
new Vue({
    el: '#app'
})