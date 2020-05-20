<template>
    <div>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
        <g-button-group>
            <g-button icon="left" type="primary">上一页</g-button>
            <g-button icon="right" icon-position="right" type="primary">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script>
import Button from '../../../../src/button/button'
import ButtonGroup from '../../../../src/button/buttonGroup'
export default {
    components: {
        gButton: Button,
        gButtonGroup: ButtonGroup
    }
}
</script>