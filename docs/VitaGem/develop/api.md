# 📦 API

## VitaGemService

> com.github.cpjinan.plugin.vitagem

``` kotlin
val gemConfigDataMap: HashMap<String, GemConfigData>
val tableConfigDataMap: HashMap<String, TableConfigData>

/** 重载业务配置 **/
fun reload()

/** 打开界面 **/
fun openGUI(player: Player, table: String)

/** 获取宝石配置 **/
fun getGem(item: ItemStack): List<GemConfigData>

/** 物品是否为宝石 **/
fun isGem(item: ItemStack, data: GemConfigData): Boolean

/** 获取镶嵌槽位列表 **/
fun getSlot(): List<String>

/** 获取物品镶嵌槽位数量 **/
fun getSlot(item: ItemStack): Map<GemConfigData, Int>

/** 获取物品镶嵌槽位数量 **/
fun getSlot(item: ItemStack, data: GemConfigData): Int

/** 获取宝石槽位列表 **/
fun getDisplay(): List<String>

/** 获取物品宝石槽位数量 **/
fun getDisplay(item: ItemStack): Map<GemConfigData, Int>

/** 获取物品宝石槽位数量 **/
fun getDisplay(item: ItemStack, data: GemConfigData): Int
```