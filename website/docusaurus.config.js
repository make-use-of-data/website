// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
async function createConfig() {
  const katex = (await import('rehype-katex')).default
  const remarkDefinitionList = (await import("remark-definition-list")).default
  const remarkGfm = (await import("remark-gfm")).default
  const remarkGithub = (await import("remark-github")).default
  const remarkReferenceLinks = (await import("remark-reference-links")).default
  const remarkSmartypants = (await import("remark-smartypants")).default

  const rehypeAutolinkHeadings = (await import("rehype-autolink-headings")).default
  const rehypeCitation = (await import("rehype-citation")).default

  return ({
    title: 'Make Use of Data',
    tagline: 'A collection of useful data-related notes, considerations, and articles',
    url: 'https://www.makeuseofdata.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'make-use-of-data', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.

    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'data-science-notes',
          path: './data-science-notes',
          routeBasePath: 'data-science-notes',
          // sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'making-use-of-data',
          path: './making-use-of-data',
          routeBasePath: 'making-use-of-data',
          // sidebarPath: require.resolve('./sidebars.js'),
        }, 
      ],
      'plugin-image-zoom',
      [
        '@edno/docusaurus2-graphql-doc-generator',
        {
          schema: "./schema/muod.graphql",
          rootPath: "./", // docs will be generated under './docs/swapi' (rootPath/baseURL)
          baseURL: "/",
          homepage: "/",
        },
      ],
      // [
      //     "docusaurus-plugin-remote-content",
      //     {
      //          options here
      //         name: "some-content", // used by CLI, must be path safe
      //         sourceBaseUrl: "https://my-site.com/content/", // the base url for the markdown (gets prepended to all of the documents when fetching)
      //         outDir: "docs", // the base directory to output to.
      //         documents: ["my-file.md", "README.md"], // the file names to download
      //     },
      // ],
      'docusaurus-plugin-sass',
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 100,
          max: 1030, // max resized image's size.
          min: 640, // min resized image's size. if original is lower, use that size.
          steps: 2, // the max number of images generated between min and max (inclusive)
          disableInDev: false,
        },
      ],
    ],
    themes: [
      '@saucelabs/theme-github-codeblock'
    ],
    presets: [
      [
        'redocusaurus',
        {
          // Plugin Options for loading OpenAPI files
          specs: [
            // {
            //   spec: 'openapi/openapi.yaml',
            //   route: '/api/',
            // },
          ],
          // Theme Options for modifying how redoc renders them
          theme: {
            // Change with your site colors
            primaryColor: '#8c3232',
          },
        },
      ],
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            include: ['*.md', '*.mdx'],
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            path: 'docs',
            routeBasePath: 'docs',
            // sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/make-use-of-data/website/tree/main/website',
            remarkPlugins: [
              require('mdx-mermaid'),
              require('remark-math'),
              require("remark-code-frontmatter"),
              [require("remark-codesandbox"), { mode: "button" }],
              remarkDefinitionList,
              remarkGfm,
              [remarkGithub, { repository: "https://github.com/make-use-of-data/website.git" }],
              require("remark-heading-id"),
              require("remark-hint"),
              [require("remark-jargon"), { jargon: require('./jargon.js') }],
              remarkReferenceLinks,
              remarkSmartypants,
            ],
            rehypePlugins: [
              katex,
              rehypeAutolinkHeadings,
              [rehypeCitation, {
                bibliography: "./references.bibtex",
                csl: "./operations-research.csl"
              }],
            ],
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://github.com/make-use-of-data/website/tree/main/website',
            path: 'blog',
            routeBasePath: 'blog',
            include: ['*.md', '*.mdx'],
            // ...
          },
          theme: {
            customCss: [require.resolve('./src/styles/custom.css'), require.resolve('./src/styles/custom.scss')],
          },
          sitemap: {
            changefreq: 'hourly',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-VKV4WP95W2',
            anonymizeIP: true,
          },
          debug: true, // This will enable the plugin in production
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        imageZoom: {
          // CSS selector to apply the plugin to, defaults to '.markdown img'
          selector: '.markdown img',
          // Optional medium-zoom options
          // see: https://www.npmjs.com/package/medium-zoom#options
          options: {
            margin: 24,
            background: '#8c3232',
            scrollOffset: 0,
            container: '#zoom-container',
            template: '#zoom-template',
          },
        },
        hideableSidebar: true,
        autoCollapseSidebarCategories: true,
        navbar: {
          hideOnScroll: true,
          title: 'MakeUseofData',
          logo: {
            alt: 'MakeUseofData logo',
            src: 'img/logo-simple.svg',
          },
          items: [
            {
              to: '/docs/intro',
              label: "About",
              position: "left",
              activeBaseRegex: `/docs/`
            },
            {
              to: '/data-science-notes/intro',
              label: "Data Science Notes",
              position: "left",
              activeBaseRegex: `/data-science-notes/`
            },
            {
              to: '/making-use-of-data/intro',
              label: "Making Use of Data",
              position: "left",
              activeBaseRegex: `/making-use-of-data/`
            },
            { to: '/blog', label: 'OneLoneDatum Blog', position: 'left' },
            {
              href: 'https://github.com/make-use-of-data/website',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Site Content',
              items: [
                {
                  label: 'Data Science Notes',
                  to: '/docs/intro',
                },
                // {

                // },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/make-use-of-data',
                },
                // {
                //   label: 'Twitter',
                //   href: 'https://twitter.com/docusaurus',
                // },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/make-use-of-data/website',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} MakeUseofData.com Built with Docusaurus.`,
        },
        prism: {
          theme: require('prism-react-renderer/themes/github'),
          darkTheme: require('prism-react-renderer/themes/dracula'),
        },
      }),
  })
}

module.exports = createConfig;
