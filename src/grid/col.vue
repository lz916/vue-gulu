<template>
    <div class="g-col" :class="colClassess" :style="colStyles">
        <slot></slot>
    </div>
</template>

<script>
let validator = value => {
    let valid = true
    const isObj = typeof value === 'object'
    const isNumber = typeof value === 'number'
    if (isObj) {
        const keys = Object.keys(value)
        keys.forEach(key => {
            if (!['offset', 'span'].includes(key)) {
                valid = false
            }
        })
    } else if (!isObj && isNumber) {
        valid = true
    } else {
        valid = false
    }
    return valid
}
export default {
    name: 'GCol',
    props: {
        span: [Number, String],
        offset: [Number, String],
        iphone: {
            type: [Object, Number],
            validator
        },
        ipad: {
            type: [Object, Number],
            validator
        },
        narrowPc: {
            type: [Object, Number],
            validator
        },
        pc: {
            type: [Object, Number],
            validator
        },
        widePc: {
            type: [Object, Number],
            validator
        }
    },
    computed: {
        colClassess() {
            let { span, offset, ipad, narrowPc, pc, widePc } = this
            return [
                ...this.createClass({ span, offset }),
                ...this.createClass(ipad, 'ipad-'),
                ...this.createClass(narrowPc, 'narrow-pc-'),
                ...this.createClass(pc, 'pc-'),
                ...this.createClass(widePc, 'wide-pc-')
            ]
        },
        colStyles() {
            const gutter = this.$parent.gutter
            return {
                'padding-left': `${gutter / 2}px`,
                'padding-right': `${gutter / 2}px`
            }
        }
    },
    methods: {
        createClass(prop, str = '') {
            const isObj = typeof prop === 'object'
            const isNumber = typeof prop === 'number'
            if (!prop) {
                return []
            }
            let arr = []
            if (isObj) {
                if (prop.span) {
                    arr.push(`g-col-${str}${prop.span}`)
                }
                if (prop.offset) {
                    arr.push(`g-col-offset-${str}${prop.offset}`)
                }
            } else if (isNumber) {
                arr.push(`g-col-${str}${prop}`)
            }
            return arr
        }
    }
}
</script>

<style lang="scss" scoped>
.g-col {
    box-sizing: border-box;
    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.g-#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        &.g-col-#{$class-prefix}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }
    @media (min-width: 577px) and (max-width: 769px) {
        $class-prefix: col-ipad;
        @for $n from 1 through 24 {
            &.g-#{$class-prefix}-#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-ipad;
        @for $n from 1 through 24 {
            &.g-col-#{$class-prefix}-#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 769px) and (max-width: 992px) {
        $class-prefix: col-narrow-pc;
        @for $n from 1 through 24 {
            &.g-#{$class-prefix}-#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-narrow-pc;
        @for $n from 1 through 24 {
            &.g-col-#{$class-prefix}-#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
        $class-prefix: col-pc;
        @for $n from 1 through 24 {
            &.g-#{$class-prefix}-#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-pc;
        @for $n from 1 through 24 {
            &.g-col-#{$class-prefix}-#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (min-width: 1201px) {
        $class-prefix: col-wide-pc;
        @for $n from 1 through 24 {
            &.g-#{$class-prefix}-#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-wide-pc;
        @for $n from 1 through 24 {
            &.g-col-#{$class-prefix}-#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
}
</style>
