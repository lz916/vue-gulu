import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
import Input from './input'
Vue.component('gButton', Button)
Vue.component('gButtonGroup', ButtonGroup)
Vue.component('gInput',Input)
new Vue({
    el: '#app',
    data() {
        return {}
    },
    methods: {
        test() {
            console.log(1)
        }
    }
})
