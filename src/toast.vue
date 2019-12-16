<template>
    <div class="g-toast-wrapper" :class="toastClass">
        <div class="g-toast-content" ref="toast">
            <div class="message">
                <div v-if="enableHtml" v-html="$slots.default[0]"></div>
                <slot v-else></slot>
            </div>
            <div class="line" ref="line"></div>
            <div v-if="!isAutoClose" class="close-btn" @click="onClickClose">{{closeButton.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GToast',
    data() {
        return {

        }
    },
    props: {
        isAutoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 3
        },
        closeButton: {
            type: Object,
            default: {
                text: '关闭',
                callback: undefined
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator: (val) => {
                if (['top', 'bottom', 'middle'].indexOf(val) > -1) {
                    return true
                }
                return false
            }
        }
    },
    mounted() {
        this.execAutoClose()
        this.computedLineHeight()
    },
    computed: {
        toastClass() {
            return {
                [`position-${this.position}`]: true
            }
        }
    },
    methods: {
        execAutoClose() {
            if (this.isAutoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        computedLineHeight() {
            this.$nextTick(() => {
                this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
            })
        },
        close() {
            this.$el.remove()
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback && typeof this.closeButton.callback === 'functiion') {
                this.closeButton.callback()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .g-toast-wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 10px;
            .g-toast-content {
                animation: slide-down 1s ease;
            }
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
            .g-toast-content {
                animation: fade 1s ease;
            }
        }
        &.position-bottom {
            bottom: 10px;
           .g-toast-content {
                animation: slide-up 1s ease;
            }
        }
        .g-toast-content {
            padding: 0 10px;
            background: rgba(0, 0, 0, .7);
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            display: flex;
            align-items: center;
        }
        .message {
            padding: 10px 0;
        }
        .line {
            width: 1px;
            margin: 0 6px;
            color: #fff;
            background: #fff;
        }
        .close-btn {
            flex-shrink: 0
        }
    }
    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0)
        }
    }
    @keyframes fade {
        0% {
            opacity: 0;  
        }
        100% {
            opacity: 1;
        }
    }
</style>
