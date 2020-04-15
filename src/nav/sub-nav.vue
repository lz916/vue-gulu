<template>
    <div
        class="g-sub-nav g-nav-item"
        :class="[
            { active },
            { 'g-sub-nav-vertical': root.mode === 'vertical' }
        ]"
        :style="styleObj"
        @mouseenter="mouseenter($event)"
        @mouseleave="mouseleave"
        v-click-outside="close"
    >
        <div class="g-sub-nav-label" @click="onClick">
            <slot name="title"></slot>
            <span class="g-sub-nav-icon" :class="{ open: isOpen }">
                <g-icon icon-name="up"></g-icon>
            </span>
        </div>
        <template v-if="root.mode === 'vertical'">
            <transition
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave"
                @after-leave="afterLeave"
            >
                <div
                    class="g-sub-nav-popover"
                    v-show="isOpen"
                    :style="popoverStyleObj"
                >
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div
                class="g-sub-nav-popover"
                v-show="isOpen"
                :style="popoverStyleObj"
            >
                <slot></slot>
            </div>
        </template>
    </div>
</template>

<script>
import ClickOutside from '../directive/click-outside'
import gIcon from '../icon/icon'
export default {
    name: 'GSubNav',
    data() {
        return {
            isOpen: false
        }
    },
    directives: { ClickOutside },
    inject: ['root'],
    props: {
        name: [String, Number],
        required: true
    },
    components: {
        gIcon
    },
    computed: {
        active() {
            const mode = this.root.mode
            if (mode === 'horizontal') {
                return this.root.namesPath.indexOf(this.name) > -1
            }
        },
        styleObj() {
            const textColor = this.root.textColor
            const activeTextColor = this.root.activeTextColor
            return {
                color: this.active
                    ? activeTextColor
                    : this.root.textColor
                    ? textColor
                    : '',
                'border-bottom-color': activeTextColor ? activeTextColor : ''
            }
        },
        popoverStyleObj() {
            const textColor = this.root.textColor
            const activeTextColor = this.root.activeTextColor
            const backgroundColor = this.root.backgroundColor
            return {
                color: this.active
                    ? activeTextColor
                    : this.root.textColor
                    ? textColor
                    : '',
                'background-color': backgroundColor ? backgroundColor : ''
            }
        }
    },
    mounted() {},
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        onClick() {
            this.isOpen = !this.isOpen
        },
        updateNamePath() {
            this.root.namesPath.unshift(this.name)
            if (this.$parent.updateNamePath) {
                this.$parent.updateNamePath()
            }
        },
        enter(el, done) {
            let { height } = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterEnter(el) {
            el.style.height = 'auto'
        },
        leave(el, done) {
            let { height } = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend', () => {
                done()
            })
        },
        afterLeave(el) {
            el.style.height = 'auto'
        },
        mouseenter(el) {
            if (this.root.mode === 'horizontal') {
                this.open()
                console.log(el.relatedTarget)
            }
        },
        mouseleave(el) {
            if (el.relatedTarget && el.relatedTarget.contains(el.target)) {
                return
            } else {
                this.close()
            }
            //    console.log('mouseleave')
            //    console.log(el)
        }
    }
}
</script>

<style lang="scss">
@import '../var.scss';
.g-sub-nav {
    position: relative;
    &-label {
        display: flex;
        align-items: center;
    }
    &-icon {
        color: $text-color-secondary;
        margin-left: 10px;
        font-size: 0.8em;
        transition: all 0.5s;
        &.open {
            transform: rotateX(180deg);
        }
    }
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 4px;
        min-width: 200px;
        background-color: #fff;
        box-shadow: $box-shadow-base;
        border-radius: $border-radius-base;
        transition: all 0.3s;
        z-index: 100;
        .g-nav-item {
            color: $text-color-secondary;
            padding: 1em;
            &.active {
                color: $text-color;
                &::after {
                    display: none;
                }
            }
        }
        .g-sub-nav-popover {
            position: absolute;
            left: 100%;
            top: 0;
            margin-left: 2px;
        }
    }
    &-vertical {
        .g-sub-nav-label {
            display: flex;
            justify-content: space-between;
        }
        .g-sub-nav-popover {
            position: static;
            background: none;
            min-width: 0;
            box-shadow: none;
        }
    }
}
</style>