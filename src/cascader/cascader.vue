<template>
    <div class="g-cascader">
        <div class="trigger" @click="popoverVisible = !popoverVisible">
            {{ result }}
        </div>
        <div class="popover" v-if="popoverVisible">
            <template>
                <g-cascader-items
                    :items="source"
                    @close="close"
                    :selected="selected"
                    :level="0"
                    @update:selected="onUpdateSelected"
                ></g-cascader-items>
            </template>
        </div>
    </div>
</template>s

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
        source: {
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
        loadData: Function,
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
        close() {
            console.log('执行close')
            this.popoverVisible = false
        },
        onUpdateSelected(newSelected) {
            this.$emit('update:selected', newSelected)
            const lastItem = newSelected[newSelected.length - 1]
            console.log(lastItem)
            this.loadData(lastItem)
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-cascader {
    position: relative;
    .trigger {
        width: 100px;
        height: 40px;
        border: 1px solid red;
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