---
title: input组件用到的知识点
---

### $attrs

* 作用：父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。

* 举例说明：
    在input组件中，原生input有自己的属性，我们封装的input组件为了保留原声input的属性，可以不需要在input组件中声明prop   s属性，直接用**v-bind:attr绑定**

 ### v-model(在自定义组件上的使用)
v-model其实是一个语法糖，用来实现数据的双向绑定。

```html
    <input v-model="something"> 
```
仅仅是一个语法糖：
```html
    <input :value="something" @input="something = $event.target.value">
```

从上面可以看出，要让v-model生效，必须满足两个条件：
* 接收一个value属性
* 有input事件，并且在有写的value事，触发value事件

### 动态计算textarea的高度

原理：生成一个新的textarea,不停获取当前textarea的最新值，然后计算高度
这块的实现有个bug,之后又时间再处理。


