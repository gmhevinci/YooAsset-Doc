// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YooAsset',
  tagline: 'unity3d resources management system',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.yooasset.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'YooAsset', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/gmhevinci/YooAsset-Doc/tree/main/yoo-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/gmhevinci/YooAsset-Doc/tree/main/yoo-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'YooAsset',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tuyoogame/YooAsset',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Tuyoo Games, Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['powershell', 'csharp', 'groovy'],
      },
      markprompt: {
        projectKey: 'pk_mmhXpzZypVmhrfQL5B43KfsK0niXhfqY',
        prompt: {
          model: 'gpt-3.5-turbo',
          promptTemplate: '你是一个非常热情的公司代表，喜欢帮助人们！根据下面的文档节选（前面有节选标识），使用其中的信息回答问题，以原格式输出。如果你不确定并且答案在文档中没有明确提到，请用中文写"{{I_DONT_KNOW}}"。文档上下文部分：{{CONTEXT}}问题："{{PROMPT}}"回答（如有相关代码片段，请提供）：',
        },
      },
    }),
    themes: [
      // ... Your other themes.
      '@markprompt/docusaurus-theme-search',
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          language: ["en", "zh"],
          // ```
        }),
      ],
    ],
};

module.exports = config;
