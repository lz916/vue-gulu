<template>
    <div class="g-nav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GNav',
    data() {
        return {
            items: []
        }
    },
    provide() {
        return {
            root: this
        }
    },
    props: {
        mode: {
            type: String,
            default: 'horizontal'
        },
        backgroundColor: {
            type: String,
            defalut: '#fff'
        },
        textColor: {
            type: String
        },
        activeTextColor: {
            type: String
        },
        defaultSelectedKeys: {
            type: Array,
            default() {
                return []
            }
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.updateChildren()
        this.listenToChildren()
    },
    updated() {
        this.updateChildren()
    },
    methods: {
        // 之所以这样做事因为nav-item,可能会嵌套很多层，不好找
        addItems(vm) {
            this.items.push(vm)
        },
        // 更新字组件选中的状态
        updateChildren() {
            this.items.forEach(vm => {
                if (this.defaultSelectedKeys.indexOf(vm.name) > -1) {
                    vm.active = true
                } else {
                    vm.active = false
                }
            })
        },
        listenToChildren() {
            this.items.forEach(vm => {
                vm.$on('add:item', (name) => {
                    console.log(name)
                    if (this.multiple) {
                        if (this.defaultSelectedKeys.indexOf(name) < 0) {
                            const copySelected = JSON.parse(JSON.stringify(this.defaultSelectedKeys))
                            copySelected.push(name)
                            this.$emit('update:defaultSelectedKeys', copySelected)
                        }
                    } else {
                        console.log([name])
                        this.$emit('update:defaultSelectedKeys', [name])
                    }
                })
            })
        },
    }
}
</script>

<style lang="scss">
@import '../var.scss';
.g-nav {
    display: flex;
    font-size: 14px;
    border-bottom: 1px solid $border-color-base;
}
</style>