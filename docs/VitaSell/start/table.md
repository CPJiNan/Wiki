# 🔍 出售界面

## 界面布局

``` yaml
Layout:
  - '####S####'
  - '         '
  - '         '
  - '         '
  - '         '
  - '####P###C'
```

``` yaml
'S':
  Type: 'YELLOW_STAINED_GLASS_PANE'
  Data: 4
  Name: '§e点击出售'
  Lore: [ ]
  Bind: "Sell"
```

图标 `S` 将被放在界面布局中第一行第五列的位置。

其中，`YELLOW_STAINED_GLASS_PANE`
是 [XMaterial](https://github.com/TabooLib/taboolib/blob/dev/6.2.3/platform/platform-bukkit-impl/src/main/java/taboolib/library/xseries/XMaterial.java)
的物品材质名称。

## 菜单功能

### Auto-Sell

``` yaml
Example:
  ...
  Auto-Sell: true
```

关闭界面时自动出售界面中的物品。

无法出售的物品将被返回玩家背包。

如玩家背包已满，物品将会掉落在玩家脚下。

### QFSoulBag:Auto-Store

``` yaml
Example:
  ...
  QFSoulBag:Auto-Store: true
```

关闭界面时自动将界面中物品存入灵魂背包。

与 `Auto-Sell` 项同时启用时，优先级如下：

1. 将界面中可出售的物品一键出售。
2. 将无法出售的物品存入灵魂背包。
3. 将无法存入灵魂背包的物品存入玩家背包。
4. 将无法存入玩家背包的物品掉落在玩家脚下。

## 物品图标功能

你可以通过设置 `Bind` 项为图标绑定插件预设的功能。

该项的格式为 `命名空间:操作名称` ，例如 `VitaSell:Sell` 。

其中，插件自带的操作可以省略 `VitaSell:`，例如 `Sell` 。

### VitaSell:Sell

``` yaml
'S':
  Type: 'YELLOW_STAINED_GLASS_PANE'
  Data: 4
  Name: '§e点击出售'
  Lore: [ ]
  Bind: "Sell"
```

一键出售界面中所有空槽位中的物品。

### VitaSell:Put

``` yaml
'P':
  Type: 'GREEN_STAINED_GLASS_PANE'
  Data: 5
  Name: '§a一键放入'
  Lore: [ ]
  Bind: "Put"
  Put-Match: "name:&f示例材料;lore:contains(&a可回收)"
```

将玩家背包中符合条件的物品一键放入出售界面。

* **Put-Match:** 需执行一键放入操作物品的 Arim 匹配表达式。

### VitaSell:Close

``` yaml
'C':
  Type: 'GRAY_STAINED_GLASS_PANE'
  Data: 14
  Name: '§c关闭菜单'
  Lore: [ ]
  Bind: "Close"
```

关闭出售界面。

### QFSoulBag:Store

_<font color=gray>来自灵魂背包插件 QFSoulBag 的绑定预设</font>_

``` yaml
'S':
  Type: 'GREEN_STAINED_GLASS_PANE'
  Data: 5
  Name: '§a存入灵魂背包'
  Lore: [ ]
  Bind: "QFSoulBag:Store"
```

将出售界面中的物品一键存入灵魂背包。

### QFSoulBag:Put

_<font color=gray>来自灵魂背包插件 QFSoulBag 的绑定预设</font>_

``` yaml
'P':
  Type: 'GREEN_STAINED_GLASS_PANE'
  Data: 5
  Name: '§a一键放入'
  Lore: [ ]
  Bind: "QFSoulBag:Put"
  Put-Match: "name:&f示例材料;lore:contains(&a可回收)"
```

将灵魂背包中符合条件的物品一键放入出售界面。

* **Put-Match:** 需执行一键放入操作物品的 Arim 匹配表达式。