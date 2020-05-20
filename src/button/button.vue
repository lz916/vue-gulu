<template>
    <button :class="buttonClasses" :disabled="disabled" @click="click">
        <g-icon
            class="icon-loading"
            icon-name="loading"
            v-if="loading"
        ></g-icon>
        <g-icon :icon-name="icon" v-if="icon && !loading"></g-icon>
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
                { [`g-button-${this.type}`]: this.type },
                { [`g-button-${this.size}`]: this.size },
                { ['is-circle']: this.circle },
                { ['is-round']: this.round },
                { ['is-loading']: this.loading },
                { ['is-disabled']: this.disabled },
                { [`icon-${this.iconPosition}`]: this.iconPosition }
            ]
        }
    },
    props: {
        type: {
            // 按钮类型
            type: String,
            validator(value) {
                return value === 'primary' || value === 'danger'
            }
        },
        size: {
            // 按钮大小
            type: String,
            validator(value) {
                return value === 'small' || value === 'large'
            }
        },
        circle: Boolean,
        round: Boolean,
        icon: String, // icon名称
        iconPosition: {
            // icon位置
            type: String,
            validator(value) {
                return value === 'left' || value === 'right'
            }
        },
        loading: {
            // 是否是loading
            type: Boolean,
            default: false
        },
        disabled: Boolean // 是否禁用
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
$button-small-padding: 0 0.5em;
$button-large-height: 44px;
$button-defalut-text-color: #606266;
$button-default-border-color: #dcdfe6;
$button-primary-hover-color: #40a9ff;
$button-danger-hover-color: #ff7875;
$button-disabled-text-color: #c0c4cc;
$button-disabled-border-color: #ebeef5;
$button-disabled-bg-color: #f5f5f5;
$buttom-border-radius-round: 2rem;
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
    height: $button-height;
    color: $button-defalut-text-color;
    border: 1px solid $button-default-border-color;
    border-radius: $border-radius-base;
    padding: $button-padding;
    background-color: #fff;
    transition: all 0.3s;
    display: inline-flex;
    margin-right: 8px;
    align-items: center;
    vertical-align: middle;
    &:hover,
    &:active {
        outline: 0;
        box-shadow: none;
        cursor: pointer;
        border-color: $button-primary-hover-color;
        color: $button-primary-hover-color;
    }
    &[disabled] {
        color: $button-disabled-text-color;
        cursor: not-allowed;
        background-color: $button-disabled-bg-color;
        border-color: $button-disabled-border-color;
    }
    &-primary {
        background-color: $primary-color;
        color: #fff;
        border-color: $primary-color;
        &:hover {
            background-color: $button-primary-hover-color;
            border-color: $button-primary-hover-color;
            color: #fff;
        }
        .icon {
            fill: #fff;
        }
    }
    &-danger {
        background-color: $error-color;
        color: #fff;
        border-color: $error-color;
        &:hover {
            background-color: $button-danger-hover-color;
            border-color: $button-danger-hover-color;
            color: #fff;
        }
        .icon {
            fill: #fff;
        }
    }
    &-small {
        height: $button-small-height;
        padding: $button-small-padding;
    }
    &-large {
        width: 100%;
        height:$button-large-height;
        .content {
            width: 100%;
            text-align: center;
        }
    }
    &.icon-left {
        .content {
            order: 2;
        }
        .icon {
            order: 1;
            margin-right: 6px;
        }
    }
    &.icon-right {
        .content {
            order: 1;
        }
        .icon {
            order: 2;
            margin-left: 6px;
        }
    }
    &.is-circle {
        border-radius: 50%;
        padding: 1em;
        height: auto;
        width: auto;
    }
    &.is-round {
        border-radius: $buttom-border-radius-round;
    }
    &.is-loading {
        pointer-events: none;
        .icon {
            margin-right: 6px;
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

