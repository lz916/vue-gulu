<template>
    <div class="g-upload">
        <template>
            <div class="g-upload-button" @click="onClickUpload">
                <slot></slot>
            </div>
        </template>
        <template>
            <slot name="tips"></slot>
        </template>
        <div ref="temp"></div>
        
    </div>
</template>

<script>
export default {
    name: 'Uploader',
    data() {
        return {}
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            default: 'GET',
        },
        action: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClickUpload() {
            const input = document.createElement('input')
            input.type = 'file'
            input.name = this.name
            this.$refs.temp.appendChild(input)
            input.click()
            let file
            input.addEventListener('change', (e) => {
                file = input.files[0]
                input.remove()
                const formData = new FormData()
                formData.append(this.name, file)
                let xhr = new XMLHttpRequest()
                xhr.open(this.method, this.action)
                xhr.onload = function () {
                    console.log(xhr.response)
                    console.log('onload')
                }
                xhr.send(formData)
            })
        },
    },
}
</script>

<style lang="scss"></style>