<template>
    <div>
        <g-button size="small">小按钮</g-button>
        <g-button>常规大小</g-button>
        <g-button size="large">大按钮</g-button>
    </div>
</template>

<script>
import Button from '../../../../src/button/button'
export default {
    components: {
        gButton: Button
    }
}
</script>

<style lang="scss">
    .g-button {
        margin-bottom: 10px;
    }
</style>