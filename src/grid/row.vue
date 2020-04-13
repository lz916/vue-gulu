<template>
    <div class="g-row" :style="rowStyles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GRow',
    props: {
        gutter: [Number, String]
    },
    computed: {
        rowStyles() {
            return {
                'margin-left': `-${(this.gutter / 2)}px`,
                'margin-right': `-${(this.gutter / 2)}px`
            }
        }
    }
}
</script>

<style lang="scss">
    .g-row {
        display: flex;
        flex-wrap: wrap;
    }
</style>

