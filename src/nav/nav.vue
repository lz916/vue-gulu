<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GNav',
    props: {
        selected: [String, Number],
    },
    data() {
        return {
            items: [],
        }
    },
    provide() {
        return {
            root: this,
        }
    },
    mounted() {
        this.listenToChildren()
        this.updateChildren()
    },
    updated() {
        this.updateChildren()
    },
    methods: {
        addItem(vm) {
            this.items.push(vm)
        },
        updateChildren() {
            this.items.forEach(vm => {
                if (vm.name === this.selected) {
                    vm.active = true
                } else {
                    vm.active = false
                }
            })
        },
        listenToChildren() {
            this.items.forEach(vm => {
                console.log(`name:${vm.name}`)
                console.log(vm)
                vm.$on('updateSelected', (name) => {
                    this.$emit('update:selected', name)
                })
            })
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-nav {
    padding: 0 1em;
    display: flex;
    border-bottom: 1px solid $border-color-base;
}
</style>