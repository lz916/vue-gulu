<template>
    <div :class="sliderClass">
        <div class="g-slider-runway" :style="runwayStyle">
            <div
                class="g-slider-button"
                @mousedown="onbuttonDown"
                :style="buttonStyle"
            ></div>
            <div class="g-slider-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GSlider',
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
        }
    },
    props: {
        value: {
            type: Number,
            defalut: 0,
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        height: {
            type: Number,
        },
    },
    computed: {
        buttonStyle() {
            if (!this.vertical) {
                return {
                    left: `${this.translateX}px`,
                }
            }
            if (this.vertical) {
                return {
                    bottom: `${this.translateY}px`,
                }
            }
        },
        sliderClass() {
            return [
                'g-slider',
                {
                    'is-vertical': this.vertical,
                },
            ]
        },
        runwayStyle() {
            if (this.vertical) {
                return {
                    height: `${this.height}px`,
                }
            }
        },
    },
    methods: {
        onbuttonDown(event) {
            this.onDragStart(event)
            window.addEventListener('mousemove', this.onDragging)
            window.addEventListener('mouseup', this.onDraggend)
        },
        onDragStart(event) {
            this.dragging = true
            this.isClick = true
            this.startX = event.clientX
        },
        onDragging(event) {
            if (this.dragging) {
                this.isClick = false
                this.currentX = event.clientX
                if (this.translateX < 0) {
                    return
                }
                this.translateX = this.currentX - this.startX
            }
        },
        onDraggend(event) {
            if (this.dragging) {
                setTimeout(() => {
                    this.dragging = false
                }, 0)
            }
            window.removeEventListener('mousemove', this.onDragging)
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
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
            left: 50%;
            transform: translate(-50%, 0);
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
}
</style>