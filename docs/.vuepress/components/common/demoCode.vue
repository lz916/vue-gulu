<template>
    <div class="demo-block">
        <div class="source">
            <slot></slot>
        </div>
        <div class="meta">
            <div class="desc">
                <slot name="desc"></slot>
            </div>
            <div class="highlight">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoBlock'
}
</script>

<style lang="scss">
.demo-block {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    .source {
        padding: 24px;
    }
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
        
    }
}
</style>