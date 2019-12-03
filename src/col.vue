<template>
    <div class="g-col">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GCol',
    props: {
        span: [Numer, String]
    }
}
</script>

<style lang="scss" scoped>
    @for $n from 1 through 50 { 
        .g-col-#{$n} { 
            width: (n / 24) * 100%;
        } 
    }
</style>
