<template>
    <div class="cascader-item">
        <div class="left" @click="leftItems = sourceItem">
            <div>{{sourceItem.name}}</div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item v-for="(item, index) in rightItems" :key="index" :source-item="item"></cascader-item>
        </div>
    </div>
</template>

<script>
const cascaderItem = {
    name: 'cascaderItem',
    components: {
        cascaderItem
    },
    props: {
        sourceItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            leftItems: null
        }
    },
    computed: {
        rightItems() {
            if (this.leftItems && this.leftItems.children) {
                return this.leftItems.children
            } else {
                return null
            }
        }
    }
}
export default cascaderItem
</script>

<style lang="scss" scoped>
    .cascader-item {
        // border: 1px solid red;
        // width: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            border: 1px solid red;
        }
    }
</style>


