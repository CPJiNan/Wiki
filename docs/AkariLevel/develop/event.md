# 📍 事件

> com.github.cpjinan.plugin.akarilevel.common.event.exp

---

> 请使用开发版本作为依赖编写插件，否则可能会无法监听 AkariLevel 声明的事件。

``` kotlin
/**
 * 玩家经验变更事件
 * @param player 玩家
 * @param levelGroup 等级组编辑名
 * @param expAmount 经验变化量 (经验减少时为负值)
 * @param source 事件来源
 * @author CPJiNan
 * @since 2024/06/23
 */
class PlayerExpChangeEvent(
    val player: Player,
    var levelGroup: String,
    var expAmount: Int,
    var source: String
) :
    BukkitProxyEvent()
```

``` kotlin
/**
 * 玩家经验变更事件
 * @param player 玩家
 * @param levelGroup 等级组编辑名
 * @param oldLevel 更改前等级
 * @param newLevel 更改后等级
 * @param source 事件来源
 * @author CPJiNan
 * @since 2024/06/23
 */
class PlayerLevelChangeEvent(
    val player: Player,
    var levelGroup: String,
    var oldLevel: Int,
    var newLevel: Int,
    var source: String
) :
    BukkitProxyEvent()
```
