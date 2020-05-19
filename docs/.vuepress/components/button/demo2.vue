<template>
    <div>
        <g-button round>默认按钮</g-button>
        <g-button type="primary" round>主要按钮</g-button>
        <g-button type="danger" round>危险按钮</g-button>
        <g-button disabled round>禁用按钮</g-button>
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