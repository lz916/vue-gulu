<template>
    <div class="g-collapse-item">
        <div class="collapse-item-header" @click="toggle">
            <div class="title">{{title}}</div>
            <span>></span>
            <!-- <g-icon icon-name="right"></g-icon> -->
        </div>
        <div class="collapse-item-content" v-if="isOpen">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollapseItem',
    props: {
        title: [String, Number],
        name: {
            type: [String, Number],
            required: true
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    inject: ['eventBus'],
    mounted() {
        this.eventBus.$on('update:activeName', (name) => {
            if (this.$parent.isSingle) {
                this.isOpen = name === this.name
            }
        })
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
            this.eventBus.$emit('update:activeName', this.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './var.scss';
    $height: 48px;
    .g-collapse-item {
        // padding: 0.5em 0;
        color: $text-color;
        border-top: 1px solid $border-color-base;
        // border-bottom: 1px solid $border-color-base;
        .collapse-item-header {
            height: $height;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        .collapse-item-content {
            padding-bottom: 1.5em;
        }
    }
</style>