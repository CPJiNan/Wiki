# 🔍 UI 界面

## 菜单布局

``` yaml
Layout:
  - '#########'
  - '###I#G###'
  - '#########'
  - '####S####'
  - '#########'
  - '####C####'
```

``` yaml
'S':
  Type: 'BLAZE_POWDER'
  Data: 0
  Name: '§e点击镶嵌'
  Lore: [ ]
  Bind: "Socket"
```

图标 `S` 将被放在界面布局中第二行第四列的位置。

其中，`BLAZE_POWDER`
是 [XMaterial](https://github.com/TabooLib/taboolib/blob/dev/6.2.3/platform/platform-bukkit-impl/src/main/java/taboolib/library/xseries/XMaterial.java)
的物品材质名称。

## 物品图标

你可以通过设置 `Bind` 项为图标绑定插件预设的功能。

该项的格式为 `命名空间:操作名称` ，例如 `VitaGem:Socket` 。

其中，插件自带的操作可以省略 `VitaGem:`，例如 `Socket` 。

### VitaGem:Socket

_<font color=gray>来自 VitaGem 的原生绑定预设</font>_

``` yaml
'S':
  Type: 'BLAZE_POWDER'
  Data: 0
  Name: '§e点击镶嵌'
  Lore: [ ]
  Bind: "Socket"
```

镶嵌 `Gem` 槽位中的宝石到 `Item` 槽位中的物品上。

需要 UI 界面种类设置为 `Socket` 。

### VitaGem:Refresh

_<font color=gray>来自 VitaGem 的原生绑定预设</font>_

``` yaml
'@':
  Type: 'GRAY_STAINED_GLASS_PANE'
  Data: 5
  Name: '§a刷新宝石列表'
  Lore: [ ]
  Bind: "Refresh"
```

在 `Gem` 槽位中，展示 `Item` 槽位的物品上可拆卸的宝石。

其中，`属性 Lore 不完整` 或 `无法在当前界面拆卸` 的宝石不会被展示。

需要安装前置插件 `ItemTools`。

需要 UI 界面种类设置为 `Extract` 。

### VitaGem:Close

_<font color=gray>来自 VitaGem 的原生绑定预设</font>_

``` yaml
'C':
  Type: 'BARRIER'
  Data: 0
  Name: '§c关闭菜单'
  Lore: [ ]
  Bind: "Close"
```

关闭 UI 界面。