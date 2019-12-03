import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Cascader from './cascader.vue'
Vue.component('gButton', Button)
Vue.component('gButtonGroup', ButtonGroup)
Vue.component('gInput',Input)
Vue.component('gCascader', Cascader)
import db from './db.js'
new Vue({
    el: '#app',
    data() {
        return {
            source: [
                {
                    name: '湖南',
                    children: [
                        {
                            name: '郴州',
                            children: [
                                {
                                    name: '资兴',
                                },
                                {
                                    name: '桂阳'
                                }
                            ]
                        },
                        {
                            name: '永州'
                        },
                        {
                            name: '长沙'
                        }
                    ]
                },
                {
                    name: '湖北',
                    children: [
                        {
                            name: '武汉'
                        },
                        {
                            name: '荆州'
                        }
                    ]
                }
            ],
            selected: []
        }
    },
    methods: {
        test() {
            console.log(1)
        },
        onUpdateSelected(newSelected) {
            this.selected = newSelected
        }
    }
})
