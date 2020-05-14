<template>
    <div class="page-components">
        <h2>Nav导航菜单</h2>
        <p>为网站提供导航功能的菜单。</p>
        <div class="sub-content">
            <h3>顶栏</h3>
            <p>适用广泛的基础用法。</p>
            <div class="component-content">
                <div class="demo">
                    <nav-horizontal></nav-horizontal>
                </div>
                <div class="meta">
                    <div class="desc">
                        导航栏有水平和垂直两种默认，默认为水平模式，通过<code>mode</code>属性可以指定导航的模式，
                        通过<code>subNav</code>可以指定二级菜单，可以自定义设置<code>background-color(背景色)</code>,<code>text-color(文字颜色)</code>,<code
                            >active-text-color（选中的文字颜色）</code
                        >
                    </div>
                    <div class="highlight">
                        <highlight-code slot="codeText" lang="vue">
                            <div>
                                <template>
                                    <div>
                                        <g-nav :default-selected-keys.sync="navSelected">
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
                                        <div class="line"></div>
                                        <g-nav
                                            :default-selected-keys.sync="navSelected1"
                                            background-color="#545c64"
                                            text-color="#fff"
                                            active-text-color="#ffd04b"
                                        >
                                            <g-nav-item name="1-1">菜单1</g-nav-item>
                                            <g-nav-item name="1-2">菜单2</g-nav-item>
                                            <g-sub-nav name="1-3">
                                                <template slot="title">菜单3</template>
                                                <g-nav-item name="2-1-1">子菜单1</g-nav-item>
                                                <g-nav-item name="2-1-2">子菜单2</g-nav-item>
                                                <g-sub-nav name="2-1-3">
                                                    <template slot="title">子菜单3</template>
                                                    <g-nav-item name="3-1-1">孙子菜单2</g-nav-item>
                                                    <g-nav-item name="3-1-2">孙子菜单3</g-nav-item>
                                                    <g-nav-item name="3-1-3">孙子菜单4</g-nav-item>
                                                </g-sub-nav>
                                            </g-sub-nav>
                                        </g-nav>
                                    </div>
                                </template>
                                <script>
                                    export default {
                                        data() {
                                            return {
                                                navSelected: ['home'],
                                                navSelected1: ['1-1']
                                            }
                                        }
                                    }
                                </script>
                                <style lang="scss" scoped>
                                    .line {
                                        height: 1px;
                                        background-color: #e0e6ed;
                                        margin: 35px -20px;
                                    }
                                </style>
                            </div>
                        </highlight-code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from '../../../../src/nav/nav'
    import NavItem from '../../../../src/nav/nav-item'
    import subNav from '../../../../src/nav/sub-nav'

</script>

<style lang="scss">
@import '../../styles/common.scss';
</style>