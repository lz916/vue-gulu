import Toast from './toast.vue'
console.log(Toast)

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor =  Vue.extend(Toast)
            const toast = new Constructor({
                propsData: {
                    isAutoClose: toastOptions.isAutoClose,
                    closeButton: toastOptions.closeButton
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}