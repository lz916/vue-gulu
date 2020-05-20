<template>
    <div>
        <g-button icon="search" icon-position="right">搜索</g-button>
        <g-button type="primary" icon="settings" icon-position="left"
            >设置</g-button
        >
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