<template>
    <div class="cascader">
        <div class="trggiver" @click="popoverVisible = !popoverVisible">
            {{result.join('/')}}
        </div>
        <div class="popover">
            <cascader-item :items="source"
                           :popover-height="popoverHeight"
                           :style="{height: popoverHeight}"
                           :selected="selected"
                           :level="level"
                           @update:selected="onUpdateSelected"></cascader-item>
        </div>
    </div>
</template>

<script>
import cascaderItem from "./cascader-item";
export default {
  name: "gCascader",
  props: {
    source: { // 数据源
      type: Array,
      default: () => {
        return []
      }
    },
    popoverHeight: {
      type: String,
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
    },
  },
  computed: {
    result() {
      return this.selected.map(item => {
        return item.name
      })
    }
  },
  components: {
    cascaderItem
  },
  data() {
    return {
        popoverVisible: false
    }
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected)
    }
  }
};
</script>
<style lang="scss">
@import './var.scss';
.cascader {
  position: relative;
  .trggiver {
      height: 32px;
      border: 1px solid #ddd;
      width: 200px;
  }
  .popover {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    box-shadow: $box-shadow-base;
  }
}
</style>

