<template>
    <div class="g-tabs" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'GTabs',
    data() {
        return {
            eventBus: new Vue()
        }
    },
    props: {
        activeName: {
            type: [Number, String],
            default: ''
        },
        direction: {
            type: String,
            default: 'vertical',
            validator: (val) => {
                if (['vertical', 'horizontal'].indexOf(val) > -1) {
                    return true
                }
                return false
            }
        }
    },
    computed: {
        classes() {
            return {
                [`g-tabs-${this.direction}`]: true
            }
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        if (this.$children.length === 0) {
            console.error('tabs的子组件应该为tab-head和tab-body')
        }
        this.$children.forEach(vm => {
            if (vm.$options.name === 'GTabHead') {
                vm.$children.forEach(child => {
                    if (child.name === this.activeName) {
                        this.eventBus.$emit('update:activeName', this.activeName, child)
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    .g-tabs {
        &.g-tabs-vertical {
            display: flex;
            .g-tab-body {
                flex: 1;
            }
        }
    }
</style>

