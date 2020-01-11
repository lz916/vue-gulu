<template>
    <div class="g-popover" ref="popover" @click="onClickPopover">
        <div :class="classes" v-if="visible" ref="popoverContent">
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
    props: {
        position: {
            type: String,
            default: 'top',
            validator: val => {
                const positions = ['top', 'bottom', 'left', 'right']
                if (positions.indexOf(val) > -1) {
                    return true
                }
                return false
            }
        }
    },
    computed: {
        classes() {
            return ['popover-content', { [`position-${this.position}`]: true }]
        }
    },
    methods: {
        onClickDocument(e) {
            const { popoverContent, popoverTrigger, popover } = this.$refs
            if (popover && (popover === e.target || popover.contains(e.target)))
                return
            if (
                popoverContent &&
                (popoverContent === e.target ||
                    popoverContent.contains(e.target))
            )
                return
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
            const {
                left,
                top,
                height,
                width
            } = popoverTrigger.getBoundingClientRect()
            if (this.position === 'top') {
                popoverContent.style.left = `${left + window.scrollX}px`
                popoverContent.style.top = `${top + window.scrollY}px`
            } else if (this.position === 'bottom') {
                popoverContent.style.left = `${left + window.scrollX}px`
                popoverContent.style.top = `${top + window.scrollY + height}px`
            }
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
    &::before,
    &::after {
        position: absolute;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border: 10px solid transparent;
    }
    &.position-top {
        transform: translateY(-100%);
        margin-top: -10px;
        &::before {
            left: 10px;
            top: 100%;
            border-top-color: $border-color-base;
        }
        &::after {
            left: 10px;
            top: calc(100% - 1px);
            display: block;
            border-top-color: #fff;
        }
    }
}
.popover-trigger {
    display: inline-block;
}
</style>