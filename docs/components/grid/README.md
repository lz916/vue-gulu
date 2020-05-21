---
title: grid布局
---

# grid 布局

<p>通过基础的 24 分栏，迅速简便地创建布局。</p>

### 基础布局

<p>使用单一分栏创建基础的栅格布局。</p>

<common-demoCode>
  <grid-demo1 />
  <highlight-code slot="codeText">
    <template>
      <div class="layout">
        <g-row>
            <g-col :span="24">
                <div class="content gray">100%</div>
            </g-col>
        </g-row>
        <g-row>
            <g-col :span="12">
                <div class="content gray">50%</div>
            </g-col>
            <g-col :span="12">
                <div class="content gray-light">50%</div>
            </g-col>
        </g-row>
        <g-row>
            <g-col :span="8">
                <div class="content gray">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray-light">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray">33.3%</div>
            </g-col>
        </g-row>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">使用单一的一组 row 和 col 栅格组件，就可以创建一个基本的栅格系统，所有列（col）必须放在 row 内,通过col组件的<code>span</code>属性可以自由的组合布局</div>
</common-demoCode>

### 分栏间隔

<p>分栏之间存在间隔</p>

<common-demoCode>
  <grid-demo2 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="layout">
        <g-row :gutter="20">
            <g-col :span="24">
                <div class="content gray">100%</div>
            </g-col>
        </g-row>
        <g-row :gutter="20">
            <g-col :span="12">
                <div class="content gray">50%</div>
            </g-col>
            <g-col :span="12">
                <div class="content gray-light">50%</div>
            </g-col>
        </g-row>
        <g-row :gutter="40">
            <g-col :span="8">
                <div class="content gray">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray-light">33.3%</div>
            </g-col>
            <g-col :span="8">
                <div class="content gray">33.3%</div>
            </g-col>
        </g-row>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">通过row组件中的<code>gutter</code>属性设置间隔的大小</div>
</common-demoCode>

### 分栏偏移

<p>支持偏移指定的栏数。</p>

<common-demoCode>
  <grid-demo3 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="layout">
        <g-row>
          <g-col :span="24" :offset="5">
              <div class="content gray">100%</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col :span="12">
              <div class="content gray">50%</div>
          </g-col>
          <g-col :span="10" :offset="2">
              <div class="content gray-light">50%</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col :span="8">
              <div class="content gray">33.3%</div>
          </g-col>
          <g-col :span="6" :offset="2">
              <div class="content gray-light">33.3%</div>
          </g-col>
          <g-col :span="4" :offset="4">
              <div class="content gray">33.3%</div>
          </g-col>
        </g-row>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">通过col组件中的<code>offset</code>属性设置偏移栏数</div>
</common-demoCode>

### 响应式布局

<p>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：<code>iphone</code>、<code>ipad</code>、<code>narrowPc</code>、<code>pc</code>、<code>widePc</code></p>

<common-demoCode>
  <grid-demo4 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="layout">
        <g-row>
          <g-col :span="24" :offset="5">
              <div class="content gray">100%</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col :span="12">
              <div class="content gray">50%</div>
          </g-col>
          <g-col :span="10" :offset="2">
              <div class="content gray-light">50%</div>
          </g-col>
        </g-row>
        <g-row>
          <g-col :span="8">
              <div class="content gray">33.3%</div>
          </g-col>
          <g-col :span="6" :offset="2">
              <div class="content gray-light">33.3%</div>
          </g-col>
          <g-col :span="4" :offset="4">
              <div class="content gray">33.3%</div>
          </g-col>
        </g-row>
      </div>
    </template>
  </highlight-code>
  <div slot="desc">通过col组件中的<code>offset</code>属性设置偏移栏数</div>
</common-demoCode>