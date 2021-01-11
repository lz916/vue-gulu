<template>
    <div class="g-pagination">
        <span
            v-for="(page, index) in pages"
            :key="index"
            class="g-pagination-item"
            :class="{ active: currentPage === page }"
            @click="onClickPage(page)"
            >{{ page }}</span
        >
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    data() {
        let pages = [
            1,
            this.currentPage,
            this.totalPage,
            this.currentPage - 1,
            this.currentPage + 1,
            this.currentPage - 2,
            this.currentPage + 2,
        ]
        pages = pages.sort((a, b) => a - b)
        console.log(pages)
        return {
            pages,
        }
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
        }
    }
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
        }
    }
}
</style>