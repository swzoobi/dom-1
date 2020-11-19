# 手写 DOM 库

所有功能在全局对象 dom 中实现，实现增删改查操作

## 增

1. 创建节点

```
dom.create('<div><span>123</span></div>');
```

2. 在节点后面插入另一个节点

```
dom.after(node1,node2);
```

3. 在节点前面插入另一个节点

```
dom.before(node1,node2)
```

4. 在父节点中插入子节点

```
dom.append(parentNode,childNode)
```

5. 为子节点找一个父亲

```
dom.wrap(childNode,parentNode)
```

## 删

1. 删除节点

```
dom.remove(node)
```

2. 清空节点

```
dom.empty(node)
```

## 改

1. 属性

```
dom.attr(node,attrName,attrValue)  // 修改属性值
dom.attr(node,attrName)            // 查看属性值
```

2. 文本

```
dom.text(node,text)                // 修改文本
dom.text(node)                     // 查看文本
```

3. 标签

```
dom.html(node,html)                // 修改标签
dom.html(node)                     // 查看标签
```

4. 样式

```
dom.style(node,'color','red')       // 修改单个样式
dom.style(node,{'color':'red','width':'10px'}) // 修改多个样式
dom.style(node,'color')             // 查看某个样式
```

5. class

```
dom.class.add(node,className)       // 新增class
dom.class.remove(node,className)    // 移除class
dom.class.has(node,className)       // 查看是否有某个class
```

6. 事件

```
dom.on(node,eventName,fn)           // 绑定事件
dom.off(node,eventName.fn)          // 移除事件
```

## 查

1. 查看某个节点

```
dom.find('#id')[0]
```

2. 查看节点父亲

```
dom.parent(node)
```

3. 查看节点孩子

```
dom.children(node)
```

4. 查看节点的其他同级

```
dom.siblings(node)
```

5. 查看节点的前一个同级

```
dom.previous(node)
```

6. 查看节点的后一个同级

```
dom.next(node)
```

7. 遍历某个节点列表，并对节点进行操作

```
dom.each(nodeList,fn)
```

8. 查看节点所在同级中的位置

```
dom.index(node)
```
