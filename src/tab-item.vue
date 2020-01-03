<template>
    <div @click="changeActiveName" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GTabItem',
    data() {
        return {
            isActive: false
        }
    },
    props: {
        name: {
            type: [String, Number],
            default: ''
        }
    },
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:activeName', name => {
            this.isActive = name === this.name
        })
    },
    computed: {
        classes() {
            return [
                'g-tab-item',
                { 'active': this.isActive },
                { [`g-tab-item-${this.direction}`]: true }
            ]
        },
        direction() {
            return this.$parent.direction
        }
    },
    methods: {
        changeActiveName() {
            this.eventBus.$emit('update:activeName', this.name, this)
        }
    }
}
</script>

<style lang="scss" scoped>
@import './var.scss';
.g-tab-item {
    // flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text-color;
   
    cursor: pointer;
    &.active {
        color: $primary-color;
    }
    &.g-tab-item-horizontal {
        padding: 0 1em
    }
    &.g-tab-item-vertical {
        padding: 1em 0;
    } 
}
</style>

