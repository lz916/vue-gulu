<template>
    <div>
        <g-nav :default-selected-keys.sync="navSelected">
            <g-nav-item name="home">首页</g-nav-item>
            <g-nav-item name="about">关于</g-nav-item>
            <g-sub-nav name="contact">
                <template slot="title">联系方式</template>
                <g-nav-item name="QQ">QQ</g-nav-item>
                <g-nav-item name="weixin">微信</g-nav-item>
            </g-sub-nav>
        </g-nav>
    </div>
</template>

<script>
import Nav from '../../../../src/nav/nav'
import NavItem from '../../../../src/nav/nav-item'
import SubNav from '../../../../src/nav/sub-nav'
export default {
    name: 'NavDemo1',
    components: {
        gNav: Nav,
        gNavItem: NavItem,
        gSubNav: SubNav
    },
    data() {
        return {
            navSelected: ['home']
        }
    }
}
</script>

<style lang="scss">
</style>