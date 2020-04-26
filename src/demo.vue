<template>
    <div style="margin: 30px">
        <g-button type="primary">按钮</g-button>
        <g-button type="primary" icon="settings">设置</g-button>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-right"></use>
        </svg>
        <g-row>
            <g-col
                :span="4"
                :ipad="8"
                :narrow-pc="{ span: 2, offset: 2 }"
                :pc="10"
                :wide-pc="12"
            >
                <div class="col-wrap"></div>
            </g-col>
            <g-col
                :span="20"
                :ipad="16"
                :narrow-pc="{ span: 18, offset: 2 }"
                :pc="{ span: 12, offset: 2 }"
                :wide-pc="{ span: 12 }"
            >
                <div class="col-wrap1"></div>
            </g-col>
        </g-row>
        <!-- <div class="input-wrap">
            <g-input size="large" suffix-icon="riqi" placeholder="请选择日期">
            </g-input>
        </div> -->
        <button @click="showToast">点我</button>
        <div>
            <g-button type="primary" @click="change('horizontal')"
                >水平</g-button
            >
            <g-button type="primary" @click="change('vertical')">垂直</g-button>
            <g-tabs :activeName.sync="activeName" :direction="direction">
                <g-tab-head>
                    <g-tab-item name="first">新闻</g-tab-item>
                    <g-tab-item name="seconed">体育</g-tab-item>
                    <g-tab-item name="third">咨询</g-tab-item>
                </g-tab-head>
                <g-tab-body>
                    <g-tab-pane name="first">1222</g-tab-pane>
                    <g-tab-pane name="seconed">33333</g-tab-pane>
                    <g-tab-pane name="third">5555</g-tab-pane>
                </g-tab-body>
            </g-tabs>
        </div>
        <div>
            <div style="margin-top: 20px;">popover功能</div>
            <g-popover>
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向上按钮</g-button>
            </g-popover>
            <g-popover position="bottom">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向下按钮</g-button>
            </g-popover>
            <g-popover position="left">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向左按钮</g-button>
            </g-popover>
            <g-popover position="right">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向右按钮</g-button>
            </g-popover>
        </div>
        <div style="margin-top: 20px;">
            <g-popover trigger="hover">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向上按钮</g-button>
            </g-popover>
            <g-popover position="bottom" trigger="hover">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向下按钮</g-button>
            </g-popover>
            <g-popover position="left" trigger="hover">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向左按钮</g-button>
            </g-popover>
            <g-popover position="right" trigger="hover">
                <div slot="content">我是popover弹出的内容</div>
                <g-button type="primary">popover向右按钮</g-button>
            </g-popover>
        </div>
        <div style="margin-top: 20px">
            <!-- collapse功能 -->
            <g-collapse :activeName.sync="activeName1">
                <g-collapse-item title="collapse1" name="1">
                    <div>
                        collapse功能 collapse功能 collapse功能 collapse功能
                        collapse功能
                    </div>
                </g-collapse-item>
                <g-collapse-item title="collapse2" name="2">
                    <div>
                        collapse功能 collapse功能 collapse功能 collapse功能
                        collapse功能
                    </div>
                </g-collapse-item>
                <g-collapse-item title="collapse3" name="3">
                    <div>
                        collapse功能 collapse功能 collapse功能 collapse功能
                        collapse功能
                    </div>
                </g-collapse-item>
                <g-collapse-item title="collapse4" name="4">
                    <div>
                        collapse功能 collapse功能 collapse功能 collapse功能
                        collapse功能
                    </div>
                </g-collapse-item>
            </g-collapse>
            {{ this.activeName1 }}
        </div>
        <div style="margin-top: 20px">
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
        </div>
        <div style="margin-top: 20px">
            <g-nav
                :default-selected-keys.sync="navSelected"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
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
        <div style="margin-top: 20px">
            <div>开关</div>
            <g-switch :value.sync="switchValue"></g-switch>
            <g-switch
                :value.sync="switchValue"
                active-color="#13ce66"
                inactive-color="#ff4949"
            ></g-switch>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import GButton from './button'
import toast from './plugin.js'
Vue.use(toast)
export default {
    name: 'Demo',
    // components: {
    //     GButton
    // },
    data() {
        return {
            activeName: 'first',
            direction: 'horizontal',
            activeName1: ['1'],
            navSelected: ['home'],
            switchValue: true
        }
    },
    methods: {
        showToast() {
            this.$toast(
                '<strong>123</strong><p>我是段落我是段落我是段落我是段落我是段落我是段落我是段落我是段落我是段落我是段落</p>',
                {
                    isAutoClose: false,
                    closeButton: {
                        text: '我知道了',
                        callback: () => {
                            console.log(111111)
                        }
                    },
                    enableHtml: true,
                    position: 'bottom'
                }
            )
        },
        change(direction) {
            this.direction = direction
        }
    }
}
</script>

<style lang="scss">
:root {
    --button-height: 32px;
    $font-size-base: 14px;
    --button-bg: #fff;
    --button-color: rgba(0, 0, 0, 0.65);
    --button-border-color: #d9d9d9;
    --border-radius: 4px;
    --button-padding: 0 1em;
    --button-hover-color: #40a9ff;
    --button-hover-border-color: #40a9ff;
    --button-primary-bg: #40a9ff;
    --button-danger-bg: #f5222d;
    --button-small-height: 24px;
    --button-small-padding: 0 0.5em;
}
.col-wrap {
    color: #fff;
    height: 40px;
    background-color: #40a9ff;
    border-radius: 5px;
}
.col-wrap1 {
    color: #fff;
    height: 40px;
    background-color: #a2cdf1;
    border-radius: 5px;
}
</style>
