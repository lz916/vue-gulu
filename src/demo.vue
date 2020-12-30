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
            <div style="margin-top: 20px">popover功能</div>
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
        <div style="margin-top: 20px">
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
            <div>cascader组件</div>
            <g-cascader :source="source"></g-cascader>
        </div>
        <div style="margin-top: 20px">
            <div>Nav导航组件</div>
            <g-nav :selected.sync="navSelected">
                <g-nav-item name="home">首页</g-nav-item>
                <g-sub-nav name="about">
                    <span slot="title">关于</span>
                    <g-nav-item name="1">11111</g-nav-item>
                    <g-nav-item name="2">22222</g-nav-item>
                    <g-nav-item name="3">33333</g-nav-item>
                </g-sub-nav>
                <g-nav-item name="contact">联系方式</g-nav-item>
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
        <test>
            <div slot="header">我是头部</div>
            <div slot="footer">我是底部</div>
        </test>
        <div style="margin-top: 20px">
            <g-color-picker></g-color-picker>
        </div>
        <div style="margin-top: 20px">
            <g-slider v-model="sliderValue"></g-slider>
        </div>
        <div style="margin-top: 20px">
            <g-slider :vertical="true" :height="200"></g-slider>
        </div>
        <div style="margin-top: 20px">
            <g-tabs1 :selected.sync="selected">
                <g-tab-pane1 title="标题1" name="1">内容1</g-tab-pane1>
                <g-tab-pane1 title="标题2" name="2">内容2</g-tab-pane1>
            </g-tabs1>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
// import GButton from './button'
import toast from './plugin.js'
import test from './test'
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
            navSelected: 'home',
            switchValue: true,
            sliderValue: 10,
            selected: '1',
            source: [
                {
                    name: '广东',
                    value: 1,
                    children: [
                        {
                            name: '深圳',
                            value: 11,
                            children: [
                                {
                                    name: '南山区',
                                    value: 111,
                                },
                                {
                                    name: '宝安区',
                                    value: 111,
                                },
                            ],
                        },
                        {
                            name: '东莞',
                            value: 11,
                            children: [
                                {
                                    name: '松山区',
                                    value: 111,
                                },
                            ],
                        },
                        {
                            name: '揭阳',
                            value: 11,
                            children: [
                                {
                                    name: '揭东',
                                    value: 111,
                                },
                                {
                                    name: '揭西',
                                    value: 111,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: '湖南',
                    value: 2,
                    children: [
                        {
                            name: '郴州',
                            value: 22,
                            children: [
                                {
                                    name: '资兴',
                                    value: 222,
                                },
                            ],
                        },
                        {
                            name: '长沙',
                            value: 22,
                            children: [
                                {
                                    name: '雨花区',
                                    value: 222,
                                },
                            ],
                        },
                        {
                            name: '常德',
                            value: 22,
                            children: [
                                {
                                    name: '澧县',
                                    value: 222,
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    },
    components: {
        test,
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
                        },
                    },
                    enableHtml: true,
                    position: 'bottom',
                }
            )
        },
        change(direction) {
            this.direction = direction
        },
    },
}
</script>

<style lang="scss">
div {
    font-size: 14px;
}
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
