<template>
<div class="g-tab-pane" v-show="visible">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: 'GTabPane',
    props: {
        title: String,
        name: [Number, String]
    },
    computed: {
        visible() {
            return this.name === this.$parent.selected
        }
    }
}
</script>

<style lang="sass">

</style>
