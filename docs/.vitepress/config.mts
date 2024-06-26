import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/Wiki/',
    locales: {
        root: {
            base: '/Wiki/',
            label: '简体中文',
            lang: 'zh',
            link: '/zh/',
            title: "AkariPlugins 澄明系列插件",
            description: "欢迎查阅 AkariPlugins 公开文档",
            themeConfig: {
                nav: [
                    {text: '首页', link: '/'},
                    {text: 'AkariLevel', link: '/zh/AkariLevel/'}
                ],
                sidebar: [
                    {
                        text: 'AkariLevel',
                        items: [
                            {text: '⏱️ 首页', link: '/zh/AkariLevel/'},
                            {
                                text: '🔥 开始',
                                collapsed: false,
                                items: [
                                    {text: '✨ 安装', link: '/zh/AkariLevel/start/install'},
                                    {
                                        text: '📃 配置',
                                        link: '/zh/AkariLevel/start/config/',
                                        collapsed: true,
                                        items: [
                                            {text: '📎 settings.yml', link: '/zh/AkariLevel/start/config/settings'},
                                            {text: '🚲 level.yml', link: '/zh/AkariLevel/start/config/level'},
                                            {text: '📘 lang/zh_CN.yml', link: '/zh/AkariLevel/start/config/lang_zh_CN'}
                                        ]
                                    },
                                    {text: '🎼️ 命令', link: '/zh/AkariLevel/start/command'},
                                    {text: '🚫 权限', link: '/zh/AkariLevel/start/permission'},
                                    {text: '🏷 变量', link: '/zh/AkariLevel/start/placeholder'}
                                ]
                            },
                            {
                                text: '🌥️ 关于',
                                collapsed: true,
                                items: [
                                    {text: '❗ 重要地址', link: '/zh/AkariLevel/about/link'},
                                    {text: '📈 数据统计', link: '/zh/AkariLevel/about/metrics'},
                                    {text: '🎁 支持作者', link: '/zh/AkariLevel/about/donate'}
                                ]
                            },
                            {
                                text: '🛠️ 开发',
                                collapsed: true,
                                items: [
                                    {text: '📦 API', link: '/zh/AkariLevel/develop/api'},
                                    {text: '📍 事件', link: '/zh/AkariLevel/develop/event'},
                                    {text: '📨 来源', link: '/zh/AkariLevel/develop/source'}
                                ]
                            }
                        ]
                    }
                ],
                socialLinks: [
                    {icon: 'github', link: 'https://github.com/CPJiNan'}
                ]
            }
        },
        en: {
            base: '/Wiki/',
            label: 'English',
            lang: 'en',
            link: '/en/',
            title: "AkariPlugins",
            description: "欢迎查阅 AkariPlugins 公开文档",
            themeConfig: {
                nav: [
                    {text: '首页', link: '/'},
                    {text: 'AkariLevel', link: '/en/AkariLevel/'}
                ],
                sidebar: [
                    {
                        text: 'AkariLevel',
                        items: [
                            {text: '⏱️ 首页', link: '/en/AkariLevel/'},
                            {
                                text: '🔥 开始',
                                collapsed: false,
                                items: [
                                    {text: '✨ 安装', link: '/en/AkariLevel/start/install'},
                                    {
                                        text: '📃 配置',
                                        link: '/en/AkariLevel/start/config/',
                                        collapsed: true,
                                        items: [
                                            {text: '📎 settings.yml', link: '/en/AkariLevel/start/config/settings'},
                                            {text: '🚲 level.yml', link: '/en/AkariLevel/start/config/level'},
                                            {text: '📘 lang/zh_CN.yml', link: '/en/AkariLevel/start/config/lang_zh_CN'}
                                        ]
                                    },
                                    {text: '🎼️ 命令', link: '/en/AkariLevel/start/command'},
                                    {text: '🚫 权限', link: '/en/AkariLevel/start/permission'},
                                    {text: '🏷 变量', link: '/en/AkariLevel/start/placeholder'}
                                ]
                            },
                            {
                                text: '🌥️ 关于',
                                collapsed: true,
                                items: [
                                    {text: '❗ 重要地址', link: '/en/AkariLevel/about/link'},
                                    {text: '📈 数据统计', link: '/en/AkariLevel/about/metrics'},
                                    {text: '🎁 支持作者', link: '/en/AkariLevel/about/donate'}
                                ]
                            },
                            {
                                text: '🛠️ 开发',
                                collapsed: true,
                                items: [
                                    {text: '📦 API', link: '/en/AkariLevel/develop/api'},
                                    {text: '📍 事件', link: '/en/AkariLevel/develop/event'},
                                    {text: '📨 来源', link: '/en/AkariLevel/develop/source'}
                                ]
                            }
                        ]
                    }
                ],
                socialLinks: [
                    {icon: 'github', link: 'https://github.com/CPJiNan'}
                ]
            }
        },
    }
})
