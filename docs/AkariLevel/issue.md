# ❓ 常见问题

## Q1: 为什么我修改了玩家等级后经验条没有变化？

A1: 请先追踪你想要在经验条上显示的等级组。

使用命令 `/AkariLevel Trace 等级组编辑名` 可以将指定等级组的升级进度显示在原版经验条上。

在 `settings.yml` 中，你可以设置玩家在进入服务器时默认追踪的等级组。
只需将 `Trace.Default` 配置项的值更改为指定等级组的编辑名（示例配置为Example）即可。

``` yaml
#########
# Trace #
#########

# 等级组追踪设置
Trace:
  # 是否保留原版等级系统
  # 该功能开启后将不会取消原版经验变化事件，但需注意关闭等级组的追踪功能
  Vanilla: false
  # 失去追踪焦点时返回的默认等级组 (此项留空则不会进行追踪)
  # Default: "Example"
  Default: "Example"
  # 是否在玩家每次进入服务器时重置追踪的等级组
  Auto-Reset: true
```

## Q2: 什么是“等级组编辑名”？怎么查看“等级组编辑名”？

A2: `等级组编辑名` 是等级组的唯一标识符。

它是 level 文件夹中每个配置文件第一级节点的名称。

例如，在名为 `CustomLevel.yml` 的配置文件中创建一个名为 `LevelGroup` 的等级组。

``` yaml
LevelGroup:
  Display: "等级组展示名"
  ...
```

该等级组的编辑名是 `LevelGroup` 而非 `CustomLevel` 或 `等级组展示名` 。

## Q3: 安装 AkariLevel 后 DS系列插件(星之插件) 的 UI 界面失效了怎么办？

A3: 请使用解压软件打开 `AkariLevel.jar`，删除其中的 `kotlin` 、`kotlin1922` 文件夹并保存。

## Q4: Kether 是什么？Kether 怎么以 OP 权限执行命令？

A4: Kether 是 TabooLib 框架中内置的脚本语言，由 海螺先生 创造。

可以轻松实现诸多功能（如：发送动作栏或标题信息、改变玩家游戏模式、获取变量等等），它还拥有良好的拓展
API，能让其他开发者更加轻松地开发出自己的动作语句。

想要在 Kether 中执行命令，你可以尝试像这样写：

``` yaml
command inline "give {{ sender }} apple 1" as op
```

1. `inline` 是内联脚本语句，可以在一条语句中执行另一条语句并返回结果。
2. `sender` 是一条语句，它会返回脚本执行者的名称。
3. `papi "%player_name%"` 是一条语句，它会返回变量 `%player_name%` 的值。
   你可以使用内联脚本在发送消息或执行命令时调用它，例如：
   ``` yaml
   title inline "玩家名称：{{ papi %player_name% }}"
   ```
4. 更多的脚本语句可以在 Kether 动作列表 https://kether.tabooproject.org/list.html 中被找到。

## Q5: Kether 如何使用十六进制颜色(HexColor)？

A5: 使用 `color` 语句处理文本，例如:

``` yaml
tell inline "{{ color '&{#4C88E4}Hex&{#98F5F9}Color' }}"
```

## Q6: Kether 如何判断条件执行不同语句？
A6: 使用 `if-else` 语句进行更复杂的逻辑判断，例如：

``` yaml
    Condition:
      - |
        if permission level.premium then {
          if xxx then {
            xxx
            true
          } else {
            xxx
            false
          }
        } else {
          if xxx then {
            xxx
            true
          } else {
            xxx
            false
          }
        }
```

## Q7: 设置升级经验时如何使用 JavaScript 脚本进行四舍五入？
A7: 使用 `toFixed()` 函数进行四舍五入运算，例如：

``` javascript
(12.5).toFixed()
(Math.sin(1)*100).toFixed()
```