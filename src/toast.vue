<template>
    <div class="g-toast">
        <slot></slot>
        <div class="line"></div>
        <div v-if="!isAutoClose" class="close-btn" @click="onClickClose">{{closeButton.text}}</div>
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
        }
    },
    mounted() {
        if (this.isAutoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    methods: {
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
    .g-toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px;
        background: rgba(0, 0, 0, .7);
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        // height: 36px;
        display: flex;
        .line {
            width: 1px;
            padding: 0 4px;
            color: #fff;
        }
        .close-btn {

        }
    }
</style>
