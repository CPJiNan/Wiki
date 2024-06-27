# 📨 来源

> 💡 当你调用插件API时，通常需要声明该操作的来源，用于辨别事件发生的不同场景。

AkariLevel 中定义了部分事件来源：

- PlayerExpChangeEvent
    - COMMAND_ADD_EXP
    - COMMAND_REMOVE_EXP
    - COMMAND_SET_EXP
    - MYTHICMOBS_DROP_EXP
    - VANILLA_EXP_CHANGE
- PlayerLevelChangeEvent
    - COMMAND_ADD_LEVEL
    - COMMAND_REMOVE_LEVEL
    - COMMAND_SET_LEVEL

同时你也可以在自己的插件中声明其他来源，例如：

1. EXAMPLEPLUGIN
2. EXAMPLEPLUGIN_LISTENER
3. EXAMPLEPLUGIN_LISTENER_PLAYERFISH
4. EXAMPLEPLUGIN_SET_EXP
5. EXAMPLEPLUGIN_COMMAND_GET_REWARD

详细的来源填写有利于不同插件对同一操作发生的不同场景的辨别。