<template>
    <div>
        <g-button type="primary" :loading="true">加载中</g-button>
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