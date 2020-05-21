---
title: 按钮
---

# Button 按钮

<p>常用的操作按钮。</p>

### 基础用法

<common-demoCode>
  <button-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
          <div class="demo">
              <g-button>默认按钮</g-button>
              <g-button type="primary">主要按钮</g-button>
              <g-button type="danger">危险按钮</g-button>
              <g-button disabled>禁用按钮</g-button>
          </div>
          <div class="demo">
              <g-button round>圆角按钮</g-button>
              <g-button type="primary" round>主要按钮</g-button>
              <g-button type="danger" round>危险按钮</g-button>
              <g-button disabled round>禁用按钮</g-button>
          </div>
          <div class="demo">
              <g-button icon="search" circle></g-button>
              <g-button circle icon="left"></g-button>
              <g-button type="primary" icon="settings" circle></g-button>
              <g-button type="danger" icon="right" circle></g-button>
          </div>
      </div>
    </template>
    <style lang="scss">
      .demo {
          margin-bottom: 20px;
      }
    </style>
  </highlight-code>
  <div slot="desc">
    使用<code>type</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。
  </div>
</common-demoCode>

### 禁用状态

<p>按钮不可用状态。</p>

<common-demoCode>
  <button-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
          <g-button disabled>普通按钮禁用</g-button>
          <g-button disabled round>禁用按钮</g-button>
          <g-button disabled circle>禁用</g-button>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">
    使用<code>type</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。
  </div>
</common-demoCode>

### 加载中状态

<p>要设置为 loading 状态，只要设置loading属性为true即可。</p>

<common-demoCode>
  <button-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <g-button type="primary" :loading="true">加载中</g-button>
      </div>
    </template>
  </highlight-code>
</common-demoCode>

### 不同尺寸

<p>Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>

<common-demoCode>
  <button-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
       <div>
        <g-button type="primary">常规大小</g-button>
        <g-button type="primary" size="large">大按钮</g-button>
        <g-button type="primary" size="small">小按钮</g-button>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">
    使用<code>size</code>属性来定义 Button的大小。
  </div>
</common-demoCode>

### 带图标按钮

<common-demoCode>
  <button-demo5 />
  <highlight-code slot="codeText" lang="vue">
    <template>
       <g-button icon="search" icon-position="right">搜索</g-button>
        <g-button type="primary" icon="settings" icon-position="left">设置</g-button
        >
    </template>
  </highlight-code>
  <div slot="desc">
    使用<code>icon</code>属性来定义icon名称，<code>iconPosition</code>指定icon的位置。
  </div>
</common-demoCode>

### 按钮组

<p>以按钮组的方式出现，常用于多项类似操作。</p>

<common-demoCode>
  <button-demo6 />
  <highlight-code slot="codeText" lang="vue">
    <template>
       <g-button icon="search" icon-position="right">搜索</g-button>
        <g-button type="primary" icon="settings" icon-position="left">设置</g-button
        >
    </template>
  </highlight-code>
  <div slot="desc">
    使用<code>g-button-group</code>嵌套按钮
  </div>
</common-demoCode>

### API

| 参数             | 说明                                           | 类型    | 默认值  |
| :--------------- | :--------------------------------------------- | :------ | :------ |
| `type`           | 类型，可选`primary`和`danger`                    | String  |   `-`   |
| `size`           | 尺寸，可选`large`和`small`                       | String  | `-`     |
| `loading`        | 是否加载中                                       | Bollean  | `false`|
| `circle`         | 是否是圆形                                       | Bollean  | `false`|
| `round`          | 是否是圆角                                       | Bollean  | `false`|
| `icon`           | icon名称                                         | String  | `-`    |
| `iconPosition`   | icon位置                                         | String  | `left` |
| `disabled`       | 是否禁用                                         | Bollean  | `false` |