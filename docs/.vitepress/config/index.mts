import { defineConfig } from 'vitepress'
import { zh_CN } from './zh_CN.mjs'
import { en_US } from './en_US.mjs'

export default defineConfig({
    locales: {
        root: { label: '简体中文', ...zh_CN },
        en_US: { label: 'English', ...en_US },
    }
})