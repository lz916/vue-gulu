<template>
    <div class="g-cascader" ref="cascader">
        <div class="trigger" @click="toggle">
            {{ result }}
        </div>
        <div class="popover" v-if="popoverVisible">
            <template>
                <g-cascader-items
                    :items="source"
                    :selected="selected"
                    :level="0"
                    :popoverHeight="popoverHeight"
                    @close="close"
                    @update:selected="onUpdateSelected"
                ></g-cascader-items>
            </template>
        </div>
    </div>
</template>

<script>
import GCascaderItems from './cascader-items'
export default {
    name: 'GCascader',
    data() {
        return {
            popoverVisible: false,
        }
    },
    props: {
        source: { // 数据源
            type: Array,
            default() {
                return []
            },
        },
        selected: { // 已选中的数据
            type: Array,
            defalut() {
                return []
            },
        },
        popoverHeight: String,
        loadData: Function, // 动态加载数据的方法
        lazy: { // 是否需要动态加载
            type: Boolean,
            default: false
        }
    },
    computed: {
        result() {
            return this.selected.map((item) => item.name).join('/')
        },
    },
    components: {
        GCascaderItems,
    },
    methods: {
        x(e) {
            const { cascader } = this.$refs
            if (e.target === cascader || cascader.contains(e.target)) {
                return
            }
            this.close()
        },
        open() {
            this.popoverVisible = true
            document.addEventListener('click', this.x)
        },
        close() {
            this.popoverVisible = false
            document.removeEventListener('click', this.x)
        },
        toggle() {
            if (this.popoverVisible) {
                this.close()
            } else {
                this.open()
            }
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            const lastItem = newSelected[newSelected.length - 1]
            const updateSource = (result) => {
                this.$set(lastItem, 'children', result)
                this.$set(lastItem, 'isLoading', true)
            }
            this.loadData(lastItem, updateSource)
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-cascader {
    position: relative;
    .trigger {
        display: inline-block;
        min-width: 120px;
        height: 36px;
        border: 1px solid $border-color-base;
        border-radius: 4px;
        line-height: 36px;
        padding: 0 8px;
    }
    .popover {
        position: absolute;
        top: 100%;
        background-color: #fff;
        // border: 1px solid $border-color-base;
        // padding: 0.5em 0;
        box-shadow: $box-shadow-base;
        z-index: 999;
    }
}
</style>