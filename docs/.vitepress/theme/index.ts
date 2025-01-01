// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
  extends: DefaultTheme,
  Layout,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // 评论组件 - https://giscus.app/
    giscusTalk({
          repo: 'CPJiNan/Wiki',
          repoId: 'R_kgDOMHbYuQ',
          category: 'Announcements',
          categoryId: 'DIC_kwDOMHbYuc4Clpmk',
          mapping: 'pathname',
          inputPosition: 'top',
          lang: 'zh-CN',
          locales: {
            'zh-Hans': 'zh-CN',
            'en-US': 'en'
          },
          homePageShowComment: false,
          lightTheme: 'light',
          darkTheme: 'transparent_dark',
        }, {
          frontmatter, route
        },
        true
    );
  }
} satisfies Theme
