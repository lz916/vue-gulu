<template>
    <div>
        <g-input
            placeholder="请输入内容"
            v-model="value"
            :autosize="{
                minRows: 1,
                maxRows: 6
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