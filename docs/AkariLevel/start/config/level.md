# 🚲 level.yml

> ❗ 不同版本间的配置文件可能会略有差异，请以实际生成配置为准

> 🚫 进行重要操作前，请先进行备份以防数据丢失

---

``` yaml
# 示例等级组
Example:
  # 展示名称
  Display: "示例等级组"
  # 来源设置
  Source:
    # 监听的经验来源
    # - "VANILLA_EXP_CHANGE"
    Subscribe:
      - "MYTHICMOBS_DROP_EXP"
  # 追踪设置
  # 当玩家追踪某个等级组时，将在原版经验条上显示其经验进度
  Trace:
    # 该等级组是否能被追踪
    Enable: true
    # 追踪该等级组所需条件 (Kether支持, 每行返回值均为 true 时才可追踪)
    # Condition:
    #   - false
    Condition: [ ]
    # 追踪该等级组后执行的动作 (Kether支持)
    Action: [ ]
  # 等级设置
  Level:
    # 最高等级
    Max: 100
    # 满足要求自动升级
    Auto-Levelup: true
    # 达到最大等级后不再获取经验
    Exp-Limit: true
    # 关键等级设置
    # 只需对关键等级进行修改, 处于非关键等级时将自动读取上一个关键等级的信息
    Key:
      # 0 级等级设置
      0:
        # 等级名称
        # %level% -> 对应等级
        Name: "§8Lv.§b0"
        # 升至该等级所需经验 (JavaScript支持)
        # %level% -> 对应等级
        Exp: "0"
        # 升至该等级所需条件 (Kether支持, 每行返回值均为 true 时才可升级)
        # Kether动作列表 https://kether.tabooproject.org/list.html
        # Condition:
        #   - "permission akarilevel.default"
        Condition: [ ]
        # 升级后执行的动作 (Kether支持)
        # Action:
        #   - command inline "give {{sender}} apple 1" as op
        Action: [ ]
      # 1 级 - 49 级(下一个关键等级之前的等级) 等级设置
      1:
        Name: "§8Lv.§b%level%"
        Exp: "%level% * 5 + 100"
        Condition: [ ]
        Action:
          - title "§e§lLevel UP!"
          - subtitle inline "{{ papi %AkariLevel_Example_LastLevelName% }} §7→ {{ papi %AkariLevel_Example_LevelName% }}" by 10 20 10
          - actionbar inline "§8[ §7{{ papi %AkariLevel_Example_Exp% }} §8/ §7{{ papi %AkariLevel_Example_NextLevelExp% }} §8]"
      # 50 级 - 100 级(满级) 等级设置
      50:
        Name: "§8Lv.§b%level%"
        Exp: "%level% * 10 + 100"
        Condition: [ ]
        Action:
          - title "§e§lLevel UP!"
          - subtitle inline "{{ papi %AkariLevel_Example_LastLevelName% }} §7→ {{ papi %AkariLevel_Example_LevelName% }}" by 10 20 10
          - actionbar inline "§8[ §7{{ papi %AkariLevel_Example_Exp% }} §8/ §7{{ papi %AkariLevel_Example_NextLevelExp% }} §8]"
```

---

## 配置注解

- Display

  `等级组的展示名`

  > Example 是示例配置中等级组的编辑名。

- Source

  `等级组监听的经验来源`

  `除使用命令获取外，当某经验来源处于列表中时，玩家才会获得该等级组的经验`


- Trace

  `等级组追踪相关设置`

    - Enable

      `是否允许该等级组被追踪`

    - Condition

      `等级组的追踪条件`

    - Action

      `等级组的追踪后执行的动作`

- Level

  `等级设置`

    - Max

      `最高等级`

    - Auto-Levelup

      `当玩家未达到最高等级、拥有足够经验、符合目标等级升级条件时自动为玩家进行升级`

      `否则需玩家手动执行/akarilevel levelup指令`

    - Exp-Limit

      `达到最大等级后不再获取经验`

    - Key

      `关键等级设置`

      `只需对关键等级进行修改, 处于非关键等级时将自动读取上一个关键等级的信息`

      `%level% -> 对应等级 (其中%level%是插件内置变量，无法应用于PlaceholderAPI)`

## 关键等级设置示例

``` yaml 
Max: 100 #该服务器允许玩家达到的最大等级为 100 级
```

``` yaml
Key:
  0:
    Name: "§8Lv.§b0"
    Exp: "0"
    Condition: [ ]
    Action: [ ]
```

> 0 级是一个关键等级，以上设置将仅应用于 0 级
>
> 该等级在变量 %AkariLevel_Example_LevelName% 中显示的名称为 Lv.0
>
> 升级至该等级不需要经验 (所需经验为0)
>
> 升级至该等级不需要满足任何条件
>
> 升级至该等级不会执行任何动作

``` yaml
1:
  Name: "§8Lv.§b%level%"
  Exp: "%level% * 5 + 100"
  Condition:
    - "permission akarilevel.default"
  Action:
    - title "§e§lLevel UP!"
    - subtitle inline "{{ papi %AkariLevel_Example_LastLevelName% }} §7→ {{ papi %AkariLevel_Example_LevelName% }}" by 10 20 10
    - actionbar inline "§8[ §7{{ papi %AkariLevel_Example_Exp% }} §8/ §7{{ papi %AkariLevel_Example_NextLevelExp% }} §8]"
```

> 1 级是一个关键等级，以上设置将应用于 1 ~ 49 级
>
>(49级 为下一个关键等级 50级 之前的等级)
>
>该等级在变量 %AkariLevel_Example_LevelName% 中显示的名称为 Lv.1 ~ Lv.49
>
>升级至该等级所需经验为 目标等级*5+100
> - 0级→1级 所需经验: 105
> - 1级→2级 所需经验: 110
> - ...
> - 48级→49级 所需经验: 345
> - 49级→50级 读取下一个关键等级 50级 的配置
>
> 升级至该等级需要玩家拥有 akarilevel.default 权限
>
> 升级至该等级会为玩家发送指定内容的 title、subtitle、actionbar 消息
>
> 更多条件及动作请见 Kether动作列表: https://kether.tabooproject.org/list.html

``` yaml
50:
  Name: "§8Lv.§b%level%"
  Exp: "%level% * 10 + 100"
  Condition:
    - "permission akarilevel.default"
  Action:
    - title "§e§lLevel UP!"
    - subtitle inline "{{ papi %akarilevel_lastlevelname% }} §7→ {{ papi %akarilevel_levelname% }}" by 10 20 10
    - actionbar inline "§8[ §7{{ papi %akarilevel_exp% }} §8/ §7{{ papi %akarilevel_nextlevelexp% }} §8]"
```

> 50 级是一个关键等级，以上设置将应用于 50 ~ 100 级
>
>(50级 后不再存在其他关键等级，故该设置应用于该关键等级 50级 至最高等级 100级)
>
>该等级在变量 %AkariLevel_Example_LevelName% 中显示的名称为 Lv.50 ~ Lv.100
>
>升级至该等级所需经验为 目标等级*10+100
> - 49级→50级 所需经验: 600
> - 50级→51级 所需经验: 610
> - ...
> - 98级→99级 所需经验: 1090
> - 99级→100级(最高等级) 所需经验: 1100

此外，如果您想使用十六进制颜色，请参考：

```
title inline "{{ color '&{#4C88E4}Hex&{#98F5F9}Color' }}" by 10 20 10
```