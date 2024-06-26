# 📎 settings.yml

> ❗ 不同版本间的配置文件可能会略有差异，请以实际生成配置为准

> 🚫 进行重要操作前，请先进行备份以防数据丢失

---

``` yaml
#     _    _              _ _                   _  #
#    / \  | | ____ _ _ __(_) |    _____   _____| | #
#   / _ \ | |/ / _` | '__| | |   / _ \ \ / / _ \ | #
#  / ___ \|   < (_| | |  | | |__|  __/\ V /  __/ | #
# /_/   \_\_|\_\__,_|_|  |_|_____\___| \_/ \___|_| #

##################################
#       AkariLevel  Config       #
##################################

# 其他版本的语言文件请参阅 AkariLevel/lang/settings 文件夹
# 插件Wiki: https://cp-jinan.feishu.cn/wiki/space/7334558867143049220
# For other language versions of the configuration files, please refer to the AkariLevel/lang/settings folder
# Plugin Docs: https://cp-jinan.feishu.cn/wiki/space/7334558867143049220

###########
# Options #
###########

# 全局设置
Options:
  # 配置文件版本
  Config-Version: 2
  # 检查版本更新
  Check-Update: true
  # 启用 bStats 统计
  Send-Metrics: true
  # 启用调试模式
  Debug: false

############
# Database #
############

# 数据存储设置
Database:
  # 存储方式 (JSON, CBOR, SQL)
  Method: JSON
  JSON:
    file: database.json
  CBOR:
    file: database.cbor
  SQL:
    host: localhost
    port: 3306
    user: root
    password: password
    database: minecraft
    table: akarilevel
  REDIS:
    enable: false
    host: localhost
    port: 6379
    # user: user
    # password: password

###########
#  Level  #
###########

# 等级设置
Level:
  # 满足要求自动升级
  Auto-Levelup: true
  # 达到最大等级后不再获取经验
  Exp-Limit: true
  # 将原版经验条与 AkariLevel 同步
  Vanilla-Exp-Bar: true
  # 原版经验转换为 AkariExp 的倍率 (类型为Double)
  # AkariExp 改变量 = 四舍五入至整数 ( 原版经验改变量 * Vanilla-Exp-Rate )
  # 当该数值为0.0时, 原版经验不会转化为AkariExp。
  # 当该数值为1.0时, 每获得1点原版经验, AkariExp将对应增加1点。
  # 当该数值为1.5时, 一次性获得1点原版经验时, AkariExp将对应增加2点；一次性获得10点原版经验时, AkariExp将对应增加15点。
  # 当该数值为2.0时, 每获得1点原版经验, AkariExp将对应增加2点。
  Vanilla-Exp-Rate: 0.0

##########
#  Hook  #
##########

# 挂钩设置
Hook:
  # MythicMobs 掉落拓展
  MythicMobs:
    # 是否启用
    Enable: true
    # 经验掉落名称
    Drop-Name: "AkariExp"
  # 属性插件经验加成拓展
  Attribute:
    # 是否启用
    Enable: true
    # 属性插件 (AttributePlus, SX-Attribute, OriginAttribute, AttributeSystem)
    Plugin: "AttributePlus"
    # 属性名称
    # SX-Attribute 的属性名称是其英文名而非 DiscernName (即默认应填写 "ExpAddition" 而非"经验增幅")
    # OriginAttribute 默认读取 ExpAddon 为经验加成属性, 无需填写 Name 配置项
    # AttributeSystem 的属性名称为 ExpAddition
    Name: "经验加成"
    # 经验计算公式 (JavaScript支持)
    # %exp% -> 获得的经验值数量
    # %attribute% -> 额外加成经验数量
    Formula: "%exp% * ( 1 + %attribute% / 100 )"
    # 所监听的 PlayerExpChange 来源
    Source:
      - "MYTHICMOBS_DROP_EXP"
      - "VANILLA_EXP_CHANGE"
  # PlaceholderAPI 变量拓展
  PlaceholderAPI:
    # 变量前缀
    Identifier: "akarilevel"
    # 经验条变量设置
    Progress-Bar:
      # %AkariLevel_ExpProgressBar%
      # 当前经验 / 升至下一级所需经验
      Exp:
        Empty: "□"
        Full: "■"
        Length: 10
      # %AkariLevel_LevelProgressBar%
      # 当前等级 / 最高等级
      Level:
        Empty: "□"
        Full: "■"
        Length: 10
```

---

## 配置注解

### Options

- Config-Version

`配置文件的版本，用于不同版本间配置的快捷迁移`

- Check-Update

`是否在插件有新版本时通知你 (是:true/否:false)`

- Send-Metrics

`是否将你服务器的部分信息上传至 bStats 用于 CPJiNan 的插件使用数据统计 (是:true/否:false)`

- Debug

`是否开启调试模式 (是:true/否:false)`
> 在调试模式下，插件将在控制台输出相关事件的详细信息，以便为插件测试提供帮助。

### Database

- Method

`存储方式 (JSON, CBOR, SQL)`
> 你可以在这里修改数据存储相关设置
>
>储存方式：JSON(默认), CBOR, SQL
>
>当配置项"type"为"SQL"时，"uri"项将不会被读取；
>
>反之，当配置项"type"为"JSON"或"CBOR"时，"sql"项将不会被读取。

- JSON `本地`

> JSON相关存储设置

- CBOR `本地`

> CBOR相关存储设置

- SQL `数据库`

> SQL相关存储设置

- REDIS `数据库`

> REDIS相关存储设置

### Level

- Auto-Levelup

```
当玩家未达到最高等级、拥有足够经验、符合目标等级条件时自动为玩家执行升级
否则需玩家手动执行/akarilevel levelup指令
```

- Exp-Limit
  ```玩家达到最大等级后，自动清空玩家所拥有的经验值（等级保持不变）```
- Vanilla-Exp-Bar
  ```是否使原版经验条与AkariLevel的等级和经验进度同步```

> 安装 AkariLevel 后，原版经验将被插件接管。
>
> 同步操作是单向的，仅由 AkariLevel 向原版同步。即此配置项仅决定原版经验槽是否显示插件等级。

> 开启时，原版等级将被修改为插件等级，原版经验进度将被修改为插件经验进度。
>
> 关闭时，原版等级与经验将固定不变。
>
> （该等级/经验进度是受其他插件影响的。如无其他插件修改玩家等级，玩家默认原版等级槽固定为0。）

> 无论此项是否开启，经验槽都不会受到原版经验变动影响。
>
> 即在进行附魔等消耗原版经验的操作时，玩家等级不会改变。
>
> 如需让获得的原版经验流入 AkariLevel 经验中，请参考配置项 Vanilla-Exp-Rate

- Vanilla-Exp-Rate

```原版经验转换为 AkariExp 的倍率 (类型为Double)```
> 该配置项不会改变插件经验机制，它的作用是每当玩家获取原版经验时，为玩家添加"AkariExp改变量"数额的插件经验。（如果该值为0，玩家经验将不会改变。）

> 计算公式：AkariExp 改变量 = 四舍五入至整数 ( 原版经验改变量 * Vanilla-Exp-Rate )

> 例子：
>
> 当该数值为0.0时, 原版经验不会转化为AkariExp。
>
> 当该数值为1.0时, 每获得1点原版经验, AkariExp将对应增加1点。
>
> 当该数值为1.5时, 一次性获得1点原版经验时, AkariExp将对应增加2点；一次性获得10点原版经验时, AkariExp将对应增加15点。
>
> 当该数值为2.0时, 每获得1点原版经验, AkariExp将对应增加2点。

### Hook

#### MythicMobs

- Drop-Name

```经验在MythicMobs中的掉落物名称 (默认为AkariExp)```

你可以在Mythicmobs中配置AkariExp经验的掉落：

``` yaml
Drops:
  - AkariExp 经验值数量 掉落几率
```

完整示例:

``` yaml
示例怪物:
  Type: ZOMBIE
  Display: '示例怪物'
  Health: 5
  Damage: 0
  Drops:
  - AkariExp 10 1
  - AkariExp 5 0.5
  Options:
    MovementSpeed: 0.1
    AlwaysShowName: true
    PreventOtherDrops: true
    MaxCombatDistance: 12
    FollowRange: 6
  Modules:
    ThreatTable: true
```

#### Attribute

> 截至 3.0 版本该功能仅用于获取AttributePlus等插件的"经验加成"属性

- Plugin

```使用的属性插件名称 (AttributePlus, SX-Attribute, OriginAttribute)```

- Name

```需要从对应插件中读取的属性名称```
> 💡 注意事项
> - AttributePlus 的属性名称是"属性默认名"而非"服务器属性名"

    >  (摘自AttributePlus Wiki，服务器属性名尚待测试)

> - SX-Attribute 的属性名称是其英文名而非 DiscernName

    >  (即默认应填写 "ExpAddition" 而非"经验增幅")

> - OriginAttribute 默认读取 ExpAddon 为经验加成属性, 无需填写 Name 配置项

- Formula

> 经验计算公式 (JavaScript支持)
>
> %exp% -> 获得的经验值数量
>
> %attribute% -> 额外加成经验数量
>
> 其中%exp%和%attribute%是插件内置变量，无法应用于PlaceholderAPI

- Source

> 所监听的 PlayerExpChange 来源
>
> 只有属于该列表中的来源才能受到经验加成

> 来源列表详见文档内 "开发 - 来源" 下内容

#### PlaceholderAPI

- Identifier

> PlaceholderAPI的变量前缀
>
>默认为 AkariLevel 即 %AkariLevel_变量名称%

- Progress-Bar

> 经验条变量设置