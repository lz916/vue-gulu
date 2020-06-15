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

### 自适应高度的文本域

<common-demoCode>
  <input-demo7 />
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

### Attributes

| 参数             | 说明                                           | 类型           |  默认值  |
| :--------------- | :---------------------------------------------| :------        | :------ |
| `value`          | 绑定值                                         | String/Number  |   `-`   |
| `type`           | 类型，可选`text`和`textarea`                    | String         |   `-`   |
| `disabled`       | 是否禁用                                        | Bollean        | `false` |
| `prefix-icon`    | 输入框前置icon                                  | String         |   `-`   |
| `suffix-icon`    | 输入框后置icon                                  | String         |   `-`   |
| `maxLength`      | 原生属性，最大输入长度                           | Number         |   `-`   |
| `minLength`      | 原生属性，最小输入长度                           | Number         |   `-`   |
| `size`           | 尺寸，可选`large`、`middle`、`small`            | String         |`middle` |
| `rows`           | 行数（仅在type为textarea的时候有效）             | String         |`middle` |
| `autosize`       | 自适应高度（仅在type为textarea的时候有效）        | Object         |   `-`   |


### Slots
| name             | 说明                                        
| :--------------- | :--------------------------------------------------|
| `prepend`          | 输入框前置内容（仅在type不为textarea的时候有效）     |
| `append`           | 输入框后置内容（仅在type不为textarea的时候有效）     |

### Events

| 事件名称          | 说明                                           | 回调参数          
| :--------------- | :---------------------------------------------| :------------|
| `change`         | 在input输入框是去焦点或者按回车键时触发           |    Event    |
| `input`          | 在input输入框输入时触发                         |    Event    |
| `blur`           | 在input输入框是去焦点时触发                      |   Event     |
| `focus`          | 在input输入框获得焦点时触发                      |    Event     |



