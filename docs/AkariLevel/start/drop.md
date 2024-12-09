# 🎯 经验掉落

您可以在 MythicMobs 中配置 AkariExp 经验的掉落：

``` yaml
Drops:
  - AkariExp.<等级组编辑名> 经验值数量 掉落几率
```

完整示例:

``` yaml
示例怪物:
  Type: ZOMBIE
  Display: '示例怪物'
  Health: 5
  Damage: 0
  Drops:
  - AkariExp.Example 10 1
  - AkariExp.Example 5 0.5
  - AkariExp.Example 5~10 0.5
  Options:
    MovementSpeed: 0.1
    AlwaysShowName: true
    PreventOtherDrops: true
    MaxCombatDistance: 12
    FollowRange: 6
  Modules:
    ThreatTable: true
```

需要注意的是，对应等级组需要订阅 `MYTHICMOBS_DROP_EXP` 经验来源才可以接收到 MythicMobs 掉落的经验。

``` yaml
Source:
  Subscribe:
    - "MYTHICMOBS_DROP_EXP"
```