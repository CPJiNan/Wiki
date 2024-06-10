# 📍 事件
> com.github.cpjinan.plugin.akarilevel.api.event

``` kotlin
// 玩家经验变更事件
package com.github.cpjinan.plugin.akarilevel.api.event.exp
class PlayerExpChangeEvent(val player: Player, var exp: Int, var source: String) : BukkitProxyEvent()
```
``` kotlin
// 玩家等级变更事件
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerLevelChangeEvent(val player: Player, var level: Int, var source: String) : BukkitProxyEvent()
```
``` kotlin
// 玩家尝试升级事件
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerLevelupEvent(val player: Player, var source: String) : BukkitProxyEvent()
```
``` kotlin
// 玩家刷新等级事件
package com.github.cpjinan.plugin.akarilevel.api.event.level
class PlayerRefreshLevelEvent(val player: Player, var source: String) : BukkitProxyEvent()
```