# Nav 导航栏

<p>为网站提供导航功能的菜单。</p>

## 顶栏

<p>适用广泛的基础用法。</p>

 <common-demoCode>
  <nav-demo1 />
   <highlight-code slot="codeText" lang="vue">
    <template>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </template>
    <style></style>
   </highlight-code>
  </common-demoCode>

## 侧栏

<p>垂直菜单，可内嵌子菜单。</p>

 <common-demoCode>
  <nav-demo2 />
   <highlight-code slot="codeText" lang="vue">
    <template>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </template>
    <style></style>
   </highlight-code>
  </common-demoCode>

### Nav Attributes

| 参数          | 说明                                           | 类型          | 默认值   |
| :------------    | :--------------------------------------------- | :------------ | :------- |
| `mode`           | 类型                                         | String           | `horizontal`|
| `background-color`| 菜单的文字颜色                               | String           | `-`      |
| `text-color`     | 菜单的文字颜色                                | String         | `-`  |
| `active-ext-color` | 选中的菜单文字颜色                          | String        | `-`      |
| `default-selected-keys` | 默认选中的菜单值                        | String        | `-`      |
| `multiple`    | 是否支持多选                                   | Bollean        | `-`      |

### NavItem Attributes

| 参数          | 说明                                           | 类型          | 默认值   |
| :------------    | :--------------------------------------------- | :------------ | :------- |
| `name`           | 唯一标识（必填）                                       | String           | `horizontal`|

### SubNav Attributes

| 参数          | 说明                                           | 类型          | 默认值   |
| :------------    | :--------------------------------------------- | :------------ | :------- |
| `name`           | 唯一标识（必填）                                        | String           | `horizontal`|

