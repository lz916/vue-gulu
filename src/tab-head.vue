<template>
    <div class="g-tab-head" :class="{[`g-tab-head-${direction}`]: true}">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
export default {
    name: 'GTabHead',
    inject: ['eventBus'],
    props: {
        direction: {
            type: String,
            default: 'vertical',
            validator: val => {
                if (['vertical', 'horizontal'].indexOf(val) > -1) {
                    return true
                }
                return false
            }
        }
    },
    mounted() {
        this.eventBus.$on('update:activeName', (name, vm) => {
            const { width, left, top, height } = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            if (this.direction === 'horizontal') {
                this.$refs.line.style.left = `${left}px`
            } else if (this.direction === 'vertical') {
                 this.$refs.line.style.top = `${top}px`
                 this.$refs.line.style.height = `${height}px`
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@import './var.scss';
$tab-head-height: 40px;
.g-tab-head {
    display: flex;
    position: relative;
    .line {
        position: absolute;
        width: 100px;
        transition: all 0.5s;
    }
    &.g-tab-head-vertical {
        flex-direction: column;
        margin-right: 16px;
        padding-right: 16px;
        border-right: 1px solid $border-color-base;
        .line {
            border-right: 2px solid $primary-color;
            top: 0;
            right: 0
        }
    }
    &.g-tab-head-horizontal {
        height: $tab-head-height;
        line-height: $tab-head-height;
        .line {
            bottom: 0;
            left: 0;
            border-bottom: 2px solid $primary-color;
        }
    }
}
</style>

