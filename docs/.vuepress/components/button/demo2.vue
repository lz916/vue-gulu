<template>
    <div>
        <g-button disabled>普通按钮禁用</g-button>
        <g-button disabled round>禁用按钮</g-button>
        <g-button disabled circle>禁用</g-button>
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