<template>
    <div class="demo-block" @mouseenter="tipTextVisible = true"
                            @mouseleave="tipTextVisible = false">
        <div class="source">
            <slot></slot>
        </div>
        <transition>
            <div ref="meta" class="meta">
                <!-- 描述 -->
                <div v-if="description" class="desc">
                    <slot name="desc"></slot>
                </div>
                <!-- 源代码 -->
                <div class="highlight" ref="highlight">
                    <span class="copy-code-btn" title="复制代码">
                        <i class="css-icon icon-copy"></i>
                    </span>
                    <slot name="codeText"></slot>
                </div>
            </div>
        </transition>
        <div class="demo-block-control" @click="codeVisible = !codeVisible">
            <i>123</i>
            <span v-if="tipTextVisible">
                {{ codeVisible ? '隐藏代码' : '隐藏代码' }}
            </span>
        </div>
    </div>
</template>

<script>
let uid = 0

// import ClipboardJS from 'clipboard';
export default {
    name: 'DemoPage',
    props: ['title', 'description'],
    data() {
        return {
            codeVisible: false,
            tipTextVisible: false,
            metaHeight: 0
        }
    },
    computed: {
        metaStyleObj() {
            
        }
    },
    mounted() {
        this.computedCodeHeight()
    },
    methods: {
        computedCodeHeight() {
            const { height } = this.$refs.highlight.getBoundingClientRect().height
            this.metaHeight = height
        }
    }
}
</script>

<style lang="scss">
@import '../../../../src/var.scss';
.demo-block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    .source {
        padding: 24px;
    }
    .meta {
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height 0.2s;
        height: 600px;
        .desc {
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            margin: 10px;
            background-color: #fff;
        }
        .highlight {
            pre {
                background-color: transparent;
            }
            .hljs {
                line-height: 1.8;
                font-size: 12px;
                padding: 18px 24px;
                background-color: #fafafa;
                border: 1px solid #eaeefb;
                margin-bottom: 25px;
                border-radius: 4px;
                -webkit-font-smoothing: auto;
                color: #3182bd;
            }
            .hljs-tag,
            .hljs-name {
                color: #3182bd !important;
            }
        }
    }
    .demo-block-control {
        border-top: 1px solid #eaeefb;
        height: 44px;
        box-sizing: border-box;
        background-color: #fff;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
        line-height: 44px;
        font-size: 14px;
        &:hover {
            color: $primary-color;
        }
    }
}
</style>
