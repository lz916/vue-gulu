<template>
    <div class="layout">
        <g-row>
            <g-col
                :span="4"
                :ipad="8"
                :narrow-pc="{ span: 2, offset: 2 }"
                :pc="10"
                :wide-pc="12"
            >
                <div class="content gray"></div>
            </g-col>
            <g-col
                :span="20"
                :ipad="16"
                :narrow-pc="{ span: 18, offset: 2 }"
                :pc="{ span: 12, offset: 2 }"
                :wide-pc="{ span: 12 }"
            >
                <div class="content gray-light"></div>
            </g-col>
        </g-row>
    </div>
</template>

<script>
import Col from '../../../../src/grid/col'
import Row from '../../../../src/grid/row'
export default {
    name: 'GridDemo1',
    components: {
        gCol: Col,
        gRow: Row
    }
}
</script>

<style lang="scss" scoped>
.layout {
    .g-row {
        margin-bottom: 20px;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 44px;
    }
    .gray {
        background: #99a9bf;
    }
    .gray-light {
        background: #e5e9f2;
    }
}
</style>