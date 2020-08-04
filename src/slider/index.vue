<template>
    <div class="g-slider">
        <div class="g-slider-button" @mousedown="onbuttonDown"></div>
        <div class="g-slider-bar"></div>
        <div class="g-slider-runway"></div>
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
            currentX: 0,
        }
    },
    methods: {
        onbuttonDown() {},
        onDragStart(event) {
            this.dragging = true
            this.isClick = true
            this.startX = event.clientX
            
        },
        onDragging() {},
    },
}
</script>

<style lang="scss">
.g-slider {
    position: relative;
    &-runway {
        width: 200px;
        height: 6px;
        border-radius: 4px;
        background: red;
    }
    &-button {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #22aeff;
        top: 0;
        bottom: 0;
        left: 10px;
    }
}
</style>