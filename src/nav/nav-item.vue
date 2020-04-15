<template>
    <div
        class="g-nav-item"
        :class="{ active: active }"
        :style="styleObj"
        @click="onClickItem($event)"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GNavItem',
    inject: ['root'],
    props: {
        name: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        styleObj() {
            const textColor = this.root.textColor
            const activeTextColor = this.root.activeTextColor
            return {
                color: this.active ? activeTextColor : this.root.textColor ? textColor : '',
                'border-bottom-color': activeTextColor ? activeTextColor : ''
            }
        }
    },
    created() {
        this.root.addItems(this)
    },
    methods: {
        onClickItem(e) {
            this.root.namesPath = []
            this.$parent.updateNamePath && this.$parent.updateNamePath()
            this.$emit('add:item', this.name)
            this.checkIsInSubNav(e)
            if (this.$parent.$options && this.$parent.$options.name && this.$parent.$options.name === 'GSubNav' && this.$parent.isOpen) {
                this.$parent.isOpen = false
            }
        },
        // 判断是不是在nav-item是不是在sub-nav里面
        checkIsInSubNav(e) {
            if (this.$parent.$options && this.$parent.$options.name && this.$parent.$options.name === 'GSubNav') {
                e.target.style.borderBottom = 'none'
            }
        }
    }
}
</script>

<style lang="scss">
@import '../var.scss';
.g-nav-item {
    padding: 1em 2em;
    color: $text-color-secondary;
    cursor: pointer;
    // height: 60px;
    // line-height: 60px;
    &.active {
        color: $text-color;
        position: relative;
        border-bottom: 2px solid $primary-color;
        // &::after {
        //     content: '';
        //     position: absolute;
        //     left: 0;
        //     right: 0;
        //     bottom: 0;
        // }
    }
}
</style>