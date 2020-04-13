<template>
    <div class="g-sub-nav g-nav-item" @mouseenter="open">
        <div class="g-sub-nav-label">
            <slot name="title"></slot>
            <span class="g-sub-nav-icon">
                <g-icon icon-name="right"></g-icon>
            </span>
        </div>
        <div class="g-sub-nav-popover" v-show="isOpen">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import gIcon from '../icon/icon'
export default {
    name: 'GSubNav',
    data() {
        return {
            isOpen: false
        }
    },
    components: {
        gIcon
    },
    methods: {
        open() {
            this.isOpen = true
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
            .g-nav-item {
                color: $text-color-secondary;
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
    }
</style>