<template>
    <div>
        <g-input
            placeholder="请输入内容"
            :value="value"
        >
            <template slot="append">
                <g-icon icon-name="search"></g-icon>
            </template>
        </g-input>
        <g-input
            placeholder="请输入内容"
            :value="value"
        >
            <template slot="prepend">
                https
            </template>
        </g-input>
    </div>
</template>

<script>
import Icon from '../../../../src/icon/icon'
import Input from '../../../../src/input/input'
export default {
    name: 'InputDemo1',
    components: {
        gInput: Input,
        gIcon: Icon
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .g-input-group {
        max-width: 300px;
        margin-bottom: 10px;
    }
</style>