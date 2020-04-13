<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'buttonGroup'
    }
</script>

<style scoped lang="scss">
    .g-button-group {
        display: inline-flex;
        .g-button {
            border-radius: 0;
            margin-right: 0;
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:not(first-child) {
                margin-left: -1px;
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &.g-button-primary:not(first-child), &.g-button-danger:not(first-child) {
                border-right-color: #fff;
                margin-left: 0;
            }
        }
    }
</style>