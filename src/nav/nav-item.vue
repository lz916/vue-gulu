<template>
    <div
        :class="['g-nav-item', { 'g-nav-item-active': active }]"
        @click="onClick"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GNavItem',
    data() {
        return {
            active: false,
        }
    },
    inject: ['root'],
    props: {
        name: {
           type: [String, Number],
           required: true 
        }
    },
    created() {
    //    if (this.root.selected === this.name) {
    //        this.active = true
    //    } else {
    //        this.active = false
    //    }
        this.root.addItem(this)
        console.log(this)
    },
    methods: {
        onClick() {
            console.log(1111)
            console.log(this)
            console.log(this.$emit)
            this.$emit('updateSelected', this.name)
            // this.$emit()
        }
    }
}
</script>

<style lang="scss">
@import '../var.scss';
.g-nav-item {
    padding: 0.8em 1.5em;
    cursor: pointer;
    font-size: 14px;
    // transition: all .3s;
    &-active {
        color: $primary-color;
        border-bottom: 2px solid $primary-color;
    }
}
</style>