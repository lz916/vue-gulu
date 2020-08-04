<template>
    <div class="g-color-dropdown">
        <div class="g-color-dropdown-main-wrap">
            <div class="g-color-sv-pane"></div>
            <g-hue-slider></g-hue-slider>
        </div>
        <g-alpha-slider></g-alpha-slider>
    </div>
</template>

<script>
import gHueSlider from './hue-slider'
import gAlphaSlider from './alpha-slider'
export default {
    name: 'GColorDropdown',
    components: {
        gHueSlider,
        gAlphaSlider
    }
}
</script>

<style lang="scss">
    .g-color-dropdown {
        width: 300px;
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 6px;
        .g-color-sv-pane {
            width: 280px;
            height: 180px;
            background-color: red;
            display: inline-block;
        }
    }
</style>