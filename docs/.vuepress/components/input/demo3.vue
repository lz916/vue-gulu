<template>
    <div>
        <div>
            <span>icon位置在前面：</span>
            <g-input
                placeholder="请输入搜索内容"
                :value="value"
                prefix-icon="search"
            ></g-input>
        </div>
        <div>
            <span>icon位置在后面：</span>
            <g-input
                placeholder="请输入日期"
                :value="value"
                suffix-icon="date"
            ></g-input>
        </div>
    </div>
</template>

<script>
import Input from '../../../../src/input/input'
export default {
    name: 'InputDemo1',
    components: {
        gInput: Input
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        margin-top: 10px;
    }
    .g-input {
        max-width: 300px;
    }
</style>