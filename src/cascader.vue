<template>
    <div class="cascader">
        <div class="trggiver">
            <slot></slot>
        </div>
        <div class="popover">
                <cascader-item v-for="(item, index) in source" 
                               :key="index" 
                               :source-item="item"></cascader-item>
        </div>
    </div>
</template>

<script>
import cascaderItem from './cascader-item'
export default {
    name: 'gCascader',
    props: {
        source: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
        cascaderItem
    },
    data() {
        return {

        }
    }
}
</script>

