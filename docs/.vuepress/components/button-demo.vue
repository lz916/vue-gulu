<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button type="primary">主要按钮</g-button>
        <g-button type="danger">危险按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
    </div>
</template>

<script>
import Button from '../../../src/button/button'
export default {
    components: {
        gButton: Button
    }
}
</script>

<style>

</style>