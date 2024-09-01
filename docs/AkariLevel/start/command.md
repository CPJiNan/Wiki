# 🎼 命令

```
<> - 必填项 [] - 选填项

/akarilevel - 插件主命令

/akarilevel exp add <玩家名称> <等级组编辑名> <数值> [命令参数] - 给予玩家指定数值的经验
/akarilevel exp remove <玩家名称> <等级组编辑名> <数值> [命令参数] - 移除玩家指定数值的经验
/akarilevel exp set <玩家名称> <等级组编辑名> <数值> [命令参数] - 设置玩家指定数值的经验
/akarilevel exp check <玩家名称> <等级组编辑名> - 查询玩家经验

/akarilevel level add <玩家名称> <等级组编辑名> <数值> [命令参数] - 给予玩家指定数值的等级
/akarilevel level remove <玩家名称> <等级组编辑名> <数值> [命令参数] - 移除玩家指定数值的等级
/akarilevel level set <玩家名称> <等级组编辑名> <数值> [命令参数] - 设置玩家指定数值的等级
/akarilevel level check <玩家名称> <等级组编辑名> - 查询玩家等级

/akarilevel data get <表> <索引> <键> - 获取指定表中某索引下某键的值
/akarilevel data set <表> <索引> <键> <值> - 设置指定表中某索引下某键的值

/akarilevel levelup [等级组编辑名] - 尝试进行升级

/akarilevel trace <等级组编辑名> [命令参数] - 尝试追踪指定等级组

/akarilevel reload - 重载插件配置
```

## 命令参数

命令参数格式:

`-k` `-k v` `-k=v` `--key` `--key value` `--key=value`

（其中 k 及 key 是参数名，v 及 value 是参数值）

```
/akarilevel exp
    · silent - 关闭命令提示
    · source - PlayerExpChangeEvent 经验来源

/akarilevel exp add
        · sourceCheck - 检查指定经验来源是否在等级组订阅来源列表中
        · toAllLevelGroup - 将该经验给予操作的等级组参数由指定等级组更改为所有等级组 (带有来源检查)
        
/akarilevel level
    · silent - 关闭命令提示
    · noAction - 修改等级而不执行对应等级的 Kether 动作
    · source - PlayerLevelChangeEvent 等级来源
    
/akarilevel trace
    · silent - 关闭命令提示
```

---

例如:

```
/akarilevel exp add PlayerName Example 100 --source=VANILLA_EXP_CHANGE --sourceCheck
```

1. 该命令将会检查 Example 等级组是否订阅了 `VANILLA_EXP_CHANGE` 经验来源。

2. 如果指定来源在订阅列表中，则会为玩家 PlayerName 增加 100 点 Example 等级组的经验。否则将不会执行经验给予操作。