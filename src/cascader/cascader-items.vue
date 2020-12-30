<template>
    <div class="g-cascader-item">
        <div class="left">
            <div
                class="col"
                v-for="(item, index) in items"
                @click="onClick(item)"
                :key="index"
            >
                <div class="label">
                    {{ item.name }}
                </div>
                <span
                    v-if="item.children && item.children.length > 0"
                    class="icon"
                    >></span
                >
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems"></cascader-item>
        </div>
    </div>
</template>

<script>
const cascaderItem = {
    name: 'cascader-item',
    components: cascaderItem,
    props: {
        items: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {
            leftSelectedItems: null,
        }
    },
    computed: {
        rightItems() {
            if (this.leftSelectedItems) {
                return this.leftSelectedItems.children
            } else {
                return null
            }
        },
    },
    methods: {
        onClick(item) {
            this.leftSelectedItems = item
            if (!item.children || item.children.length === 0) {
                this.$emit('close')
            }
        },
    },
}
export default cascaderItem
</script>

<style lang="scss">
@import '../var.scss';
.g-cascader-item {
    display: flex;
    .left {
        .col {
            min-width: 140px;
            display: flex;
            padding: 0.5em 1em;
            flex-wrap: wrap;
            justify-content: space-between;
            cursor: pointer;
        }
        .label {
            flex: 1;
        }
    }
    .right {
        border-left: 1px solid $border-color-base;
    }
}
</style>