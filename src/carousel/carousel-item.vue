<template>
    <div
        class="g-carousel-item"
        :class="{ [`g-carousel-item-${direction}`]: this.direction }"
    >
        <transition name="slide">
            <div class="g-carouse-item-content" v-if="visible">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    data() {
        return {
            visible: false,
            direction: 'horizontal'
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    created() {
        this.direction = this.$parent.direction
    }
}
</script>

<style lang="scss">
.g-carousel-item {
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s;
    }

    .slide-enter {
        transform: translateX(100%);
        // opacity: 0;
    }

    .slide-leave-to {
        transform: translateX(-100%);
        position: absolute;
        top: 0;
        left: 0;
    }
    &-vertical {
        .slide-enter {
            transform: translateY(100%);
            // opacity: 0;
        }
        .slide-leave-to {
            transform: translateY(-100%);
        }
    }
}
</style>