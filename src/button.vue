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
    import gIcon from './icon'
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
    @import './var';
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        color: var(--button-color);
        border: 1px solid var(--button-border-color);
        border-radius: var(--border-radius);
        padding: var(--button-padding);
        background-color: #fff;
        transition: all 0.3s;
        display: inline-flex;
        margin-right: 8px;
        // margin-bottom: 12px;
        align-items: center;
        vertical-align: middle;
        &[disabled], &.g-button-primary[disabled], &.g-button-danger[disabled] {
            color: var(--button-color);
            background-color: #f5f5f5;
            border-color: #d9d9d9;
            text-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
            cursor: not-allowed;
        }
        &:hover {
            cursor: pointer;
            color: var(--button-hover-color);
            border-color: var(--button-hover-border-color);
        }
        &:active {
            cursor: pointer;
            color: var(--button-hover-color);
            border-color: var(--button-hover-border-color);
            outline: 0;
            box-shadow: none;
        }
        &.g-button-primary {
            background-color: var(--button-primary-bg);
            color: #fff;
            border-color: var(--button-primary-bg);
            .icon {
                fill: #fff;
            }
        }
        &.g-button-danger {
            background-color: var(--button-danger-bg);
            color: #fff;
            border-color: var(--button-danger-bg);
            .icon {
                fill: #fff;
            }
        }
        &.g-button-small {
            height: var(--button-small-height);
            padding: var(--button-small-padding);
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

