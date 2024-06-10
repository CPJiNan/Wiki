# 🚲 level.yml
> ❗ 不同版本间的配置文件可能会略有差异，请以实际生成配置为准

> 🚫 进行重要操作前，请先进行备份以防数据丢失

---
``` yaml
#################################
#        Level  Settings        #
#################################

# 其他版本的语言文件请参阅 AkariLevel/lang/level 文件夹
# 插件Wiki: https://cp-jinan.feishu.cn/wiki/space/7334558867143049220
# For other language versions of the configuration files, please refer to the AkariLevel/lang/level folder
# Plugin Docs: https://cp-jinan.feishu.cn/wiki/space/7334558867143049220

# 最高等级
Max-Level: 100
# 关键等级设置
# 只需对关键等级进行修改, 处于非关键等级时将自动读取上一个关键等级的信息
Settings:
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
    #    Action:
    #      - command inline "give {{sender}} apple 1" as op
    Action: [ ]
  # 1 级 - 49 级(下一个关键等级之前的等级) 等级设置
  1:
    Name: "§8Lv.§b%level%"
    Exp: "%level% * 5 + 100"
    Condition: [ ]
    Action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %akarilevel_lastlevelname% }} §7→ {{ papi %akarilevel_levelname% }}" by 10 20 10
      - actionbar inline "§8[ §7{{ papi %akarilevel_exp% }} §8/ §7{{ papi %akarilevel_nextlevelexp% }} §8]"
  # 50 级 - 100 级(满级) 等级设置
  50:
    Name: "§8Lv.§b%level%"
    Exp: "%level% * 10 + 100"
    Condition: [ ]
    Action:
      - title "§e§lLevel UP!"
      - subtitle inline "{{ papi %akarilevel_lastlevelname% }} §7→ {{ papi %akarilevel_levelname% }}" by 10 20 10
      - actionbar inline "§8[ §7{{ papi %akarilevel_exp% }} §8/ §7{{ papi %akarilevel_nextlevelexp% }} §8]"
```
---

- Max-Level

```服务器限制的最高等级 (Int类型，范围:0 ~ 2147483647)```

- Settings

```关键等级相关设置```

```读取某一关键等级条件: 当前等级>=当前关键等级 且 当前等级<下一关键等级```

  -> Name
  
  ```目标等级的名称```

  > %level% -> 对应等级 (其中%level%是插件内置变量，无法应用于PlaceholderAPI)

  -> Exp
  ```
  升级至目标等级所需经验
  (JavaScript运算支持)
  ```
> 如需固定升级经验，直接输入数字即可
>
>%level% -> 目标等级 (其中%level%是插件内置变量，无法应用于PlaceholderAPI)

  -> Condition

  ```升级至目标等级需满足的条件```
> Kether支持, 每行**返回值**均为 true 时才可升级

  -> Action

  ```升级至目标等级后执行的动作 (Kether支持)```
> Kether动作列表: https://kether.tabooproject.org/list.html

## 示例解析
``` yaml 
Max-Level: 100 #该服务器允许玩家达到的最大等级为 100 级
```

``` yaml
Settings:
  0:
    Name: "§8Lv.§b0"
    Exp: "0"
    Condition: [ ]
    Action: [ ]
```
> 0 级是一个关键等级，以上设置将仅应用于 0 级
>
> 该等级在变量 %AkariLevel_LevelName% 中显示的名称为 Lv.0
>
>升级至该等级不需要经验 (所需经验为0)
>
>升级至该等级不需要满足任何条件 
>
>(Condition为空的List -> Boolean，即每项都为 true , 符合要求)
>
>升级至该等级不会执行任何动作 (Action为空的List -> String)

``` yaml
1:
  Name: "§8Lv.§b%level%"
  Exp: "%level% * 5 + 100"
  Condition:
    - "permission akarilevel.default"
  Action:
    - title "§e§lLevel UP!"
    - subtitle inline "{{ papi %akarilevel_lastlevelname% }} §7→ {{ papi %akarilevel_levelname% }}" by 10 20 10
    - actionbar inline "§8[ §7{{ papi %akarilevel_exp% }} §8/ §7{{ papi %akarilevel_nextlevelexp% }} §8]"
```
>1 级是一个关键等级，以上设置将应用于 1 ~ 49 级
>
>(49级 为下一个关键等级 50级 之前的等级)
>
>该等级在变量 %AkariLevel_LevelName% 中显示的名称为 Lv.1 ~ Lv.49
>
>升级至该等级所需经验为 目标等级*5+100

>0级→1级 所需经验: 105
>
>1级→2级 所需经验: 110
>
>...
>
>48级→49级 所需经验: 345
>
>49级→50级 则读取下一个关键等级 50级 的配置

>升级至该等级需要玩家拥有 akarilevel.default 权限
>
>更多条件请见 Kether动作列表: https://kether.tabooproject.org/list.html
>
>升级至该等级会为玩家发送指定内容的 title、subtitle、actionbar 消息
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
>50 级是一个关键等级，以上设置将应用于 50 ~ 100 级
>
>(50级 后不再存在其他关键等级，故该设置应用于该关键等级 50级 至最高等级 100级)
>
>该等级在变量 %AkariLevel_LevelName% 中显示的名称为 Lv.50 ~ Lv.100
>
>升级至该等级所需经验为 目标等级*10+100

>49级→50级 所需经验: 600
>
>50级→51级 所需经验: 610
>
>...
>
>98级→99级 所需经验: 1090
>
>99级→100级(最高等级) 所需经验: 1100