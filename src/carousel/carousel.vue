<template>
    <div
        class="g-carousel"
        :class="{ [`g-carousel-${direction}`]: this.direction }"
    >
        <div class="g-carousel-window">
            <div class="g-carousel-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="g-carousel-indicator">
            <span
                v-for="item in children.length"
                :key="item"
                :class="{ active: item - 1 === activeIndex }"
                @click="onClickIndicator(item)"
            >
                <!-- {{ item }} -->
            </span>
        </div>
        <template v-if="direction === 'horizontal'">
            <div class="g-carousel-arrow g-carousel-arrow-left" @click="goLast">
                <g-icon iconName="left"></g-icon>
            </div>
            <div
                class="g-carousel-arrow g-carousel-arrow-right"
                @click="goNext"
            >
                <g-icon iconName="right"></g-icon>
            </div>
        </template>
        <template v-else>
            <div class="g-carousel-arrow g-carousel-arrow-top" @click="goLast">
                <g-icon iconName="down"></g-icon>
            </div>
            <div
                class="g-carousel-arrow g-carousel-arrow-bottom"
                @click="goNext"
            >
                <g-icon iconName="up"></g-icon>
            </div>
        </template>
    </div>
</template>

<script>
import gIcon from '../icon/icon'
export default {
    name: 'Carousel',
    data() {
        return {
            children: [],
            timer: null,
        }
    },
    props: {
        activeIndex: {
            type: Number,
            defalut: 0,
        },
        autoPlay: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 3000,
        },
        direction: {
            type: String,
            defalut: 'horizontal',
        },
    },
    components: {
        gIcon,
    },
    mounted() {
        this.children = this.$children.filter((item) => {
            return item.$options.name === 'CarouselItem'
        })
        this.updateChildren()
        if (this.autoPlay) {
            this.playAutomatic()
        }
    },
    updated() {
        this.updateChildren()
    },
    destroyed() {
        clearInterval(this.timer)
    },
    methods: {
        playAutomatic() {
            let activeIndex = this.activeIndex
            const interval = this.interval
            setInterval(() => {
                if (activeIndex >= this.children.length - 1) {
                    activeIndex = 0
                }
                // this.updateChildren()
                this.updateActiveIndex(activeIndex)
                activeIndex++
            }, interval)
        },
        updateChildren() {
            this.children.forEach((item, index) => {
                if (this.activeIndex === index) {
                    item.visible = true
                } else {
                    item.visible = false
                }
            })
        },
        onClickIndicator(index) {
            this.updateActiveIndex(index - 1)
        },
        updateActiveIndex(index) {
            this.$emit('update:activeIndex', index)
        },
        goNext() {
            const length = this.children.length
            const activeIndex =
                this.activeIndex === length - 1 ? 0 : this.activeIndex + 1
            this.updateActiveIndex(activeIndex)
        },
        goLast() {
            const length = this.children.length
            const activeIndex =
                this.activeIndex === 0 ? length - 1 : activeIndex - 1
            this.updateActiveIndex(activeIndex)
        },
    },
}
</script>

<style lang="scss">
@import '../var.scss';
.g-carousel {
    display: inline-block;
    border: 1px solid green;
    position: relative;
    &-wrapper {
        border: 1px solid red;
        display: flex;
        position: relative;
    }
    &-indicator {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        span {
            display: inline-block;
            width: 40px;
            height: 3px;
            background-color: $bg-color;
            margin-left: 10px;
            border-radius: 4px;
            cursor: pointer;
            &.active {
                background-color: red;
            }
        }
    }
    &-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $bg-color;
        border-radius: 50%;
        cursor: pointer;
        &-left {
            left: 20px;
        }
        &-right {
            right: 20px;
        }
    }
    &-vertical {
        .g-carousel-indicator {
            left: 90%;
            top: 50%;
            transform: translateY(-50%);
            span {
                width: 3px;
                height: 20px;
                display: block;
                margin-top: 10px;
            }
        }
        .g-carousel-arrow {
            left: 50%;
            transform: translatex(50%);
            &-top {
                top: 20px;
            }
            &-bottom {
                bottom: 20px;
            }
        }
    }
}
</style>