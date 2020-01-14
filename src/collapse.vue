<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'Collapse',
    data() {
        return {
            eventBus: new Vue()
        }
    },
    props: {
        activeName: {
            type: [String, Array]
        },
        isSingle: {
            type: Boolean,
            default: true
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('update:activeName', this.activeName)
    },
    // mounted() {}
}
</script>

<style lang="scss" scoped>
    @import './var.scss';
    .g-collapse {
        .g-collapse-item:last-child {
            border-bottom: 1px solid $border-color-base;
        }
    }
</style>