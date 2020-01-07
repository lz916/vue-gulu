<template>
   <div class="g-popover" ref="popover" @click="onClickPopover">
       <div class="popover-content" v-if="visible" ref="popoverContent">
           <slot name="content"></slot>
       </div>
       <div class="popover-trigger" ref="popoverTrigger">
           <slot></slot>
       </div> 
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
        onClickDocument(e) {
            const { popoverContent, popoverTrigger, popover } = this.$refs
            if (popover && (popover === e.target || popover.contains(e.target))) return
            if (popoverContent && (popoverContent === e.target || popoverContent.contains(e.target))) return
            this.close()
        },
        close() {
            this.visible = false
            document.removeEventListener('click', this.onClickDocument)
        },
        open() {
            this.visible = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })
        },
        onClickPopover(event) {
            const popoverTrigger = this.$refs.popoverTrigger
            if (popoverTrigger.contains(event.target)) {
                if (this.visible) {
                    this.close()
                } else {
                    this.open()
                }
            }
        },
        positionContent() {
            const { popoverContent, popoverTrigger, popover } = this.$refs
            document.body.appendChild(popoverContent)
            const { left, top, height, width } = popoverTrigger.getBoundingClientRect()
            console.log(top)
            const { height: height2 } = popoverContent.getBoundingClientRect()
            console.log(height - height2)
            console.log(height)
            console.log(height2)
            this.$refs.popoverContent.style.left = `${left + window.scrollX}px`
            this.$refs.popoverContent.style.top = `${top + window.scrollY - height2 - 20}px`

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
        // border: 1px solid $border-color-base;
        background: #fff;
        color: $text-color;
        box-shadow: $box-shadow-base;
        &:before {
            position: absolute;
            content: "";
            left: 10px;
            bottom: 0;
            display: block;
            width: 12px;
            border: 6px solid transparent;
            border-left-color: #fff;
            border-top-color: #fff;
            box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
            // box-shadow: $box-shadow-base;
            transform: rotate(-45deg);
        }
    }
    .popover-trigger {
        display: inline-block;
    }
</style>