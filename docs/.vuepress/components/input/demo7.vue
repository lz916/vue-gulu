<template>
    <div>
        <g-input
            placeholder="请输入内容"
            :value="value"
            :autosize="{
                minRows: 1,
                maxRows: 7
            }"
            type="textarea"
        ></g-input>
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

<style lang="scss"></style>