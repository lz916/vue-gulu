<template>
    <button :class="buttonClasses"
            :disabled="disabled"
            @click="click">
        <g-icon class="icon-loading"
                icon-name="loading"
                v-if="loading"></g-icon>
        <g-icon :icon-name="icon"
                v-if="icon && !loading"
                :class="{}"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import gIcon from '../icon/icon'
    export default {
        name: 'gButton',
        data() {
            return {}
        },
        components: {
            gIcon
        },
        computed: {
            buttonClasses() {
                return [
                    'g-button',
                    {[`g-button-${this.type}`]: this.type},
                    {[`g-button-${this.size}`]: this.size},
                    {[`icon-${this.iconPosition}`]: this.iconPosition}
                ]
            }
        },
        props: {
            type: {
                type: String,
                validator(value) {
                    return value === 'primary' || value === 'danger'
                }
            },
            size: {
                type: String,
                validator(value) {
                    return value === 'small' || value === 'large'
                }
            },
            icon: String,
            iconPosition: {
                type: String,
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            disabled: Boolean
        },
        methods: {
            click() {
                this.$emit('click')
            }
        }
    }
</script>

<style lang="scss">
    @import '../var';
    $button-height: 32px;
    $button-padding: 0 1em;
    $button-small-height: 24px;
    $button-small-padding: 0 .5em;
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: $font-size-base;
        height:  $button-height;
        color: $primary-color;
        border: 1px solid $primary-color;
        border-radius: $border-radius-base;
        padding: $button-padding;
        background-color: #fff;
        transition: all 0.3s;
        display: inline-flex;
        margin-right: 8px;
        // margin-bottom: 12px;
        align-items: center;
        vertical-align: middle;
        &[disabled], &.g-button-primary[disabled], &.g-button-danger[disabled] {
            color: $primary-color;
            background-color: #f5f5f5;
            border-color: #d9d9d9;
            text-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            cursor: not-allowed;
        }
        &:hover {
            cursor: pointer;
            color: $primary-color;
            border-color: $primary-color;
        }
        &:active {
            cursor: pointer;
            color: $primary-color;
            border-color: $primary-color;
            outline: 0;
            box-shadow: none;
        }
        &.g-button-primary {
            background-color: $primary-color;
            color: #fff;
            border-color: $primary-color;
            .icon {
                fill: #fff;
            }
        }
        &.g-button-danger {
            background-color: $error-color;
            color: #fff;
            border-color: $error-color;
            .icon {
                fill: #fff;
            }
        }
        &.g-button-small {
            height: $button-small-height;
            padding: $button-small-padding;
        }
        &.g-button-large {
            width: 100%;
            .content {
                width: 100%;
                text-align: center;
            }

        }
        &.icon-left {
            .content {
                order: 2
            }
            .icon {
                order: 1;
                margin-right: 6px;
            }
        }
        &.icon-right {
            .content {
                order: 1
            }
            .icon {
                order: 2;
                margin-left: 6px;
            }
        }
        .icon {
            line-height: 1;
        }
        .icon-loading {
            animation: 2s loading linear infinite;
        }
    }
</style>

