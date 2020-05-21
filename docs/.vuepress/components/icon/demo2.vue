<template>
    <div class="icon-list">
        <div v-for="(item, index) in icons" class="item">
            <div class="item-icon">
                <g-icon :icon-name="item"></g-icon>
            </div>
            <div class="item-name">{{ item }}</div>
        </div>
    </div>
</template>

<script>
import Icon from '../../../../src/icon/icon'
export default {
    name: 'IconDemo2',
    data() {
        return {
            icons: [
                'left',
                'right',
                'down',
                'up',
                'share',
                'delete',
                'caret-top',
                'caret-bottom',
                'search',
                'date',
                'warning',
                'loading',
                'like',
                'download',
                'settings'
            ]
        }
    },
    components: {
        gIcon: Icon
    }
}
</script>

<style lang="scss">
    .icon-list {
        .item {
            width: 20%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 1em 0;
            flex-direction: column;
            border: 1px solid #ebebeb;
            margin-left: -1px;
            margin-top: -1px;
            cursor: pointer;
            color: #5e6d82;
            &:hover {
               color: #1890ff;
               .icon {
                   fill: #1890ff;
               }

            }
            .item-name {
                margin-top: .8em;
            }
        }
    }
</style>