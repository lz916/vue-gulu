---
title: input 输入框
---

# input 输入框

<p>通过鼠标或者键盘</p>

### 基础用法

<common-demoCode>
  <input-demo1 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
        <g-input placeholder="请输入内容" :value="value"></g-input>
    	</div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>value</code>属性传值</div>
</common-demoCode>

### 禁用状态

<common-demoCode>
  <input-demo2 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
        <g-input placeholder="请输入内容" :value="value" disabled></g-input>
    	</div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>disabled</code>属性控制</div>
</common-demoCode>

### 带 icon 的输入框

<common-demoCode>
  <input-demo3 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
        <g-input placeholder="请输入内容" :value="value" disabled></g-input>
    	</div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>disabled</code>属性控制</div>
</common-demoCode>

### 文本域

<common-demoCode>
  <input-demo4 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
				<g-input
					placeholder="请输入内容"
					:value="value"
					:rows="3"
					type="textarea"
				></g-input>
			</div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>type</code>属性的值传入为textarea</div>
</common-demoCode>

### 复合型输入框

<p>可前置或后置元素</p>

<common-demoCode>
  <input-demo5 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
        <g-input
            placeholder="请输入内容"
            :value="value"
        >
            <template slot="append">
                <g-icon icon-name="search"></g-icon>
            </template>
        </g-input>
        <g-input
            placeholder="请输入内容"
            :value="value"
        >
            <template slot="prepend">
                https
            </template>
        </g-input>
    </div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>slot</code>来指定前置或者后置内容</div>
</common-demoCode>

### 尺寸

<p>支持三种不同类型的尺寸</p>

<common-demoCode>
  <input-demo6 />
  <highlight-code slot="codeText" lang="vue">
		<template>
			<div>
        <g-input placeholder="请输入内容" :value="value" size="large"></g-input>
        <g-input placeholder="请输入内容" :value="value"></g-input>
        <g-input placeholder="请输入内容" :value="value" size="small"></g-input>
    </div>
		</template>
		<script>
			export defalut {
				data() {
					return {
						value: ''
					}
				}
			}
		</script>
  </highlight-code>
	<div slot="desc">通过<code>size</code>属性来指定不同的尺寸</div>
</common-demoCode>
