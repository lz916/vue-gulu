<template>
    <div class="g-cascader">
        <div class="trigger"></div>
        <div class="popover">
            <div v-for="(item, index) in source" :key="index">
              <g-cascader-item :item="item"></g-cascader-item>
            </div>
        </div>
    </div>
</template>

<script>
import GCascaderItem from './cascader-item'
export default {
    name: 'GCascader',
    props: {
      source: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GCascaderItem
    }
}
</script>

<style lang="scss">
.g-cascader {
    .trigger {
        width: 100px;
        height: 40px;
        border: 1px solid red;
    }
}
</style>