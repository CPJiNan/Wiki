# ❓ 常见问题

## Q1: 为什么服务器在安装插件后无法启动了？

A1: 插件未被激活时服务器将自动关闭，请检查授权码是否已被正确填写。

``` yaml
Options:
  QQ: "2759278070"
  Key: "XXXX-XXXX-XXXX-XXXX"
```

你可以在 `settings.yml` 中填写插件授权码。

如果你不清楚自己的授权码，请联系 QQ 2759278070。

## Q2: 如何使用 Arim 物品匹配规则？

A2: 详细用法请参考 [Arim 物品匹配工具](https://taboolib.feishu.cn/wiki/SRg4wO9q0iI3kbkdX79cHQRWncb) 文档。

这里作出一些简单举例：

``` yaml
# 精准匹配
name:&6示例出售材料

# 包含匹配
name:contains(出售材料)

# 开头匹配/结尾匹配
name:startswith(&6示例)
name:endswith(材料)

# 忽略颜色/忽略大小写
name:contains[uncolored](&e示例出售材料)
name:contains[lowercase](Material)

# 正则匹配
name:regex(^示例.*材料$)

# 全部满足/任意满足/全部不满足
name:all(startswith(&6示例),contains(材料))
name:any(startswith(&6示例),contains(材料))
name:not(startswith(&6示例),contains(材料))

# 名称匹配 / Lore 匹配 / 材质匹配 / 数量匹配
name:contains(出售材料)
lore:contains(&a可回收)
material:contains[lowercase](APPLE)
amount:>=5
```

