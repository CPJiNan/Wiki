# 📋 出售规则

## 基础配置

``` yaml
Example:
  Item: "name:&f示例材料;lore:contains(&a可回收)"
  Table: ""
  Condition: [ ]
  Action:
    Money:
      - "-200~-100 25"
      - "-500 20~25"
      - "-1000 75"
    Point:
      - "10 2"
      - "15~20 8"
    Kether: [ ]
```

---

关于 `Item` 配置项中的 Arim
物品匹配规则，详细用法请参考 [Arim 物品匹配工具](https://taboolib.feishu.cn/wiki/SRg4wO9q0iI3kbkdX79cHQRWncb) 文档。

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

---

在 `Money`、`Point` 等配置项中，支持使用 `最小值~最大值` 在指定范围内生成随机数，例如：

``` yaml
Money:
  - "-200~-100 25"
  - "-500 20~25"
  - "-1000 75"
```

其中 `-200~-100 25` 表示：

* 有 `25 / (25 + 25 + 75) = 1/5 = 20%` 到 `25 / (25 + 20 + 75) = 5/24 ≈ 21%` 的概率随机扣除玩家 `100` 到 `200` 的金币。

此外，范围随机也支持 `负数~正数` 的格式。出售时将会对整个界面的物品一起结算，正数代表给予、负数代表扣除。

## 出售动作

### ItemTools:Item

_<font color=gray>来自 ItemTools 的出售动作</font>_

``` yaml
Example:
  ...
  Action:
    Item:
      - "Apple 1~5 0.8~1.0"
```

其中，`Apple` 是物品名称、`1~5` 是数量、`0.8~1.0` 是触发概率。

此外，如果你想给予玩家 `MythicMobs` 等插件的物品，请在物品 ID 前添加对应命名空间前缀，如 `MythicMobs:Apple` 。

需要注意的是，使用该功能也需安装前置插件 `ItemTools` 。

如果 `ItemTools` 的物品列表中没有出现带有 `MythicMobs:` 前缀的物品，请检查 `ItemTools/settings.yml`
中，对应插件的物品自动导入功能是否开启。

``` yaml
Item:
  Plugin:
    - MythicMobs
    ...
```

## 杂项设置

### VitaSell:Args

_<font color=gray>来自 VitaSell 的原生杂项设置</font>_

``` yaml
Example:
  ...
  Args: 
    - "出售该物品将随机获得 (\\d+) 到 (\\d+) 金币"
    - "出售该物品将随机获得 (\\d+) 到 (\\d+) 点券"
```

``` yaml
Money:
  - "{0}~{1} 1"
Point:
  - "{2}~{3} 1"
```

```
出售该物品将随机获得 10 到 20 金币
出售该物品将随机获得 30 到 40 点券
```

如果物品含有以上 Lore ，则会依次返回 `10`、`20`、`30`、`40` 作为参数。

`Args` 使用 `正则表达式` 匹配物品 Lore，并将捕获组字符串依次返回作为参数。这些参数在 `Condition`、`Money`、`Point`、`Kether`
等配置项中均可使用。

需要注意的是，物品 Lore 需含有 `Args` 中指定的所有参数，否则该物品将会被视为无法出售。