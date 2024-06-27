# 📍 事件

> com.github.cpjinan.plugin.akarilevel.common.event

---
**构建发行版本**

发行版本用于正常使用, 不含 TabooLib 本体。

```
./gradlew clean build
```

**构建开发版本**

开发版本包含 TabooLib 本体, 用于开发者使用, 但不可运行。

```
./gradlew clean taboolibBuildApi -PDeleteCode
```

> 参数 -PDeleteCode 表示移除所有逻辑代码以减少体积。
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