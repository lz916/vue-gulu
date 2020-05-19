---
title: 按钮
---

# Button 按钮

<p>常用的操作按钮。</p>

### 基础用法
<!-- 
<common-demoCode title="" description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
    <button-demo1 slot="source" />
    <highlight-code slot="codeText" lang="vue">
        <template>这是测试</template>
    </highlight-code>
</common-demoCode> -->

<Common-Democode title="" description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
  <button-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div>
        <button-demo1 type="primary">Primary</button-demo1>
        <button-demo1>Default</button-demo1>
        <button-demo1 type="dashed">Dashed</button-demo1>
        <button-demo1 type="danger">Danger</button-demo1>
      </div>
    </template>
  </highlight-code>
</Common-Democode>
