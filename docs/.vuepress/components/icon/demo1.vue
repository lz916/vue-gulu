<template>
    <div>
        <g-icon icon-name="left"></g-icon>
        <g-icon icon-name="right"></g-icon>
        <g-icon icon-name="search"></g-icon>
        <g-icon icon-name="like"></g-icon>
    </div>
</template>

<script>
import Icon from '../../../../src/icon/icon'
export default {
    components: {
        gIcon: Icon
    }
}
</script>

<style lang="scss">
    div {
        .icon {
            margin: 0 10px;
            font-size: 1.5em;
        }
    }
</style>