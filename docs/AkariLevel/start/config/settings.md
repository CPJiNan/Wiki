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

# 插件文档: https://cpjinan.github.io/Wiki/

##################################
#       AkariLevel  Config       #
##################################

###########
# Options #
###########

# 全局设置
Options:
  # 配置文件版本
  Config-Version: 3
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
  # 使用玩家 UUID 进行存储
  UUID: false
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
  Default: ""
  # 是否在玩家每次进入服务器时重置追踪的等级组
  Auto-Reset: true

#############
# Attribute #
#############

# 属性插件经验加成
Attribute:
  # 是否启用
  Enable: false
  # 属性插件 (AttributePlus, SX-Attribute, OriginAttribute, AttributeSystem)
  Plugin: "AttributePlus"
  # 属性名称 (如属性插件为 OriginAttribute 则无需填写此项)
  # AttributePlus - 经验加成
  # SX-Attribute - ExpAddition
  # AttributeSystem - ExpAddition
  Name: "经验加成"
  # 经验计算公式 (JavaScript支持)
  # %exp% -> 获得的经验值数量
  # %attribute% -> 额外加成经验数量
  Formula: "%exp% * ( 1 + %attribute% / 100 )"
  # 所监听的 PlayerExpChangeEvent 来源
  Source:
    - "MYTHICMOBS_DROP_EXP"
    - "VANILLA_EXP_CHANGE"

####################
#  PlaceholderAPI  #
####################

# 变量设置
PlaceholderAPI:
  # 变量前缀
  Identifier: "akarilevel"
  # 经验条变量设置
  Progress-Bar:
    # 当前等级 / 最高等级
    Level:
      Empty: "□"
      Full: "■"
      Length: 10
    # 当前经验 / 升至下一级所需经验
    Exp:
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

  `是否在检测到插件有新版本时进行通知`


- Send-Metrics

  `是否启用插件使用数据统计`


- Debug

  `是否启用调试模式`

  ~~在调试模式下，插件将在控制台输出相关事件的详细信息，以便为插件测试提供帮助。~~

### Database

- UUID

  `是否启用 UUID 存储玩家数据`


- Method

  `存储方式 (JSON, CBOR, SQL)`

### Trace

- Vanilla

  `是否保留原版等级系统`

  `该功能开启后将不会取消原版经验变化事件，但需注意关闭等级组的追踪功能`

- Default

  `失去追踪焦点时返回的默认等级组，即获取不到玩家数据中 Trace 键值时追踪的等级组`

  `此项留空时，将不会追踪任何等级组`


- Auto-Reset

  `是否在玩家登入服务器时重置追踪焦点至默认等级组`

### Attribute

- Enable

  `是否启用经验加成属性`


- Plugin

  `使用的属性插件名称 (AttributePlus, SX-Attribute, OriginAttribute)`


- Name

  `需要从对应插件中读取的属性名称`
  > 💡 注意事项
  > - AttributePlus 的属性名称是"属性默认名"而非"服务器属性名"

      >  (摘自AttributePlus Wiki，服务器属性名尚待测试)
  > - SX-Attribute 的属性名称是其英文名而非 DiscernName

      >  (即默认应填写 "ExpAddition" 而非"经验增幅")
  > - OriginAttribute 默认读取 ExpAddon 为经验加成属性, 无需填写 Name 配置项

- Formula

  `经验计算公式 (JavaScript支持)`
  ```
  %exp% -> 获得的经验值数量
  %attribute% -> 额外加成经验数量
  
  其中%exp%和%attribute%是插件内置变量，无法应用于PlaceholderAPI
  ```

- Source

  `所监听的 PlayerExpChangeEvent 来源`

  `只有该列表中的来源才能得到经验加成`

  > 💡 注意事项
  >
  > 来源列表详见文档内 "开发 - 来源" 下内容

#### PlaceholderAPI

- Identifier

  `PlaceholderAPI的变量前缀`


- Progress-Bar

  `经验条变量设置`