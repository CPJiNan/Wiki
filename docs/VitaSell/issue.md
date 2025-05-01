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

# Q3: 如何设置随机出售价格？

A3: 使用 `最小值~最大值` 在指定范围内生成随机数，例如：

``` yaml
Money:
  - "-200~-100 25"
  - "-500 20~25"
  - "-1000 75"
```

其中 `-200~-100 25` 表示：

* 有 `25 / (25 + 25 + 75) = 1/5 = 20%` 到 `25 / (25 + 20 + 75) = 5/24 ≈ 21%` 的概率随机扣除玩家 `100` 到 `200` 的金币。

此外，范围随机也支持 `负数~正数` 的格式。出售时将会对整个界面的物品一起结算，正数代表给予、负数代表扣除。