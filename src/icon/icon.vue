<template>
    <svg class="icon" v-if="iconName">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
    export default {
        name: 'gIcon',
        props: ['iconName']
    }
</script>

<style lang="scss">
    .icon {
        width: 1em;
        height: 1em;
    }
</style>