<template>
  <div :class="sliderClass" ref="slider">
    <div class="g-slider-runway" :style="runwayStyle">
      <div class="g-slider-button" @mousedown="onButtonDown" :style="buttonStyle"></div>
      <div class="g-slider-bar" :style="barStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GSlider",
  data() {
    return {
      dragging: false,
      isClick: false,
      startX: 0,
      startY: 0,
      currentY: 0,
      currentX: 0,
      translateX: 0,
      translateY: 0,
      startPosition: 0,
      newPosition: 0
    };
  },
  props: {
    value: {
      type: Number,
      defalut: 0
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {
    buttonStyle() {
      if (!this.vertical) {
        return {
          left: this.currentPosition
        };
      }
      if (this.vertical) {
        return {
          bottom: `${this.translateY}px`
        };
      }
    },
    sliderClass() {
      return [
        "g-slider",
        {
          "is-vertical": this.vertical
        }
      ];
    },
    runwayStyle() {
      if (this.vertical) {
        return {
          height: `${this.height}px`
        };
      }
    },
    barStyle() {
        return {
            width: this.currentPosition
        }
    },
    currentPosition() {
      return `${this.value - (this.min / (this.max - this.min)) * 100}%`;
    },
    precision() {
      let precisions = [this.min, this.max, this.step].map(item => {
        let decimal = ("" + item).split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    }
  },
  methods: {
    onButtonDown(event) {
      this.onDragStart(event);
    },
    onDragStart(event) {
      this.dragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      document.addEventListener("mousemove", this.onDragging);
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;
    },
    onDragging(event) {
      if (this.dragging) {
        this.currentX = event.clientX;
        this.currentY = event.clientY;
        let diff = 0;
        let sliderSize = this.$refs.slider.clientWidth;
        diff = ((this.currentX - this.startX) / sliderSize) * 100;
        this.newPosition = this.startX + diff;
        this.setPosition(this.newPosition);
      }
    },
    setPosition(newPosition) {
      if (newPosition === null || isNaN(newPosition)) {
        return;
      }
      if (newPosition < 0) {
        this.newPosition = 0;
      }
      if (this.newPosition > 100) {
        this.newPosition = 100;
      }
      let lengthPreStep = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(this.newPosition / lengthPreStep);
      let value =
        steps * lengthPreStep * (this.max - this.min) * 0.01 + this.min;
      value = parseFloat(value.toFixed(this.precision));
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss">
@import "../var.scss";
.g-slider {
  position: relative;
  width: 100%;
  &.is-vertical {
    .g-slider-runway {
      width: 6px;
      height: 100%;
      margin: 0 16px;
    }
    .g-slider-button {
      top: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &-runway {
    position: relative;
    width: 100%;
    height: 6px;
    margin: 16px 0;
    border-radius: 4px;
    background: $bg-color;
  }
  &-button {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: 4px solid $primary-color;
    left: 10px;
    &:hover {
      cursor: grab;
    }
  }
  &-bar {
      position: absolute;
      top: 0;
      height: 6px;
      background: $primary-color;
  }
}
</style>