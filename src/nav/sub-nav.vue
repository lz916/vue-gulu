<template>
    <div class="g-sub-nav">
        <div class="g-sub-nav-title" @click="onClick">
            <div class="g-sub-nav-label">
                <slot name="title"></slot>
            </div>
            <g-icon name="up"></g-icon>
        </div>
        <div class="g-sub-nav-popover" v-if="popoverVisible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import GIcon from '../icon/icon'
export default {
    name: 'GSubNav',
    data() {
        return {
            popoverVisible: false,
        }
    },
    components: {
        GIcon,
    },
    methods: {
        open() {
            this.popoverVisible = true
        },
        close() {
            this.popoverVisible = false
        },
        onClick() {
            this.open()
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-sub-nav {
    position: relative;
    padding: 0.8em 1.5em;
    cursor: pointer;
    font-size: 14px;
    &-popover {
        position: absolute;
        top: 100%;
        left: 0;
        padding: 1em 3em;
        margin-top: 2px;
        border: 1px solid $border-color-base;
        background-color: #fff;
    }
}
</style>