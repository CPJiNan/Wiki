# 📍 事件
> com.github.cpjinan.plugin.akarilevel.common.event

``` kotlin
/**
 * 玩家拥有的 AkariExp 经验变更事件
 * @param [player] 触发事件的玩家
 * @param [exp] 变更后玩家的总经验 (变更前玩家的总经验请尝试使用 AkariLevelAPI 中的 getPlayerExp 方法获取)
 * @param [source] 该事件的来源 (请参考插件Wiki中"开发-来源"页面)
 */
package com.github.cpjinan.plugin.akarilevel.api.event.exp
class PlayerExpChangeEvent(val player: Player, var exp: Int, var source: String) : BukkitProxyEvent()
```
``` kotlin
/**
 * 玩家拥有的 AkariLevel 等级变更事件
 * @param [player] 触发事件的玩家
 * @param [level] 变更后玩家的总等级 (变更前玩家的总等级请尝试使用 AkariLevelAPI 中的 getPlayerLevel 方法获取)
 * @param [source] 该事件的来源 (请参考插件Wiki中"开发-来源"页面)
 */
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerLevelChangeEvent(val player: Player, var level: Int, var source: String) : BukkitProxyEvent()
```
``` kotlin
/**
 * 玩家尝试升级事件
 * @param [player] 触发事件的玩家
 * @param [source] 该事件的来源 (请参考插件Wiki中"开发-来源"页面)
 * 判断玩家是否成功升级请参考插件源码中 AkariLevelAPI.kt 的 private 方法 doLevelUp 与 tickLevel
 */
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerLevelupEvent(val player: Player, var source: String) : BukkitProxyEvent()
```
``` kotlin
/**
 * 玩家刷新等级事件
 * @param [player] 触发事件的玩家
 * @param [source] 该事件的来源 (请参考插件Wiki中"开发-来源"页面)
 */
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerRefreshLevelEvent(val player: Player, var source: String) : BukkitProxyEvent()
```