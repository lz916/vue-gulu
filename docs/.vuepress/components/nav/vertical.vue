<template>
    <div>
        <g-nav :default-selected-keys.sync="navSelected" mode="vertical">
            <g-nav-item name="home">首页</g-nav-item>
            <g-nav-item name="about">关于</g-nav-item>
            <g-sub-nav name="contact">
                <template slot="title">联系方式</template>
                <g-nav-item name="qq">QQ</g-nav-item>
                <g-nav-item name="weixin">微信</g-nav-item>
                <g-sub-nav name="iphone">
                    <template slot="title">电话</template>
                    <g-nav-item name="yd">移动</g-nav-item>
                    <g-nav-item name="lt">联通</g-nav-item>
                    <g-nav-item name="dx">移动</g-nav-item>
                </g-sub-nav>
            </g-sub-nav>
        </g-nav>
        <div>
            <div style="margin-top: 20px">
                <g-nav
                    :default-selected-keys.sync="navSelected"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    mode="vertical"
                >
                    <g-nav-item name="home">首页</g-nav-item>
                    <g-nav-item name="about">关于</g-nav-item>
                    <g-sub-nav name="contact">
                        <template slot="title">联系方式</template>
                        <g-nav-item name="qq">QQ</g-nav-item>
                        <g-nav-item name="weixin">微信</g-nav-item>
                        <g-sub-nav name="iphone">
                            <template slot="title">电话</template>
                            <g-nav-item name="yd">移动</g-nav-item>
                            <g-nav-item name="lt">联通</g-nav-item>
                            <g-nav-item name="dx">移动</g-nav-item>
                        </g-sub-nav>
                    </g-sub-nav>
                </g-nav>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../../../../src/nav/nav'
import NavItem from '../../../../src/nav/nav-item'
import subNav from '../../../../src/nav/sub-nav'
export default {
    components: {
        gNav: Nav,
        gNavItem: NavItem,
        gSubNav: subNav
    },
    data() {
        return {
            navSelected: ['home']
        }
    }
}
</script>

<style>
</style>