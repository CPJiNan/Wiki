# 📍 事件

> 请使用 API 版本作为依赖，否则可能会无法监听 VitaGem 注册的事件。

``` kotlin
package com.github.cpjinan.plugin.vitagem.event

/** 玩家镶嵌事件
 *
 * Result Boolean 镶嵌是否成功
 *
 * Data GemConfigData 宝石配置数据
 * Enable.Result Boolean 镶嵌是否启用
 * Slot.Name String 镶嵌槽位名称
 * Slot.Result Boolean 物品有无镶嵌槽位
 * Display.Name String 宝石槽位名称
 * Table.Name String 限制界面名称
 * Table.Result Boolean 界面是否匹配
 * Kether.Result Boolean 脚本条件是否满足
 * Money.Result Boolean 金钱是否足够
 * Money.Amount Double 消耗金钱数量
 * Point.Result Boolean 点券是否足够
 * Point.Amount Double 消耗点券数量
 *
 * Item.Result Boolean 物品是否放入槽位
 * Item.ItemStack ItemStack 放入槽位的物品
 * Item.ItemStack.Amount Int 物品数量
 * Gem.Result Boolean 宝石是否放入槽位
 * Gem.ItemStack ItemStack 放入槽位的宝石
 * Gem.ItemStack.Amount Int 宝石数量
 * Match.Result Boolean 物品是否有宝石槽位
 * Table.Result Boolean 宝石是否与界面匹配
 * Chance.Result Boolean 镶嵌随机结果
 * Chance.Amount Double 镶嵌成功概率
 * Cancel.Result Boolean 事件是否取消
 *
 */
class PlayerSocketEvent(
    val player: Player,
    val result: Map<String, Any>
) : BukkitProxyEvent()
```

``` kotlin
package com.github.cpjinan.plugin.vitagem.event

/** 玩家拆卸事件
 *
 * Result Boolean 镶嵌是否成功
 *
 * Data GemConfigData 宝石配置数据
 * Enable.Result Boolean 镶嵌是否启用
 * Slot.Name String 镶嵌槽位名称
 * Display.Name String 宝石槽位名称
 * Display.Result Boolean 物品有无宝石槽位
 * Table.Name String 限制界面名称
 * Table.Result Boolean 界面是否匹配
 * Kether.Result Boolean 脚本条件是否满足
 * Money.Result Boolean 金钱是否足够
 * Money.Amount Double 消耗金钱数量
 * Point.Result Boolean 点券是否足够
 * Point.Amount Double 消耗点券数量
 *
 * Item.Result Boolean 物品是否放入槽位
 * Item.ItemStack ItemStack 放入槽位的物品
 * Item.ItemStack.Amount Int 物品数量
 * Gem.Result Boolean 宝石是否放入槽位
 * Gem.ItemStack ItemStack 放入槽位的宝石
 * Match.Result Boolean 物品是否有宝石槽位
 * Table.Result Boolean 宝石是否与界面匹配
 * Chance.Result Boolean 拆卸随机结果
 * Chance.Amount Double 拆卸成功概率
 * Cancel.Result Boolean 事件是否取消
 *
 */
class PlayerExtractEvent(
    val player: Player,
    val result: Map<String, Any>
) : BukkitProxyEvent()
```
