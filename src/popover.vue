<template>
   <div class="g-popover" ref="popover" @click.stop="toggle">
       <div class="popover-content" v-if="visible" ref="popoverContent">
           <slot name="content"></slot>
       </div>
       <span class="popover-trigger" ref="popoverTrigger">
           <slot></slot>
       </span> 
   </div>
</template>

<script>
export default {
    name: 'GPopover',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible
            if (this.visible) {
                this.$nextTick(() => {
                    this.positionContent()
                    let eventHandle = () => {
                        this.visible = false
                        document.removeEventListener('click', eventHandle)
                    }
                    document.addEventListener('click', eventHandle)
                })
                // let eventHandle = () => {
                // }
            } else {
                console.log('关闭')
            }
        },
        eventHandle() {

        },
        positionContent() {
            const { popoverContent, popoverTrigger, popover } = this.$refs
            document.body.appendChild(popoverContent)
            const { left, top, height, width } = popoverTrigger.getBoundingClientRect()
            // const { height: height2 } = popoverContent.getBoundingClientRect()
            // const { height, width } = this.$refs.popoverContent.getBoundingClientRect()
            this.$refs.popoverContent.style.left = `${left + window.scrollX}px`
            this.$refs.popoverContent.style.top = `${top + window.scrollY}px`

        }
    }
}
</script>

<style lang="scss" scoped>
    @import './var.scss';
    .g-popover {
        display: inline-block;
    }
    .popover-content {
        position: absolute;
        padding: 1em 0.5em;
        border-radius: $border-radius-base;
        border: 1px solid $border-color-base;
        background: #fff;
        color: $text-color;
    }
</style>