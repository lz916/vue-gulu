<template>
    <div class="g-collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Collapse'
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