<template>
    <div>
        <g-button type="primary">按钮</g-button>
        <g-row>
          <g-col :span="4" :ipad="8" :narrow-pc="{span: 2, offset: 2}" :pc="10" :wide-pc="12">
              <div class="col-wrap"></div>
          </g-col>
          <g-col :span="20" :ipad="16" :narrow-pc="{span: 18, offset: 2}" :pc="{span: 12, offset: 2}" :wide-pc="{span: 12}">
            <div class="col-wrap1"></div>
          </g-col>
           
        </g-row>
        <!-- <g-row>
            <g-col>12</g-col>
            <g-col>34</g-col>
            <g-col>56</g-col>
            <g-col>78</g-col>
        </g-row> -->
    </div>
</template>

<script>
import GButton from "./button";
export default {
  name: "Demo",
  components: {
    GButton
  }
};
</script>

<style>
:root {
  --button-height: 32px;
  --font-size: 14px;
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
