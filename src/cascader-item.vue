<template>
    <div class="cascader-item">
        <div class="left">
            <div class="label" v-for="(item, index) in items" 
                               :key="index"
                               @click="onClickLabel(item)">
                               {{item.name}}
                <g-icon icon-name="right" v-if="item.children"></g-icon>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-item :items="rightItems"
                           :popover-height="popoverHeight"
                           :style="{height: popoverHeight}"
                           :level="level + 1"
                           :selected="selected"
                           @update:selected="onUpdateSelected"></cascader-item>
        </div>
    </div>
</template>

<script>
import gIcon from './icon';
const cascaderItem = {
    name: 'cascaderItem',
    components: {
        cascaderItem,
        gIcon
    },
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        },
        popoverHeight: {
            type: String
        },
        selected: {
            type: Array,
            default: () => {
                return []
            }
        },
        level: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            // leftItems: null
        }
    },
    computed: {
        rightItems() {
            if (this.selected[this.level] && this.selected[this.level].children) {
                return this.selected[this.level].children
            } else {
                return null
            }
        }
    },
    methods: {
        onClickLabel(item) {
            console.log(item)
            console.log(this.selected)
            let copy = JSON.parse(JSON.stringify(this.selected)) // 深拷贝
            console.log(100)
            console.log(copy)
            this.$set(copy, this.level, item)
            console.log(this.level)
            console.log(`copy${JSON.stringify(copy)}`)
            this.$emit('update:selected', copy)
        },
        onUpdateSelected(newSelected) {
            // console.log(newSelected)
            this.$emit('update:selected', newSelected)
        }
    }
}
export default cascaderItem
</script>

<style lang="scss" scoped>
    @import './var.scss';
    .cascader-item {
        background-color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        // box-shadow: $box-shadow-base;
        font-size: $font-size-base;
        color: $text-color;
        .left {
            height: 100%;
            .label {
                padding: 0.4em 0.8em;   
                display: flex;
                align-items: center;
                cursor: pointer;
                .icon {
                    margin-left: 0.5em;
                    transform: scale(0.6);
                    fill: $text-color-secondary;
                    // font-size: .8em;
                }
                &:hover {
                    background-color: $primary-color;
                    color: #fff;
                    .icon {
                        fill: #fff;
                    }
                }
            }
        }
        .right {
            border-left: 1px solid $border-color-base;
            height: 100%;
        }
    }
</style>


