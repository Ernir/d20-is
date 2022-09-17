// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'd20 á íslensku',
  tagline: 'Á íslensku má alltaf finna svar',
  url: 'https://ernir.github.io',
  baseUrl: '/d20-is/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/book.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ernir', // Usually your GitHub org/user name.
  projectName: 'd20-is', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'is',
    locales: ['is'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'd20 á íslensku',
        logo: {
          alt: 'Mynd af bók',
          src: 'img/book.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Bókin',
          },
          {
            href: 'https://github.com/Ernir/d20-is',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tengt efni',
            items: [
              {
                label: 'Orðasafn íslenskra spunaspilara - Google Sheet',
                href: 'https://docs.google.com/spreadsheets/d/1-k4bClHJhkCKrDG0jxg8KKn81oqiOGXaJHhjZ9cFH2c/edit#gid=0',
              },
              {
                label: 'Orðasafn íslenskra spunaspilara - vefsíða',
                href: 'http://ordasafnspunaspilara.info/',
              }
            ],
          }
        ],
        copyright: `Höfundarréttur © ${new Date().getFullYear()} Eiríkur Ernir Þorsteinsson`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
