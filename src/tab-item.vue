<template>
    <div class="g-tab-item" @click="changeActiveName" :class="{'active': this.isActive}">
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
            console.log(name)
            this.isActive = name === this.name
        })
    },
    methods: {
        changeActiveName() {
            console.log(111)
            this.eventBus.$emit('update:activeName', this.name)
        }
    }
}
</script>

<style style="scss" scoped>
    .g-tab-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active {
            color: red
        }
    }
</style>

