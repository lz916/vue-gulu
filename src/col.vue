<template>
    <div :class="colClassess" :style="colStyles">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GCol',
    props: {
        span: [Number, String],
        offset: [Number, String],
        iphone: {
            type: Object,
            validator(value) {
                const keys = Object.keys(value)
                const valid = true
                keys.forEach(key => {
                    if (!['offset', 'span'].includes(key)) {
                        valid = false
                    }
                })
                return valid
            }
        },
    },
    computed: {
        colClassess() {
            let { span , offset, iphone } = this
            return [
                'g-col',
                {[`g-col-${span}`]: span},
                {[`g-col-offset-${offset}`]: offset},
                {[`g-col-iphone-${iphone.span}`]: iphone && iphone.span},
                {[`g-col-iphone-offset-${iphone.offset}`]: iphone && iphone.offset},
            ]
        },
        colStyles() {
            const gutter = this.$parent.gutter
            return {
                'padding-left': `${(gutter / 2)}px`,
                'padding-right': `${(gutter / 2)}px`
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .g-col {
        border: 1px solid #ddd;
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
        @media (max-width: 578px) {
            $class-prefix: col-iphone;
            @for $n from 1 through 24 { 
                &.g-#{$class-prefix}-#{$n} { 
                    width: ($n / 24) * 100%;
                } 
            }
            $class-prefix: iphone-offset-;
            @for $n from 1 through 24 { 
                &.g-col-#{$class-prefix}-#{$n} { 
                    margin-left: ($n / 24) * 100%;
                } 
            }
        }
    }
</style>
