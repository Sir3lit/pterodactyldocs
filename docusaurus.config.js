module.exports = {
  title: 'Pterodactyl Panel',
  tagline: 'The tagline of my site',
  url: 'https://pterodactyl.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'pterodactyl',
  projectName: 'pterodactyl',
  themeConfig: {
    navbar: {
      title: 'Pterodactyl',
      logo: {
        alt: 'Pterodactyl',
        src: 'img/pterodactyl.png',
      },
      links: [
        {
          to: 'docs/panel/getting_started',
          activeBasePath: 'docs/panel',
          label: 'Documentation',
          position: 'right',
        },
        {
          to: 'docs/community/about',
          activeBasePath: 'docs/community',
          label: 'Community Guides',
          position: 'right',
        },
        {
          to: 'https://pterodactyl.io/discord',
          label: 'Get Help',
          position: 'right',
        },
        {
          to: 'https://github.com/pterodactyl/panel',
          label: 'Contribute',
          position: 'right',
        },
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'project/introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), 
      {
        docsBasePath: '/docs',
        indexDocs: true,
        indexPages: true,
        language: 'en'
    }]
  ],
};