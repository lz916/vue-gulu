const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置type', () => {
        const Constructor = Vue.extend(Button)
        const vm =  new Constructor({
            propsData: {
                type: 'primary',
                icon: 'loading',
                loading: true
            }
        })
        vm.$mount()
        const classNames = vm.$el.className.split(' ')
        const use = vm.$el.querySelector('use')
        const svg = vm.$el.querySelector('svg')
        expect(classNames.indexOf('g-button-primary')).to.equal(1)
        expect(svg.className.baseVal.split(' ').indexOf('icon-loading')).to.equal(1)
        expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('可以设置icon', () => {
        const Constructor = Vue.extend(Button)
        const vm =  new Constructor({
            propsData: {
                type: 'danger',
                icon: 'loading',
                iconPosition: 'left',
            }
        })
        vm.$mount(div)
        const classNames = vm.$el.className.split(' ')
        const use = vm.$el.querySelector('use')
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(classNames.indexOf('g-button-danger')).to.equal(1)
        expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
        expect(order).to.equal('1')
        vm.$destroy()
    })
    it('可以设置iconPosition', () => {
        const Constructor = Vue.extend(Button)
        const vm =  new Constructor({
            propsData: {
                type: 'danger',
                icon: 'loading',
                iconPosition: 'left',
            }
        })
        vm.$mount()
        const classNames = vm.$el.className.split(' ')
        const use = vm.$el.querySelector('use')
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(classNames.indexOf('g-button-danger')).to.equal(1)
        expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
        expect(order).to.equal('1')
        vm.$destroy()
    })
    it('可以设置icon', () => {
        const Constructor = Vue.extend(Button)
        const vm =  new Constructor({
            propsData: {
                type: 'danger',
                icon: 'loading',
                iconPosition: 'left',
            }
        })
        vm.$mount()
        const classNames = vm.$el.className.split(' ')
        const use = vm.$el.querySelector('use')
        const svg = vm.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        expect(classNames.indexOf('g-button-danger')).to.equal(1)
        // expect(svg.className).to.equal('icon-loading')
        expect(use.getAttribute('xlink:href')).to.equal('#i-loading')
        expect(order).to.equal('1')
        vm.$destroy()
    })
    it('可以设置size', () => {
        const Constructor = Vue.extend(Button)
        const vm =  new Constructor({
            propsData: {
                type: 'danger',
                icon: 'setting',
                iconPosition: 'left',
                size: 'large',
                disabeld: true
            }
        })
        vm.$mount()
        const classNames = vm.$el.className.split(' ')
        const use = vm.$el.querySelector('use')
        const svg = vm.$el.querySelector('svg')
        const button = vm.$el.querySelector('button')
        const { order } = window.getComputedStyle(svg)
        expect(classNames.indexOf('g-button-danger')).to.equal(1)
        expect(classNames.indexOf('g-button-large')).to.equal(2)
        expect(use.getAttribute('xlink:href')).to.equal('#i-setting')
        expect(order).to.equal('1')
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'left',
            }
        }).$mount()

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})