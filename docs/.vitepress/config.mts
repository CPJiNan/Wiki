import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/Wiki/',
    title: "AkariPlugins 澄明系列插件",
    description: "欢迎查阅 AkariPlugins 公开文档",
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: 'AkariLevel', link: '/AkariLevel/'}
        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: 'AkariLevel',
                items: [
                    {text: '🏠 首页', link: '/AkariLevel/'},
                    {
                        text: '🔥 开始',
                        collapsed: true,
                        items: [
                            {text: '✨ 安装', link: '/AkariLevel/start/install'},
                            {text: '❗ 版本迁移', link: '/AkariLevel/start/migration'},
                            {
                                text: '📃 配置',
                                link: '/AkariLevel/start/config/',
                                collapsed: true,
                                items: [
                                    {text: '📎 settings.yml', link: '/AkariLevel/start/config/settings'},
                                    {text: '🚲 level.yml', link: '/AkariLevel/start/config/level'},
                                    {text: '📘 lang/zh_CN.yml', link: '/AkariLevel/start/config/lang_zh_CN'}
                                ]
                            },
                            {text: '🎼️ 命令', link: '/AkariLevel/start/command'},
                            {text: '🚫 权限', link: '/AkariLevel/start/permission'},
                            {text: '🏷 变量', link: '/AkariLevel/start/placeholder'},
                            {text: '🎯 经验掉落', link: '/AkariLevel/start/drop'}
                        ]
                    },
                    {
                        text: '🌥️ 关于',
                        collapsed: true,
                        items: [
                            {text: '❗ 重要地址', link: '/AkariLevel/about/link'},
                            {text: '📈 数据统计', link: '/AkariLevel/about/metrics'},
                            {text: '🎁 支持作者', link: '/AkariLevel/about/donate'},
                            {text: '🔗 友情链接', link: '/AkariLevel/about/friends'}
                        ]
                    },
                    {
                        text: '🛠️ 开发',
                        collapsed: true,
                        items: [
                            {text: '📦 API', link: '/AkariLevel/develop/api'},
                            {text: '📍 事件', link: '/AkariLevel/develop/event'},
                            {text: '📨 来源', link: '/AkariLevel/develop/source'}
                        ]
                    }
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/CPJiNan'}
        ]
    }
})
