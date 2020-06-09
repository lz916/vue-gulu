<template>
    <div :class="classes">
        <span class="g-input-prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </span>
        <!--前置icon-->
        <span class="g-input-prefix-icon" v-if="prefixIcon">
            <g-icon :icon-name="prefixIcon"></g-icon>
        </span>
        <template v-if="type !== 'textarea'">
            <input
                class="g-input-inner"
                :type="type"
                :placeholder="placeholder"
                :value="value"
                :disabled="disabled"
                v-bind="$attrs"
                :class="[
                    { [`${size}-input`]: size },
                    { 'g-input-inner-disabled': disabled }
                ]"
                @change="$emit('change', $event)"
                @input="$emit('change', $event)"
                @focus="$emit('focus', $event)"
                @blur="$emit('blur', $event)"
            />
        </template>
        <template v-else>
            <textarea
                class="g-textarea-inner"
                ref="textarea"
                :type="type"
                :placeholder="placeholder"
                :value="value"
                :disabled="disabled"
                v-bind="$attrs"
                @change="$emit('change', $event)"
                @input="$emit('change', $event)"
                @focus="$emit('focus', $event)"
                @blur="$emit('blur', $event)"
            ></textarea>
        </template>
        <span class="g-input-append" v-if="$slots.append">
            <slot name="append"></slot>
        </span>
        <!--后置icon-->
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
        return {}
    },
    computed: {
        classes() {
            return [
                { 'g-input': this.type !== 'textarea' },
                { 'g-textarea': this.type === 'textarea' },
                { 'g-input-group': this.$slots.prepend || this.$slots.append },
                { 'g-input-prefix': this.prefixIcon },
                { 'g-input-suffix': this.suffixIcon }
            ]
        }
    },
    props: {
        type: {
            type: String,
            defalut: 'text' // text和 textarea
        },
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
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        
    },
    mounted() {
        console.log(this)
    },
    components: {
        gIcon
    },
    methods: {
        calcTextareaHeight() {
            const style = window.getComputedStyle(this.$refs.textarea)
            console.log(style)
            // const { height } = this.$ref.textarea.getB
        }
    }
}
</script>

<style lang="scss">
@import '../var.scss';
$height: 32px;
$color: rgba(0, 0, 0, 0.65);
$large-height: 40px;
$small-height: 24px;
$append-bg-color: #fafafa;
$border-color: #d9d9d9;
.g-input {
    display: inline-block;
    font-size: 14px;
    width: 100%;
    position: relative;
    .large-input {
        height: $large-height;
    }
    .small-input {
        height: $small-height;
    }
    .g-input-inner-disabled {
        background-color: #f5f7fa;
        cursor: not-allowed;
    }
    &:focus {
        border-color: $primary-color;
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
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
    .g-input-prepend,
    .g-input-append {
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
        text-align: center;
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
    .g-input-prefix-icon,
    .g-input-suffix-icon {
        position: absolute;
        height: 100%;
        top: 0;
        line-height: 100%;
        font-size: 16px;
        display: flex;
        align-items: center;
        .icon {
            fill: $border-color;
        }
    }
    .g-input-prefix-icon {
        left: 10px;
    }
    .g-input-suffix-icon {
        right: 10px;
    }
}

.g-input-inner,
.g-textarea-inner {
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 4px 10px;
    color: $color;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
    transition: all 0.3s;
    font-size: 14px;
}
.g-input-inner {
    height: $height;
}
</style>
