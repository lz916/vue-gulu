import Vue from 'vue'


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
