# Icon 图标

常用icon图标集合

## 基本用法

直接通过类名`c-icon-refresh`来使用即可

:::demo

```html
<i class="c-icon-refresh"></i>
<i class="c-icon-like"></i>
<i class="c-icon-message-solid"></i>
```

:::

## 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'c-icon-' + name"></i>
      <span class="icon-name">{{'c-icon-' + name}}</span>
    </span>
  </li>
</ul>