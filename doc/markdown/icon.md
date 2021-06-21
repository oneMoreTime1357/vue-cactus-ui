# Icon 图标

常用icon图标集合

## 基本用法

直接通过类名`c-icon-add`来使用即可

:::demo

```html
<i class="c-icon-add"></i>
<i class="c-icon-ashbin"></i>
<i class="c-icon-close"></i>
```

:::

## 图标集合

<ul class="icon-list">
  <li v-for="item in $icon.glyphs" :key="item.name">
    <span>
      <i :class="$icon.css_prefix_text + item.name"></i>
      <span class="icon-name">{{$icon.css_prefix_text + item.name}}</span>
    </span>
  </li>
</ul>