module.exports = {
  title: 'Bee Travels',
  tagline: ' Try out the demo below or click on Get Started to learn more',
  url: 'https://bee-travels.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/faviconBee.ico',
  organizationName: 'bee-travels', // Usually your GitHub org/user name.
  projectName: 'bee-travels.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bee Travels',
      logo: {
        alt: 'Bee-Travels',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      {
        href: 'https://github.com/bee-travels',
        position: 'left',
        className: 'header-github-link',
        'aria-label': 'GitHub repository',
      }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'IBM Developer',
              href: 'https://developer.ibm.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
