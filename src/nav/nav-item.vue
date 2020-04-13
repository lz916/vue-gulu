<template>
    <div class="g-nav-item" :class="{active: active}" @click="onClickItem">
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
    created() {
        this.root.addItems(this)
    },
    methods: {
        onClickItem() {
            this.$emit('add:item', this.name)
        }
    }
}
</script>

<style lang="scss">
    @import '../var.scss';
    .g-nav-item {
        padding: 0.8em 2em;
        cursor: pointer;
        &.active {
            color: $primary-color;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                border-bottom: 2px solid $primary-color;
            }
        }
    }
</style>