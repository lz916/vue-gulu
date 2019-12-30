<template>
    <div class="g-tabs">
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
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        this.eventBus.$emit('update:activeName', this.activeName)
    }
}
</script>

<style>

</style>

