<template>
    <div>
        <div class="demo">
            <g-button>默认按钮</g-button>
            <g-button type="primary">主要按钮</g-button>
            <g-button type="danger">危险按钮</g-button>
            <g-button disabled>禁用按钮</g-button>
        </div>
        <div class="demo">
            <g-button round>圆角按钮</g-button>
            <g-button type="primary" round>主要按钮</g-button>
            <g-button type="danger" round>危险按钮</g-button>
            <g-button disabled round>禁用按钮</g-button>
        </div>
        <div class="demo">
            <g-button icon="search" circle></g-button>
            <g-button circle icon="left"></g-button>
            <g-button type="primary" icon="settings" circle></g-button>
            <g-button type="danger" icon="right" circle></g-button>
        </div>
    </div>
</template>

<script>
import Button from '../../../../src/button/button'
import Icon from '../../../../src/icon/icon'
export default {
    components: {
        gButton: Button,
        gIcon: Icon
    }
}
</script>

<style lang="scss">
    .demo {
        margin-bottom: 20px;
    }
</style>