<template>
  <div class="swiper-container">
    <div class="header" v-if="!is_miniprogram" style="z-index: 999">
      <div class="k_img" @click.stop="back"></div>
      <!-- <new-app-header :backGroundTrans="false" title=""></new-app-header> -->
    </div>
    <template v-show="landingPageType != 1">
      <div
        v-for="(item, index) in this.ImgList"
        :key="item"
        class="swiper-wrapper"
      >
        <div class="swiper-slide" :id="index">
          <img
            v-lazy="item && item.indexOf('://') > 0 ? item : IMG_PATH + item"
            alt
          />
        </div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </template>
    <template v-show="landingPageType == 1">
      <div class="video_main" :class="is_miniprogram && isIos ? 'bg' : ''">
        <img
          src="../../imgs/common/play@2x.png"
          class="p_img"
          alt=""
          @click="doVideo"
          v-if="isPlay || firstClick"
          style="z-index: 9999"
        />
        <!-- <video src="https://cdn-res.00bang.cn/mp4/2020/09/12/023440089670.mp4" controls="controls"></video> -->

        <!-- <video
          v-show="isweixin"
          style="object-fit:fill"
          poster="https://cdn-df.00bang.cn/images/T1B0KTBTJv1RCvBVdK.jpg"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          playsinline="true"
          webkit-playsinline="true"
          x5-playsinline="true"
          id="iosVideo"
          preload="auto"
          controls
          :src="video"
        >
        </video> -->
        <video
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          playsinline="true"
          webkit-playsinline="true"
          x5-playsinline="true"
          id="myvideo"
          preload="true"
          @click="doVideo"
        >
          <source :src="video" type="video/mp4" />
        </video>
      </div>
    </template>
    <div class="bottom" @click="goDetail"></div>
    <div class="loading-box flex-column-start-center" v-if="loading">
      <div class="flex-column-center-center">
        <app-load-img :imgStyle="2" imgWidth="1.5" />
        <span style="font-size: 0.35rem">加载中...</span>
      </div>
    </div>
  </div>
</template>
<script>
import "video.js/dist/video-js.css";
import "swiper/css/swiper.css";
import Swiper from "swiper";
const AppLoadImg = () => import("@/components/AppLoadImg");
import "@/utils/flexible.js";
import wx from "jweixin-latest";
// import NewAppHeader from "@/components/NewAppHeader";
import { IMG_PATH, MINIPROGRAM_TOKEN_DETAILS } from "@/constants/config.js";

export default {
  data() {
    return {
      IMG_PATH,
      landingPageType: 0,
      unifyRetentionId: this.$route.query.unifyRetentionId,
      is_miniprogram: false,
      CarRun: false,
      isPlay: false,
      loading: false,
      isweixin: false,
      firstClick: true,
      isIos: false,
      video: "",
      videoList: [
        "https://cdn-res.00bang.cn/mp4/2020/09/12/023440089670.mp4",
        "https://cdn-res.00bang.cn/video/2020/08/14/200035074246.mp4",
        "http://cdn-sv.00bang.cn/8202016537be4f798613ec1d8de22891/dc77f474b2a2495ea8f41d545b6d994c-5456d705cfd07e668f702e78be66cb6f.mp4",
        "http://cdn-sv.00bang.cn/sv/4ed84166-174a14b48e1/4ed84166-174a14b48e1.mp4",
      ],
      ImgList: [
        // require("../../imgs/yearReport/false1.gif"),
        // require("../../imgs/yearReport/false2.gif"),
        // require("../../imgs/yearReport/false3.gif"),
        // require("../../imgs/yearReport/false4.gif"),
        // require("../../imgs/yearReport/false5.gif"),
        // require("../../imgs/yearReport/false6.gif"),
        // require("../../imgs/yearReport/false7.gif"),
        // require("../../imgs/yearReport/false8.gif"),
        // require("../../imgs/yearReport/false9.gif"),
      ],
      elevideo: "",
      current: 0,
    };
  },
  components: {
    // NewAppHeader,
    AppLoadImg,
  },
  mounted() {
    const that = this;
    that.elevideo = document.getElementById("myvideo");
    let ua = navigator.userAgent.toLowerCase();

    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      that.isIos = ua.match(/iPhone/i) ? true : false;
      that.firstClick = ua.match(/iPhone/i) ? true : false;
      that.isweixin = true;
      // that.elevideo = document.getElementById("iosVideo");
      wx.miniProgram.getEnv(async (res) => {
        if (res.miniprogram) {
          that.is_miniprogram = true;
          await that.setXiaocheng();
          that.getInfo();
        } else {
          that.getInfo();
          that.is_miniprogram = false;
        }
      });
    } else {
      that.getInfo();
      that.isweixin = false;
      that.firstClick= false;
      //   that.getVideo();
      that.is_miniprogram = false;
    }
  },
  methods: {
    back() {
      window.appAction("goBack");
    },
    initSwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        direction: "vertical",
        // observer: true,
        // pagination: {
        //   el: ".swiper-pagination",
        // },
      });
    },
    getVideo() {
      const that = this;
      let ua = navigator.userAgent.toLowerCase();
      that.videoplay();
      that.elevideo.addEventListener("canplaythrough", function () {
        //加载
        that.loading = false;
      });
      that.elevideo.addEventListener("waiting", function () {
        //加载
        that.loading = true;
      });
      that.elevideo.addEventListener("ended", function () {
        that.videoplay();
      });
    },
    videoplay() {
      const that = this;
      that.$nextTick(() => {
        that.video = that.videoList[that.current];
        // that.elevideo.innerHTML=`<source src=${this.videoList[this.current]} type="video/mp4">`
        that.elevideo.load();
        that.elevideo.play();
        that.current++;
        if (that.current >= that.videoList.length) {
          that.current = 0; //重新循环播放
        }
      });
    },
    doVideo() {
      if (this.elevideo.paused) {
        this.elevideo.play();
        this.isPlay = false;
      } else if (this.elevideo.play) {
        this.isPlay = true;
        this.elevideo.pause();
      }
      this.firstClick = false;
    },
    getInfo() {
      const that = this;
      that.loading = true;
      this.$http({
        method: "get",
        url: "/base/activity/unifyRetention/getLandingPages",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          unifyRetentionId: this.unifyRetentionId,
        },
      }).then((e) => {
        if (e.result) {
          this.unifyRetentionId = e.data.unifyRetentionId;
          this.landingPage = e.data.landingPage;
          this.landingPageType = e.data.landingPageType;
          if (e.data.landingPage == 1) {
            if (this.landingPageType == 1) {
              this.getVideo();
              this.videoList = e.data.landingContentList;
            } else {
              this.ImgList = e.data.landingContentList;
              that.$nextTick(() => {
                that.initSwiper();
              });
            }
          } else {
            this.goDetail();
          }
        }
        that.loading = false;
      });
    },
    goDetail() {
      this.$router.replace({
        path: "/activity/flowpage",
        query: {
          unifyRetentionId: this.unifyRetentionId,
          ...this.$route.query,
        },
      });
    },
    setXiaocheng() {
      const _this = this;
      const TOKEN_OBJ = {
        ...MINIPROGRAM_TOKEN_DETAILS,
        accessToken: _this.$route.query.accessToken,
        userId: _this.$route.query.userId || "",
        phoneNum: _this.$route.query.phoneNumber || "",
      };
      window.messageToken(JSON.stringify(TOKEN_OBJ));
    },
  },
  beforeDestroy(){
    const that = this;
    that.elevideo.pause();
  }
};
</script>

<style scoped lang="less">
.bg {
  background-image: url(https://file.baojunev.com/group1/default/20201006/13/51/6/loading.png);
  background-size: 6.56rem 8.54rem;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
}
.loading-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  align-items: center;
  justify-content: center;
  z-index: 99;
  > div {
    width: 2.2rem;
    height: 2.5rem;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}
.header {
  position: fixed;
  height: 0.93rem;
  width: 0.93rem;
  top: 0.35rem;
  left: 0.43rem;
  .k_img {
    height: 0.93rem;
    width: 0.93rem;
    z-index: 23;
    background-image: url(../../imgs/common/kback@2x.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }
}

/deep/ .mint-header.is-fixed {
  z-index: 222;
}
.bottom {
  height: 1.52rem;
  width: 1.52rem;
  border-radius: 50%;
  position: fixed;
  bottom: 2.38rem;
  right: 0.43rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../../imgs/common/know@2x.png);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 2;
}
.video_main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  .p_img {
    position: absolute;
    height: 1.04rem;
    width: 1.04rem;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
}

.rote {
  animation: rote 3s infinite linear;
}
@keyframes rote {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        // max-width: 100%;
      }
    }
  }
}
@keyframes dong {
  0% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(-0.1rem);
  }
  100% {
    transform: translateY(0.1rem);
  }
}
.down {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  left: 46%;
  bottom: 10%;
  animation: dong 1.6s infinite linear;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
