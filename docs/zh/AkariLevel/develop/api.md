# 📦 API
> com.github.cpjinan.plugin.akarilevel.api.AkariLevelAPI
``` kotlin
/**
 * 获取玩家等级
 * @param [player] 玩家
 * @return [Int]
 */
fun getPlayerLevel(player: Player): Int

/**
 * 获取玩家经验
 * @param [player] 玩家
 * @return [Int]
 */
fun getPlayerExp(player: Player): Int

/**
 * 设置玩家等级
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun setPlayerLevel(player: Player, amount: Int, source: String)

/**
 * 增加玩家等级
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun addPlayerLevel(player: Player, amount: Int, source: String)


/**
 * 减少玩家等级
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun removePlayerLevel(player: Player, amount: Int, source: String)

/**
 * 设置玩家经验
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun setPlayerExp(player: Player, amount: Int, source: String)

/**
 * 增加玩家经验
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun addPlayerExp(player: Player, amount: Int, source: String)

/**
 * 减少玩家经验
 * @param [player] 玩家
 * @param [amount] 值
 * @param [source] 来源
 */
fun removePlayerExp(player: Player, amount: Int, source: String)

/**
 * 刷新玩家等级
 * @param [player] 玩家
 * @param [source] 来源
 */
fun refreshPlayerLevel(player: Player, source: String)


/**
 * 请求升级玩家
 * @param [player] 玩家
 * @param [source] 来源
 */
fun playerLevelUP(player: Player, source: String)
```

> com.github.cpjinan.plugin.akarilevel.internal.manager.LevelManager

``` kotlin
/**
 * 获取等级名称
 * @param [level] 等级
 * @return [String?]
 */
fun getName(level: Int): String?

/**
 * 获取等级经验
 * @param [level] 等级
 * @return [String?]
 */
fun getExp(level: Int): Int

/**
 * 获取等级条件
 * @param [level] 等级
 * @return [List<String>?]
 */
fun getCondition(level: Int): List<String>?

/**
 * 获取等级动作
 * @param [level] 等级
 * @return [List<String>?]
 */
fun getAction(level: Int): List<String>?
```