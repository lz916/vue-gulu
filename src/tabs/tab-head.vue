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
    data() {
        return {
            // direction: 'horizontal'
        }
    },
    computed: {
        direction() {
            return this.$parent.direction
        }
    },
    mounted() {
        this.eventBus.$on('update:activeName', (name, vm) => {
            const { width, left, top, height } = vm.$el.getBoundingClientRect()
            const parentElement = vm.$parent.$el
            const parentLeft = parentElement.getBoundingClientRect().left
            const parentTop = parentElement.getBoundingClientRect().top
            if (this.direction === 'horizontal') {
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - parentLeft}px`
                this.$refs.line.style.top = `0px`
                this.$refs.line.style.height = 'auto'
            } else if (this.direction === 'vertical') {
                this.$refs.line.style.left = `0px`
                 this.$refs.line.style.top = `${top - parentTop}px`
                 this.$refs.line.style.height = `${height}px`
                 this.$refs.line.style.width = 'auto'
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../var.scss';
$tab-head-height: 40px;
.g-tab-head {
    display: flex;
    position: relative;
    .line {
        position: absolute;
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

