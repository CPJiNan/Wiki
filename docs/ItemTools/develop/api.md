# 📦 API

## ItemToolsManager

> com.github.cpjinan.plugin.itemtools

``` kotlin
/** 重载物品配置 **/
fun reload()

/** 给予玩家物品 **/
fun giveItem(player: Player, id: String, amount: Int)

/** 获取指定物品 **/
fun getItem(id: String): ItemStack?

/** 获取物品列表 **/
fun getItemList(): Map<String, ItemStack>

/** 获取物品名称列表 **/
fun getItemNameList(): List<String>

/** 从配置文件构建物品 **/
fun getItemFromConfig(config: ConfigurationSection): ItemStack

/** 保存物品到配置文件 **/
fun saveItemToConfig(item: ItemStack, config: Configuration, id: String)
```

## ItemToolsService

> com.github.cpjinan.plugin.itemtools

``` kotlin
/** 获取物品 Lore **/
fun getLore(item: ItemStack): List<String>

/** 获取物品 Lore **/
fun getLore(item: ItemStack, index: Int): String

/** 新增物品 Lore **/
fun addLore(item: ItemStack, element: String): ItemStack

/** 新增物品 Lore **/
fun addLore(item: ItemStack, index: Int, element: String): ItemStack

/** 移除物品 Lore **/
fun removeLore(item: ItemStack): ItemStack

/** 移除物品 Lore **/
fun removeLore(item: ItemStack, index: Int): ItemStack

/** 设置物品 Lore **/
fun setLore(item: ItemStack, index: Int, element: String): ItemStack

/** 获取物品附魔 **/
fun getEnchant(item: ItemStack): Map<String, Int>

/** 设置物品附魔 **/
fun setEnchant(item: ItemStack, ench: String, level: Int)

/** 物品是否无法破坏 **/
fun isUnbreakable(item: ItemStack): Boolean

/** 设置物品无法破坏 **/
fun setUnbreakable(item: ItemStack, bool: Boolean)

/** 获取物品 NBT **/
fun getNBT(item: ItemStack, key: String): Any?

/** 设置物品 NBT **/
fun setNBT(item: ItemStack, key: String, value: Any?)

/** 物品是否为空气 **/
fun isAir(item: ItemStack?): Boolean
```