// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Alsys Playbook',
  tagline: 'by Alsys LTD',
  url: 'https://tehciaktm.github.io',
  baseUrl: '/alsys_admin_playbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tehciaktm', // Usually your GitHub org/user name.
  projectName: 'alsys_admin_playbook', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          // editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        //title: 'Alsys Ltd.',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon_ok.svg', 
        },
        items: [
          {
            type: 'docsVersionDropdown',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            sidebarId: 'Alsys Admin',
            label: 'Alsys Admin',
          },
          {
            type: 'doc',
            docId: 'introuser',
            position: 'left',
            sidebarId: 'Alsys Connect',
            label: 'Alsys Connect',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Websites',
            items: [
              {
                label: 'alsys.io',
                href: 'https://www.alsys.io/',
              },
              {
                label: 'alsysoft.com',
                href: 'https://www.alsysoft.com/',
              },
            ],
          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'GitHub',
//                href: 'https://github.com/tehciaktm/alsys_admin_playbook',
//              },
//            ],
//          },
        ],

        copyright: `© Copyright - Alsys Ltd. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

