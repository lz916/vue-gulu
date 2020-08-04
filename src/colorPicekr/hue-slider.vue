<template>
    <div class="g-color-hue-slider">
        <div
            class="g-color-hue-slider-bar"
            @mousedown="mousedown"
            @mouseover="mouseover"
            ref="bar"
        ></div>
        <div
            class="g-color-hue-slider-thumb"
            ref="thumb"
            :style="thumbStyle"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'GHueSlider',
    data() {
        return {
            top: 0,
            initX: 0,
            initY: 0,
            currentX: 0,
            currentY: 0,
            isDown: false,
        }
    },
    computed: {
        thumbStyle() {
            return {
                top: `${this.top}px`,
            }
        },
    },
    methods: {
        mousedown(e) {
            console.log(e)
            console.log(this.$el)
            console.log(this.$el.offsetHeight)
            this.initX = e.clientX
            this.initY = e.clientY
            this.isDown = true
        },
        mouseover(e) {
            if (!this.isDown) {
                return false
            }
            console.log(`clientY: ${e.clientY}`)
            console.log(`initY: ${this.initY}`)
            this.top = e.clientY - this.initY
            console.log(e)
        },
    },
}
</script>

<style lang="scss">
.g-color-hue-slider {
    width: 12px;
    height: 180px;
    position: relative;
    display: inline-block;
    float: right;
    &-bar {
        height: 100%;
        background: linear-gradient(
            180deg,
            red 0,
            #ff0 17%,
            #0f0 33%,
            #0ff 50%,
            #00f 67%,
            #f0f 83%,
            red
        );
    }
    &-thumb {
        position: absolute;
        width: 100%;
        height: 4px;
        border: 1px solid #ddd;
        border-radius: 2px;
        top: 10px;
        left: 0;
        background: #fff;
        box-sizing: border-box;
        cursor: pointer;
    }
}
</style>
