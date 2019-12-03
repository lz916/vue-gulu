<template>
    <div>
        <g-button type="primary">按钮</g-button>
        <g-row :gutter="20">
            <g-col :span="5">12</g-col>
            <g-col :span="5">34</g-col>
            <g-col :span="8">56</g-col>
            <g-col :span="6">78</g-col>
        </g-row>
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
</style>
