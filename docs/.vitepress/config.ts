import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '团队名',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    outlineTitle: '目录',
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Template',
        items: [{ text: '模板', link: '/template/index' }],
      },
      {
        text: 'React',
        items: [],
      },
      {
        text: 'Vue',
        items: [],
      },
      {
        text: 'React Native',
        items: [],
      },
      {
        text: 'Technology',
        items: [
          {
            text: 'Redux 从使用到源码解读',
            link: '/technology/redux-analysis/index',
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/haiserve-fe/articles' },
    ],
  },
});
