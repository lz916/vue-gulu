<template>
    <div class="g-pagination">
        <span
            class="g-pagination-nav"
            :class="{ disabled: currentPage === 1 }"
            @click="onClickPage(currentPage - 1)"
        >
            <g-icon icon-name="left"></g-icon>
        </span>
        <template v-for="(page, index) in pages">
            <template v-if="page === currentPage">
                <span class="g-pagination-item active" :key="index">{{
                    page
                }}</span>
            </template>
            <template v-else-if="page === '...'">
                <span class="g-pagination-item separation" :key="index">
                    <g-icon icon-name="dot"></g-icon>
                </span>
            </template>
            <template v-else>
                <span
                    class="g-pagination-item"
                    :key="index"
                    @click="onClickPage(page)"
                    >{{ page }}</span
                >
            </template>
        </template>
        <span
            class="g-pagination-nav"
            :class="{ disabled: currentPage === totalPage }"
            @click="onClickPage(currentPage + 1)"
        >
            <g-icon icon-name="right"></g-icon>
        </span>
    </div>
</template>

<script>
import gIcon from '../icon/icon'
export default {
    name: 'Pagination',
    data() {
        return {}
    },
    computed: {
        pages() {
            let unique = (pages) => {
                const obj = {}
                pages.forEach((item) => {
                    obj[item] = true
                })
                return Object.keys(obj).map((item) => parseInt(item, 10))
            }
            return unique(
                [
                    1,
                    this.totalPage,
                    this.currentPage,
                    this.currentPage - 1,
                    this.currentPage + 1,
                    this.currentPage - 2,
                    this.currentPage + 2,
                ].sort((a, b) => a - b)
            )
                .filter((item) => item > 0 && item <= this.totalPage)
                .reduce((prev, current, index, array) => {
                    prev.push(current)
                    if (array[index + 1] && array[index + 1] - current > 1) {
                        prev.push('...')
                    }
                    return prev
                }, [])
        },
    },
    components: {
        gIcon,
    },
    props: {
        totalPage: {
            type: Number,
            default: 1,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        onClickPage(page) {
            this.$emit('update:currentPage', page)
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-pagination {
    &-item {
        min-width: 20px;
        padding: 2px 0;
        border: 1px solid $border-color-base;
        margin: 0 4px;
        border-radius: 4px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        &.active,
        &:hover {
            color: #fff;
            background-color: $primary-color;
            border-color: $primary-color;
            svg {
                fill: #fff;
            }
        }
        &.active {
            cursor: default;
        }
    }
    &-nav {
        width: 20px;
        height: 20px;
        background-color: $bg-color;
        display: inline-flex;
        justify-content: center;
        align-content: center;
        margin: 0 4px;
        cursor: pointer;
        &.disabled {
            cursor: not-allowed;
            svg {
                fill: #c0c4cc;
            }
        }
    }
}
</style>