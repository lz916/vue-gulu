<template>
    <div class="layout">
        <g-row>
            <g-col :span="24">
                <div class="content gray">100%</div>
            </g-col>
        </g-row>
        <g-row>
            <g-col :span="12">
                <div class="content gray">50%</div>
            </g-col>
            <g-col :span="12">
                <div class="content gray-light">50%</div>
            </g-col>
        </g-row>
        <g-row>
            <g-col :span="8">
                <div class="content gray">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray-light">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray">33.3%</div>
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
            background: #99a9bf
        }
        .gray-light {
            background: #e5e9f2
        }
    }
</style>