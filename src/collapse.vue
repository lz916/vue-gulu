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
            type: Array
        },
        isSingle: {
            type: Boolean,
            default: false
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('update:activeName', this.activeName)
        this.addSelected()
        this.removeSelected()
    },
    methods: {
        addSelected() {
            this.eventBus.$on('addSelected', name => {
                let activeNameCopy = JSON.parse(JSON.stringify(this.activeName))
                if (this.isSingle) {
                    activeNameCopy = [name]
                } else {
                    activeNameCopy.push(name)
                }
                this.eventBus.$emit('update:activeName', activeNameCopy)
                this.$emit('update:activeName', activeNameCopy)
            })
        },
        removeSelected() {
            this.eventBus.$on('removeSelected', (name) => {
                let activeNameCopy = JSON.parse(JSON.stringify(this.activeName))
                if (this.isSingle) {
                    activeNameCopy = []
                } else {
                    const index = activeNameCopy.indexOf(name)
                    activeNameCopy.splice(index, 1)
                }
                this.eventBus.$emit('update:activeName', activeNameCopy)
                this.$emit('update:activeName', activeNameCopy)
            })
        }
    }
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