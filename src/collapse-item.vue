<template>
    <div class="g-collapse-item">
        <div class="collapse-item-header">
            <div class="title">{{title}}</div>
            <g-icon icon-name="&#xe804;"></g-icon>
        </div>
        <div class="collapse-item-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollapseItem',
    props: {
        title: [String, Number],
        name: {
            type: [String, Number],
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './var.scss';
    $height: 48px;
    .g-collapse-item {
        // padding: 0.5em 0;
        color: $text-color;
        border-top: 1px solid $border-color-base;
        // border-bottom: 1px solid $border-color-base;
        .collapse-item-header {
            height: $height;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .collapse-item-content {
            padding-bottom: 1.5em;
        }
    }
</style>