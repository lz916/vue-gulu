<template>
    <div class="g-cascader-item" :style="{ height: popoverHeight }">
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
                <span v-if="!item.isLeaf" class="icon">
                    <g-icon iconName="right" v-if="!item.isLoading"></g-icon>
                    <g-icon iconName="loading" v-else></g-icon>
                </span>
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
import gIcon from '../icon/icon'
const cascaderItem = {
    name: 'cascader-item',
    components: {
        cascaderItem,
        gIcon,
    },
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
        popoverHeight: String,
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
            const copySelected = JSON.parse(JSON.stringify(this.selected))
            this.$set(copySelected, this.level, item)
            copySelected.splice(this.level + 1)
            this.$emit('update:selected', copySelected)
        },
        onUpdateSelected(newSelected) {
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
        overflow: auto;
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
        overflow: auto;
        border-left: 1px solid $border-color-base;
    }
}
</style>