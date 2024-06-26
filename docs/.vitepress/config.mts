import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/Wiki/',
    locales: {
        '/zh/': {
            label: '简体中文',
            lang: 'zh',
            title: "AkariPlugins 澄明系列插件",
            description: "欢迎查阅 AkariPlugins 公开文档",
            themeConfig: {
                nav: [
                    {text: '首页', link: '/zh/'},
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
        '/en/': {
            label: 'English',
            lang: 'en',
            title: "AkariPlugins",
            description: "Welcome to AkariPlugins documentation",
            themeConfig: {
                nav: [
                    {text: 'Home', link: '/en/'},
                    {text: 'AkariLevel', link: '/en/AkariLevel/'}
                ],
                sidebar: [
                    {
                        text: 'AkariLevel',
                        items: [
                            {text: '⏱️ Home', link: '/en/AkariLevel/'},
                            {
                                text: '🔥 Getting Started',
                                collapsed: false,
                                items: [
                                    {text: '✨ Installation', link: '/en/AkariLevel/start/install'},
                                    {
                                        text: '📃 Configuration',
                                        link: '/en/AkariLevel/start/config/',
                                        collapsed: true,
                                        items: [
                                            {text: '📎 settings.yml', link: '/en/AkariLevel/start/config/settings'},
                                            {text: '🚲 level.yml', link: '/en/AkariLevel/start/config/level'},
                                            {text: '📘 lang/zh_CN.yml', link: '/en/AkariLevel/start/config/lang_zh_CN'}
                                        ]
                                    },
                                    {text: '🎼️ Commands', link: '/en/AkariLevel/start/command'},
                                    {text: '🚫 Permissions', link: '/en/AkariLevel/start/permission'},
                                    {text: '🏷 Placeholders', link: '/en/AkariLevel/start/placeholder'}
                                ]
                            },
                            {
                                text: '🌥️ About',
                                collapsed: true,
                                items: [
                                    {text: '❗ Important Links', link: '/en/AkariLevel/about/link'},
                                    {text: '📈 Metrics', link: '/en/AkariLevel/about/metrics'},
                                    {text: '🎁 Support Us', link: '/en/AkariLevel/about/donate'}
                                ]
                            },
                            {
                                text: '🛠️ Development',
                                collapsed: true,
                                items: [
                                    {text: '📦 API', link: '/en/AkariLevel/develop/api'},
                                    {text: '📍 Events', link: '/en/AkariLevel/develop/event'},
                                    {text: '📨 Source Code', link: '/en/AkariLevel/develop/source'}
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