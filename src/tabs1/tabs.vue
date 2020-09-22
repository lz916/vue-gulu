<template>
<div class="g-tabs">
    <div class="g-nav" ref="navContainer">
        <div v-for="(nav, index) in navData" :key="index" class="g-nav-item" :class="{ selected: selected === nav.name }" :ref="`nav-${index}`" @click="navClick(nav)">
            {{ nav.title }}
        </div>
        <div class="g-nav-line" ref="navLine"></div>
    </div>
    <slot></slot>
</div>
</template>

<script>
import tabPane from './tab-pane'
export default {
    name: 'GTabs',
    components: {
        tabPane,
    },
    data() {
        return {
            defaults: [],
            currentTabPane: '',
            activeIdx: 0,
        }
    },
    props: {
        selected: [String, Number],
    },
    created() {
        this.defaults = this.$slots.default
        this.navData = this.defaults.map((item, index) => {
            const props = item.componentOptions.propsData
            if (this.selected === props.name) {
                this.currentTabPane = item
                this.activeIdx = index
            }
            return {
                title: props.title,
                name: props.name,
            }
        })
    },
    mounted() {
        this.calcNavLinePosition()
    },
    methods: {
        navClick(nav) {
            console.log(nav)
            this.$emit('update:selected', nav.name)
            this.calcNavLinePosition()
        },
        calcNavLinePosition() {
            this.navData = this.defaults.map((item, index) => {
                const props = item.componentOptions.propsData
                if (this.selected === props.name) {
                    this.currentTabPane = item
                    this.activeIdx = index
                }
                return {
                    title: props.title,
                    name: props.name,
                }
            })
            const refName = `nav-${this.activeIdx}`
            this.$nextTick(() => {})
            const {
                width,
                top,
                left
            } = this.$refs[
                refName
            ][0].getBoundingClientRect()
            const left1 = this.$refs.navContainer.getBoundingClientRect().left
            this.$refs.navLine.style.width = `${width}px`
            this.$refs.navLine.style.left = `${left - left1}px`
        },
    },
    watch: {
        selected() {
            this.calcNavLinePosition()
        },
    },
}
</script>

<style lang="scss">
.g-nav {
    border-bottom: 1px solid #ddd;
    position: relative;

    &-item {
        padding: 0.5em 1em;

        &.selected {
            color: #22a4ff;
        }
    }

    &-line {
        position: absolute;
        left: 0;
        top: 100%;
        border: 2px solid #22a4ff;
        transition: all 0.25s;
    }
}
</style>
