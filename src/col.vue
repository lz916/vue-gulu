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
        offset: [Number, String]
    },
    computed: {
        colClassess() {
            return [
                'g-col',
                {[`g-col-${this.span}`]: this.span},
                {[`g-col-offset-${this.offset}`]: this.offset},
            ]
        },
        colStyles() {
            console.log(this)
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
    @for $n from 1 through 24 { 
        .g-col-#{$n} { 
            width: ($n / 24) * 100%;
        } 
    }
     @for $n from 1 through 24 { 
        .g-col-offset-#{$n} { 
            margin-left: ($n / 24) * 100%;
        } 
    }
    .g-col {
        border: 1px solid #ddd;
        flex: 1;
    }
</style>
