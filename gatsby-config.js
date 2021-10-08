module.exports = {
  siteMetadata: {
    title: `Бесплатная кириллица`,
    description: `Подборка лучших кириллических шрифтов с бесплатной коммерческой лицензией для ваших проектов.`,
    author: `Андрей Павлушин`,
    keywords: `подборка,шрифты,fonts,кириллица,бесплатно`,
    ogImage: `images/index.jpg`,
    ogImageVk: `images/index-vk.jpg`,
    siteUrl: `https://pavlushin.design`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",

    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Царство шрифтоы`,
        short_name: `Fonts`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icons: [
          {
            "src": "favicons/32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
        ],
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'sdmnf6yujh6f',
        accessToken: 'pYv88yKV35GwYHXsBBkHtJNTz2Qxnfff6KiDpnSWQ-4',
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/, // See below to configure properly
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     // offset: -100,
    //     duration: 1000,
    //   }
    // },

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Roboto\:400,500,600`],
    //     display: "swap",
    //   },
    // },
  ],
};
