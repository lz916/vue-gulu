<template>
    <div class="g-cascader-item">
        <div class="left">
            <div class="label">{{ item.name }}</div>
        </div>
        <div class="right">
            <div v-for="(subItem, index) in item.children" :key="index">
                <cascader-item :item="subItem"></cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
const cascaderItem = {
    name: 'cascader-item',
    components: cascaderItem,
    props: {
        item: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {}
    },
    computed() {
        rightItems() {
            if ()
        }
    }
}
export default cascaderItem
</script>

<style lang="scss">
    .g-cascader-item {
        border: 1px solid red;
        display: flex;

    }
</style>