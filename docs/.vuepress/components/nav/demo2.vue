<template>
    <div>
        <div class="demo">
            <div class="title">默认颜色</div>
            <g-nav :default-selected-keys.sync="navSelected" mode="vertical">
                <g-nav-item name="home">首页</g-nav-item>
                <g-nav-item name="about">关于</g-nav-item>
                <g-sub-nav name="contact">
                    <template slot="title">联系方式</template>
                    <g-nav-item name="QQ">QQ</g-nav-item>
                    <g-nav-item name="weixin">微信</g-nav-item>
                </g-sub-nav>
            </g-nav>
        </div>
        <div class="demo">
            <div class="title">自定义颜色</div>
            <g-nav
                :default-selected-keys.sync="navSelected1"
                background-color="#545c64"
                text-color="#fff"
                mode="vertical"
                active-text-color="#ffd04b"
            >
                <g-nav-item name="nav1">导航一</g-nav-item>
                <g-nav-item name="nav2">导航二</g-nav-item>
                <g-sub-nav name="nav3">
                    <template slot="title">导航三</template>
                    <g-nav-item name="nav4">子导航一</g-nav-item>
                    <g-nav-item name="nav5">子导航二</g-nav-item>
                </g-sub-nav>
            </g-nav>
        </div>
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
            navSelected: ['home'],
            navSelected1: ['nav1']
        }
    }
}
</script>

<style lang="scss" scoped>
    .demo {
       display: inline-block;
       margin-right: 20px;
       .title {
           margin-bottom: 20px;
           color: #999;
           text-align: center;
           font-size: 14px;
       }
    }
</style>