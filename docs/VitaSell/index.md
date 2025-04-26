# 青芒出售 VitaSell

> 插件 Wiki 施工中。

**~~原价 18R~~ / 限时折扣价 12R** (2025/5/21 截止)

**插件购买请联系 2759278070。**

## 主要功能

1. **自定义出售界面**，支持物品在不同界面以不同价格出售
2. **自定义物品匹配规则**，支持 **Arim 物品匹配表达式**
3. **高拓展货币操作**，支持金钱/点券的给予与扣除，可使用 **权重/范围随机**
4. **Kether 脚本支持**，允许通过 Kether **设置出售条件或出售执行操作**
5. **快捷出售功能**，支持将背包内符合条件的物品 **一键放入出售界面**
6. **灵魂背包拓展**，兼容 **QFSoulBag**，允许 **一键出售灵魂背包中符合条件物品**
7. **关闭自动出售**，可设置 **关闭界面时自动出售** 或 **自动存入灵魂背包**

## 配置文件

### 物品出售规则相关配置

``` yaml
# 示例出售规则
Example:
  # 物品匹配规则 (Arim)
  Item: "name:&f示例材料;lore:contains(&a可回收)"
  # 限制出售界面 (留空则不指定界面)
  Table: ""
  # 出售条件 (Kether)
  Condition: [ ]
  # 出售操作
  Action:
    # 金钱 (正数给予,负数扣除)
    # 格式: "数值 权重"
    # 使用 "最小值~最大值" 获取范围内随机数值
    Money:
      - "-200~-100 25"
      - "-500 20~25"
      - "-1000 75"
    # 点券 (正数给予,负数扣除)
    Point:
      - "10 2"
      - "15~20 8"
    # 脚本
    Kether: [ ]
```

### 出售界面相关配置

``` yaml
# 示例界面
Example:
  # 界面标题
  Title: "§6出售界面"
  # 界面布局
  Layout:
    - '####S####'
    - '         '
    - '         '
    - '         '
    - '         '
    - '####P###C'
  # 关闭界面自动出售
  Auto-Sell: false
  # 图标
  Icon:
    '#':
      Type: 'GRAY_STAINED_GLASS_PANE'
      Data: 7
      Name: '§8'
      Lore: [ ]
    'C':
      Type: 'GRAY_STAINED_GLASS_PANE'
      Data: 14
      Name: '§c关闭菜单'
      Lore: [ ]
      Bind: "Close"
    'S':
      Type: 'YELLOW_STAINED_GLASS_PANE'
      Data: 4
      Name: '§e点击出售'
      Lore: [ ]
      Bind: "Sell"
    'P':
      Type: 'GREEN_STAINED_GLASS_PANE'
      Data: 5
      Name: '§a一键放入'
      Lore: [ ]
      Bind: "Put"
      Put-Match: "name:&f示例材料;lore:contains(&a可回收)"
```