<template>
    <div class="g-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GRow'
}
</script>

<style lang="scss">
    .g-row {
        display: flex;
        flex-wrap: wrap
    }
</style>

