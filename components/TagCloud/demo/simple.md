---
order: 0
title:
  zh-CN: 标签云
  en-US: Badge
---

## zh-CN

标签云是一套相关的标签以及与此相应的权重展示方式，一般典型的标签云有 30 至 150 个标签，而权重影响使用的字体大小或其他视觉效果。

## en-US

For simple state discrimination.

````jsx
import { TagCloud } from 'mhc-admin';

const tags = [];
for (let i = 0; i < 50; i += 1) {
  tags.push({
    name: `卖好车`,
    value: Math.floor((Math.random() * 50)) + 10,
  });
}

ReactDOM.render(
  <div>
  <TagCloud
    data={tags}
    height={80}
  />
  </div>
, mountNode);
````
