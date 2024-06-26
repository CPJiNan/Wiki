import { defineConfig } from 'vitepress'
import { en_US } from './en_US.mjs'
import { zh_CN } from './zh_CN.mjs'

export default defineConfig({
    locales: {
        root: { label: '简体中文', ...zh_CN },
        en_US: { label: 'English', ...en_US },
    }
})