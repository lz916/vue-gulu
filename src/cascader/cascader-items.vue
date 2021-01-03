<template>
  <div class="g-cascader-item">
    <div class="left">
      <div
        class="col"
        v-for="(item, index) in items"
        @click="onClick(item)"
        :key="index"
      >
        <div class="label" :class="{ active: level === index }">
          {{ item.name }}
        </div>
        <span v-if="item.children && item.children.length > 0" class="icon"
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
  name: "cascader-item",
  components: cascaderItem,
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: Array,
      defalut() {
        return [];
      },
    },
    level: {
      type: Number,
      defalut: 0,
    },
  },
  data() {
    return {
      leftSelectedItems: null,
    };
  },
  computed: {
    rightItems() {
      const currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children.length > 0) {
        return currentSelected.children;
      } else {
        return null;
      }
    },
  },
  methods: {
    onClick(item) {
      this.leftSelectedItems = item;
      const copySelected = JSON.parse(JSON.stringify(this.selected));
      this.$set(copySelected, this.level, item);
      copySelected.splice(this.level + 1);
      console.log(copySelected);
      this.$emit("update:selected", copySelected);
    },
    onUpdateSelected(newSelected) {
      console.log(122);
      console.log(newSelected);
      this.$emit("update:selected", newSelected);
    },
  },
};
export default cascaderItem;
</script>

<style lang="scss">
@import "../var.scss";
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