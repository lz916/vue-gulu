<template>
    <div class="g-cascader-item">
        <div class="left">
            <div
                class="col"
                v-for="(item, index) in items"
                @click="onClick(item, index)"
                :key="index"
            >
                <div
                    class="label"
                    :class="{ active: level === selectedIndexArr[level] }"
                >
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
            <cascader-item
                :items="rightItems"
                :selected="selected"
                @update:selected="onUpdateSelected"
                :level="level + 1"
            ></cascader-item>
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
        selected: {
            type: Array,
            defalut() {
                return []
            },
        },
        level: {
            type: Number,
            defalut: 0,
        },
    },
    data() {
        return {
            selectedIndexArr: [],
        }
    },
    computed: {
        rightItems() {
            if (this.selected[this.level]) {
                let selected = this.items.filter(
                    (item) => item.name === this.selected[this.level].name
                )
                if (
                    selected &&
                    selected[0].children &&
                    selected[0].children.length > 0
                ) {
                    return selected[0].children
                }
            }
        },
    },
    methods: {
        onClick(item, index) {
            console.log(index)
            const copySelected = JSON.parse(JSON.stringify(this.selected))
            this.$set(copySelected, this.level, item)
            // this.selectedIndexArr[this.level] = index
            copySelected.splice(this.level + 1)
            this.$emit('update:selected', copySelected)
        },
        onUpdateSelected(newSelected) {
            console.log(122)
            console.log(newSelected)
            this.$emit('update:selected', newSelected)
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
            &.active {
                color: $primary-color;
            }
        }
    }
    .right {
        border-left: 1px solid $border-color-base;
    }
}
</style>