---
title: input组件用到的知识点
---

### $attrs

* 作用：父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

* 举例说明：
    在input组件中，原生input有自己的属性，我们封装的input组件为了保留原声input的属性，可以不需要在input组件中声明props属性，直接用**v-bind:attr绑定**

### v-model语法糖