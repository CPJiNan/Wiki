# 📦 API

## PlayerAPI

> com.github.cpjinan.plugin.akarilevel.api.PlayerAPI

``` kotlin
    /**
     * 获取指定玩家某等级组下的数据
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @return 玩家数据
     */
    fun getPlayerData(player: Player, levelGroup: String): PlayerData = getData(player, levelGroup)

    /**
     * 设置指定玩家某等级组下的数据
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param playerData 玩家数据
     */
    fun setPlayerData(player: Player, levelGroup: String, playerData: PlayerData) {
        setData(player, levelGroup, playerData)
    }

    /**
     * 获取指定玩家某等级组下的等级
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @return 等级数值
     */
    fun getPlayerLevel(player: Player, levelGroup: String): Int = getLevel(player, levelGroup)

    /**
     * 获取指定玩家某等级组下的经验
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @return 经验数值
     */
    fun getPlayerExp(player: Player, levelGroup: String): Int = getExp(player, levelGroup)

    /**
     * 设置指定玩家某等级组下的等级并触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun setPlayerLevel(player: Player, levelGroup: String, amount: Int, source: String) {
        setLevel(player, levelGroup, amount, source)
        runAction(player, levelGroup, amount)
        refreshLevel(player, levelGroup)
    }

    /**
     * 增加指定玩家某等级组下的等级并触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun addPlayerLevel(player: Player, levelGroup: String, amount: Int, source: String) {
        val targetLevel = getLevel(player, levelGroup) + amount
        setLevel(player, levelGroup, targetLevel, source)
        runAction(player, levelGroup, targetLevel)
        refreshLevel(player, levelGroup)
    }

    /**
     * 移除指定玩家某等级组下的等级并触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun removePlayerLevel(player: Player, levelGroup: String, amount: Int, source: String) {
        val targetLevel = (getLevel(player, levelGroup) - amount).coerceAtLeast(0)
        setLevel(player, levelGroup, targetLevel, source)
        runAction(player, levelGroup, targetLevel)
        refreshLevel(player, levelGroup)
    }

    /**
     * 设置指定玩家某等级组下的等级而不触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun setPlayerLevelWithoutAction(player: Player, levelGroup: String, amount: Int, source: String) {
        setLevel(player, levelGroup, amount, source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 增加指定玩家某等级组下的等级而不触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun addPlayerLevelWithoutAction(player: Player, levelGroup: String, amount: Int, source: String) {
        setLevel(player, levelGroup, getLevel(player, levelGroup) + amount, source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 移除指定玩家某等级组下的等级的而不触发该等级升级执行动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 等级数值
     * @param source PlayerLevelChangeEvent 事件来源
     */
    fun removePlayerLevelWithoutAction(player: Player, levelGroup: String, amount: Int, source: String) {
        setLevel(player, levelGroup, (getLevel(player, levelGroup) - amount).coerceAtLeast(0), source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 设置指定玩家某等级组下的经验
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 经验数值
     * @param source PlayerExpChangeEvent 事件来源
     */
    fun setPlayerExp(player: Player, levelGroup: String, amount: Int, source: String) {
        setExp(player, levelGroup, amount, source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 增加指定玩家所有等级组下的经验 (带有等级组是否订阅事件来源检查)
     * @param player 玩家
     * @param amount 经验数值
     * @param source PlayerExpChangeEvent 事件来源
     */
    fun addPlayerExp(player: Player, amount: Int, source: String) {
        LevelAPI.getLevelGroupNames().forEach {
            if (source in getLevelGroupData(it).subscribeSource) {
                setExp(player, it, getExp(player, it) + amount, source)
                refreshLevel(player, it)
            }
        }
    }

    /**
     * 增加指定玩家某等级组下的经验 (带有等级组是否订阅事件来源检查)
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 经验数值
     * @param source PlayerExpChangeEvent 事件来源
     */
    fun addPlayerExp(player: Player, levelGroup: String, amount: Int, source: String) {
        if (source in getLevelGroupData(levelGroup).subscribeSource) {
            setExp(player, levelGroup, getExp(player, levelGroup) + amount, source)
            refreshLevel(player, levelGroup)
        }
    }

    /**
     * 增加指定玩家某等级组下的经验 (跳过等级组是否订阅事件来源检查)
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 经验数值
     * @param source PlayerExpChangeEvent 事件来源
     */
    fun addPlayerExpForce(player: Player, levelGroup: String, amount: Int, source: String) {
        setExp(player, levelGroup, getExp(player, levelGroup) + amount, source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 移除指定玩家某等级组下的经验
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param amount 经验数值
     * @param source PlayerExpChangeEvent 事件来源
     */
    fun removePlayerExp(player: Player, levelGroup: String, amount: Int, source: String) {
        setExp(player, levelGroup, (getExp(player, levelGroup) - amount).coerceAtLeast(0), source)
        refreshLevel(player, levelGroup)
    }

    /**
     * 刷新玩家所有等级组下的等级
     * @param player 玩家
     */
    fun refreshPlayerLevel(player: Player) {
        getLevelGroupNames().forEach {
            refreshLevel(player, it)
        }
    }

    /**
     * 刷新玩家指定等级组下的等级
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     */
    fun refreshPlayerLevel(player: Player, levelGroup: String) {
        refreshLevel(player, levelGroup)
    }

    /**
     * 检查玩家所有等级组是否满足升级条件并尝试升级
     * @param player 玩家
     */
    fun levelupPlayer(player: Player) {
        getLevelGroupNames().forEach {
            levelup(player, it)
        }
    }

    /**
     * 检查玩家指定等级组是否满足升级条件并尝试升级
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     */
    fun levelupPlayer(player: Player, levelGroup: String) {
        levelup(player, levelGroup)
    }

    /**
     * 获取玩家是否满足指定等级组升级条件
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @return 玩家是否满足指定等级组升级条件
     */
    fun checkPlayerLevelupCondition(player: Player, levelGroup: String): Boolean = checkCondition(player, levelGroup)

    /**
     * 为玩家执行指定等级组下的某等级升级动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     * @param level 等级数值
     */
    fun runPlayerLevelAction(player: Player, levelGroup: String, level: Int) {
        runAction(player, levelGroup, level)
    }

    /**
     * 获取玩家正在追踪的等级组
     * @param player 玩家
     * @return 等级组编辑名
     */
    fun getPlayerTraceLevelGroup(player: Player): String = getTraceLvlGroup(player)

    /**
     * 设置玩家正在追踪的等级组
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     */
    fun setPlayerTraceLevelGroup(player: Player, levelGroup: String) {
        setTraceLvlGroup(player, levelGroup)
    }

    /**
     * 检查玩家是否满足指定等级组追踪条件
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     */
    fun checkPlayerTraceCondition(player: Player, levelGroup: String): Boolean = checkTraceCondition(player, levelGroup)

    /**
     * 为玩家执行指定等级组下的追踪动作
     * @param player 玩家
     * @param levelGroup 等级组编辑名
     */
    fun runPlayerTraceAction(player: Player, levelGroup: String) {
        runTraceAction(player, levelGroup)
    }
```

---

## LevelAPI

> com.github.cpjinan.plugin.akarilevel.api.LevelAPI

```
    /**
     * 获取等级组配置列表
     * @return 等级组配置列表
     */
    fun getLevelGroups(): HashMap<String, ConfigurationSection> = getLvlGroups()

    /**
     * 获取等级组编辑名列表
     * @return 等级组名称列表
     */
    fun getLevelGroupNames(): ArrayList<String> = getLvlGroupNames()

    /**
     * 获取等级组数据列表
     * @return 等级组数据列表
     */
    fun getLevelGroupData(): HashMap<String, LevelGroupData> = getLvlGroupData()

    /**
     * 获取指定等级组数据
     * @param levelGroup 等级组编辑名
     * @return 等级组数据
     */
    fun getLevelGroupData(levelGroup: String): LevelGroupData = getLvlGroupData(levelGroup)

    /**
     * 获取指定等级组关键等级数据列表
     * @param levelGroup 等级组编辑名
     * @return 关键等级数据列表
     */
    fun getKeyLevelData(levelGroup: String): HashMap<Int, LevelData> = getKeyLvlData(levelGroup)

    /**
     * 获取指定等级组某等级数据
     * @param levelGroup 等级组编辑名
     * @param level 等级
     * @return 等级数据
     */
    fun getLevelData(levelGroup: String, level: Int): LevelData = getLvlData(levelGroup, level)

    /**
     * 获取指定等级组某等级名称
     * @param levelGroup 等级组编辑名
     * @param level 等级
     * @return 等级名称
     */
    fun getLevelName(levelGroup: String, level: Int): String = getLvlName(levelGroup, level)

    /**
     * 获取指定等级组升级到某等级所需经验
     * @param levelGroup 等级组编辑名
     * @param level 等级
     * @return 等级名称
     */
    fun getLevelExp(levelGroup: String, level: Int): Int = getLvlExp(levelGroup, level)

    /**
     * 获取指定等级组升级到某等级所需条件列表
     * @param levelGroup 等级组编辑名
     * @param level 等级
     * @return 升级条件列表
     */
    fun getLevelCondition(levelGroup: String, level: Int): List<String> = getLvlCondition(levelGroup, level)

    /**
     * 获取指定等级组升级到某等级执行动作列表
     * @param levelGroup 等级组编辑名
     * @param level 等级
     * @return 升级执行动作列表
     */
    fun getLevelAction(levelGroup: String, level: Int): List<String> = getLvlAction(levelGroup, level)
```

---

## DataAPI

> com.github.cpjinan.plugin.akarilevel.api.DataAPI

```
    /**
     * 获取指定表中某索引下某键的值
     * @param table 表名
     * @param index 索引名
     * @param key 键名
     * @return 数据值
     */
    fun getDataValue(table: String, index: String, key: String): String = getValue(table, index, key)

    /**
     * 设置指定表中某索引下某键的值
     * @param table 表名
     * @param index 索引名
     * @param key 键名
     * @param value 数据值
     */
    fun setDataValue(table: String, index: String, key: String, value: String) {
        setValue(table, index, key, value)
    }

    /**
     * 保存数据 (使用 setDataValue 修改数据后会自动保存)
     */
    fun saveData() {
        save()
    }
```