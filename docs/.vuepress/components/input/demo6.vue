<template>
    <div>
        <g-input placeholder="请输入内容" :value="value" size="large"></g-input>
        <g-input placeholder="请输入内容" :value="value"></g-input>
        <g-input placeholder="请输入内容" :value="value" size="small"></g-input>
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
    .g-input {
        margin-bottom: 10px;
        max-width: 200px;
    }
</style>