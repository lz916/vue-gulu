<template>
    <div class="g-color-alpha-slider">
        <div class="g-color-alpha-slider-bar"></div>
        <div class="g-color-alpha-slider-thumb"></div>
    </div>
</template>

<script>
export default {
    name: 'GAlphaSlider',
}
</script>

<style lang="scss">
.g-color-alpha-slider {
    position: relative;
    width: 280px;
    height: 12px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
    &-bar {
        height: 100%;
        background: linear-gradient(to right, rgba(57, 164, 105, 0) 0%, rgb(57, 164, 105) 100%);
    }
    &-thumb {
        position: absolute;
        height: 100%;
        width: 4px;
        border: 1px solid #ddd;
        border-radius: 2px;
        top: 0px;
        right: 10px;
        background: #fff;
        box-sizing: border-box;
        cursor: pointer;
    }
}
</style>