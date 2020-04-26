<template>
    <div class="g-switch-wrap" @click="toggle">
        <input
            :true-value="activeValue"
            :false-value="inactiveValue"
            type="checkbox"
            ref="input"
            class="g-switch-input"
        />
        <div
            class="g-switch-core"
            :class="{ 'g-switch-core-checked': isOn }"
            :style="styleObj"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'gSwitch',
    data() {
        return {
            localValue: false
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            // 打开时的颜色
            type: String,
            default: ''
        },
        inactiveColor: {
            // 关闭时的颜色
            type: String,
            default: ''
        },
        activeValue: {
            // 开启的值
            type: [String, Number, Boolean],
            default: false
        },
        inactiveValue: {
            // 关闭的值
            type: [String, Number, Boolean],
            default: false
        }
    },
    computed: {
        isOn() {
            return this.value === this.activeValue
        },
        styleObj() {
            return {
                'background-color': this.isOn
                    ? this.activeColor
                    : this.inactiveColor
            }
        }
    },
    created() {
        this.localValue = this.value
    },
    methods: {
        toggle() {
            this.$emit('change', this.getValue())
        },
        getValue() {
            return this.isOn ? this.inactiveValue : this.activeValue
        }
    },
    watch: {
        value(val) {
            this.localValue = val
        }
    }
}
</script>

<style lang="scss">
@import '../var.scss';
.g-switch-wrap {
    display: inline-flex;
    position: relative;
    .g-switch-input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
    }
    .g-switch-core {
        width: 40px;
        height: 20px;
        background: $disabled-color;
        border-radius: 10px;
        &::after {
            position: absolute;
            background-color: #fff;
            width: 16px;
            border-radius: 50%;
            content: '';
            height: 16px;
            left: 1px;
            top: 2px;
            transition: all 0.3s;
        }
        &-checked {
            background: $primary-color;
            &::after {
                left: 100%;
                margin-left: -17px;
            }
        }
    }
}
</style>