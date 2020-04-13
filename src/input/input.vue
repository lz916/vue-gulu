<template>
    <div :class="['g-input', {'g-input-group': $slots.prepend || $slots.append}, {'g-input-prefix': prefixIcon}, {'g-input-suffix': suffixIcon}]">
        <span class="g-input-prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </span>
        <span class="g-input-prefix-icon" v-if="prefixIcon">
            <g-icon :icon-name="prefixIcon"></g-icon>
        </span>
        <input class="g-input-inner"
               :placeholder="placeholder" 
               :value="value"
               :disabled="disabled"
               :class="[{[`${size}-input`]: size}, {'g-input-inner-disabled': disabled}]"
               @change="this.$emit('change', $event)"
               @input="this.$emit('change', $event)"
               @focus="this.$emit('focus', $event)"
               @blur="this.$emit('blur', $event)"/>
        <span class="g-input-append" v-if="$slots.append">
            <slot name="append"></slot>
        </span>
        <span class="g-input-suffix-icon" v-if="suffixIcon">
            <g-icon :icon-name="suffixIcon"></g-icon>
        </span>
    </div>
</template>

<script>
    import gIcon from '../icon/icon.vue'
    export default {
        name: 'gInput',
        data() {
            return {

            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'middle'
            },
            suffixIcon: {
                type: String,
                default: ''
            },
            prefixIcon: {
                type: String,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            console.log(this.$slots)
        },
        components: {
            gIcon
        }
    }
</script>

<style lang="scss">
    $height: 32px;
    $color: rgba(0,0,0,0.65);
    $large-height: 40px;
    $small-height: 24px;
    $append-bg-color: #fafafa;
    $border-color: #d9d9d9;
    .g-input {
        display: inline-block;
        font-size: 14px;
        width: 100%;
        position: relative;
        .g-input-inner {
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 4px 10px;
            color: $color;
            background-color: #fff;
            box-sizing: border-box;
            width: 100%;
            transition: all .3s;
            font-size: 14px;
            &.large-input {
                height: $large-height;
            }
            &.small-input {
                height: $small-height;
            }
            &.g-input-inner-disabled {
                background-color: #f5f7fa
            }
            &:focus {
                border-color: #40a9ff;
                box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
            }
        }
        &.g-input-group {
            display: table;
            .g-input-inner {
                display: table-cell;
                vertical-align: middle;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
        &.g-input-prefix {
            .g-input-inner {
                padding-left: 30px;
            }
        }
        &.g-input-suffix {
            .g-input-inner {
                padding-right: 30px;
            }
        }
        .g-input-prepend, .g-input-append {
            // height: 100%;
            padding: 4px 10px;
            background-color: $append-bg-color;
            border: 1px solid $border-color;
            color: $color;
            font-weight: normal;
            display: table-cell;
            vertical-align: middle;
            border-radius: 4px;
            font-size: 14px;
        }
        .g-input-prepend {
            border-right: 0px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .g-input-append {
            border-left: 0px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        .g-input-prefix-icon, .g-input-suffix-icon {
            position: absolute;
            height: 100%;
            top: 0;
            line-height: 100%;
            color: red;
            line-height: 40px;
            font-size: 16px;
        }
        .g-input-prefix-icon {
            left: 10px;
        }
        .g-input-suffix-icon {
            right: 10px;
        }
    }
</style>
