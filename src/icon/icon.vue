<template>
    <svg class="icon" v-if="iconName">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
import './symbol';
export default {
    name: 'gIcon',
    props: ['iconName'],
    mounted() {
        // console.log(12333)
        const test = import('./symbol')
        console.log(test)
        import('./symbol.js')
    }
}
</script>

<style lang="scss">
.icon {
    width: 1em;
    height: 1em;
}
</style>