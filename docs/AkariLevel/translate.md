# 📖 Plugin Translation Guide

[↗ Edit language files on GitHub](https://github.com/CPJiNan/AkariLevel/tree/master/src/main/resources)

Currently supported languages: zh_CN, zh_TW, en_US, es_ES.

The plugin automatically generates language files based on the user's system language.

If your language is not yet supported, you can help with the translation.

Translation work includes the language files in the `lang` folder and comments in `level/Example.yml` and `settings.yml`.

If you are not familiar with Chinese, you can translate from the English version into your language.

The names of the language files in the `lang` folder should correspond to the respective language codes,

and the `Language` setting in the `level` configuration file should match the language of the generated configuration file.

For example, the English language files can use configuration files with Chinese comments:

``` yaml
Language: "zh_CN"

# Plugin-related
Plugin-Loading: '&7Loading &3Akari&bLevel&8&f... &8{0}'
Plugin-Enabled: '&8[&3Akari&bLevel&8] &bInfo &8| &6Plugin enabled.'
Plugin-Disable: '&8[&3Akari&bLevel&8] &bInfo &8| &6Plugin disabled.'
Plugin-Reloaded: '&8[&3Akari&bLevel&8] &bInfo &8| &6Plugin reloaded.'
```

Additionally, you can also leave a comment at the top of the language file in the `lang` folder with your name as the contributor of the language file.