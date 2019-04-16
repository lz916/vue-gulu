import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
Vue.component('gButton', Button)
Vue.component('gButtonGroup', ButtonGroup)
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

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm =  new Constructor({
        propsData: {
            type: 'primary',
            icon: 'loading',
            loading: true
        }
    })
    vm.$mount(div)
    const classNames = vm.$el.className.split(' ')
    const use = vm.$el.querySelector('use')
    const svg = vm.$el.querySelector('svg')
    expect(classNames.indexOf('g-button-primary')).to.equal(1)
    expect(svg.className.baseVal.split(' ').indexOf('icon-loading')).to.equal(1)
    expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm =  new Constructor({
        propsData: {
            type: 'danger',
            icon: 'loading',
            iconPosition: 'left',
        }
    })
    vm.$mount(div)
    console.log(vm.$el.classList)
    console.log(typeof vm.$el.className)
    const classNames = vm.$el.className.split(' ')
    console.log(classNames)
    const use = vm.$el.querySelector('use')
    const svg = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    console.log(svg)
    expect(classNames.indexOf('g-button-danger')).to.equal(1)
    // expect(svg.className).to.equal('icon-loading')
    expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm =  new Constructor({
        propsData: {
            type: 'danger',
            icon: 'setting',
            iconPosition: 'left',
            size: 'large',
            disabeld: true
        }
    })
    vm.$mount(div)
    console.log(vm.$el.classList)
    console.log(typeof vm.$el.className)
    const classNames = vm.$el.className.split(' ')
    console.log(classNames)
    const use = vm.$el.querySelector('use')
    const svg = vm.$el.querySelector('svg')
    const button = vm.$el.querySelector('button')
    console.log(button)
       const { order } = window.getComputedStyle(svg)
    expect(classNames.indexOf('g-button-danger')).to.equal(1)
    expect(classNames.indexOf('g-button-large')).to.equal(2)
    // expect(svg.className).to.equal('icon-loading')
    expect(use.getAttribute('xlink:href')).to.equal('#i-setting')
    expect(order).to.equal('1')
    // expect(button.getAttribute('disabeld')).to.equal('disabeld')
}

{
    const Constructor = Vue.extend(Button)
    const vm =  new Constructor({
        propsData: {
            type: 'danger',
            icon: 'setting',
            iconPosition: 'left',
        }
    })
    vm.$mount()
    let spy = chai.spy(function() {})
    vm.$on('click', spy)
    vm.$el.click()
    expect(spy).to.have.been.called()
}