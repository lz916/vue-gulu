<template>
    <div class="g-tab-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GTabPane',
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
    methods: {
        changeActiveName() {
            this.eventBus.$emit('update:activeName', this.name)
        }
    }
}
</script>

<style>

</style>

