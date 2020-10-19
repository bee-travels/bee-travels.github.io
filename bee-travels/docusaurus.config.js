module.exports = {
  title: 'Bee Travels',
  tagline: ' Try out the demo below or click on the button to learn more',
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
          to: '/workshop',
          label: 'Workshop',
          position: 'left',
          activeBaseRegex: `/workshop/`,
        },
        {
          position: 'right',
          label: 'IBM Developer',
          href: 'https://developer.ibm.com/?s=microservices',
        },
      {
        href: 'https://github.com/bee-travels',
        position: 'right',
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
              label: 'Introduction',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'IBM Developer',
              href: 'https://developer.ibm.com',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Crowdcast',
              href: 'https://www.crowdcast.io/ibmdeveloper',
            },
          ],
        },
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'workshop',
        path: 'workshop',
        routeBasePath: 'workshop',
        sidebarPath: require.resolve('./workshop_sidebars.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ]
};
