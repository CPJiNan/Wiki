import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/Wiki/',
    title: "季楠的文档",
    description: "欢迎查阅季楠的个人文档",
    head: [
        ['link', {rel: 'icon', href: '/Wiki/favicon.png'}]
    ],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {text: '动态', link: 'https://cpjinan.github.io/Blog/'}
        ],
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/CPJiNan/Wiki/tree/master/docs/:path'
        },
        sidebar: [
            {
                text: '✨ AkariLevel',
                items: [
                    {text: '❓ 常见问题', link: '/AkariLevel/'},
                    {
                        text: '🔥 开始',
                        collapsed: true,
                        items: [
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
                            {text: '✨ 支持作者', link: '/AkariLevel/about/donate'},
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
                    },
                    {
                        text: '📎️ 附属插件',
                        collapsed: true,
                        items: [
                            {text: '🚀 ExpboostQwQ', link: '/AkariLevel/extension/ExpboostQwQ'}
                        ]
                    }
                ]
            },
            {
                text: '✨ VitaSell',
                items: [
                    {text: '💰 插件购买', link: '/VitaSell/'},
                    {text: '❓ 常见问题', link: '/VitaSell/issue'},
                    {
                        text: '🔥 开始',
                        collapsed: true,
                        items: [
                            {text: '🎼️ 命令', link: '/VitaSell/start/command'},
                            {text: '🚫 权限', link: '/VitaSell/start/permission'},
                            {text: '🔍 出售界面', link: '/VitaSell/start/table'},
                            {text: '🪙 出售规则', link: '/VitaSell/start/sell'}
                        ]
                    },
                    {
                        text: '🌥️ 关于',
                        collapsed: true,
                        items: [
                            {text: '❗ 重要地址', link: '/VitaSell/about/link'},
                            {text: '✨ 支持作者', link: '/VitaSell/about/donate'},
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
