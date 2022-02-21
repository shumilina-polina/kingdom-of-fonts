const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Бесплатная кириллица`,
    description: `Лучшие бесплатные кириллические шрифты для коммерческих и личных проектов.`,
    author: `Андрей Павлушин`,
    keywords: `подборка,шрифты,fonts,кириллица,бесплатно`,
    ogImage: `images/seo.jpg`,
    ogImageVk: `images/seo-vk.jpg`,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pavlushin.design',
        sitemap: 'https://pavlushin.design/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ["/restore", "/thanks"] }, {userAgent: 'Yandex', allow: '/', disallow: ["/restore", "/thanks"]}, {userAgent: 'Googlebot', allow: '/', disallow: ["/restore", "/thanks"]}]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/thanks`, `/restore`],
      }
    },
    `gatsby-plugin-htaccess`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Царство шрифтов`,
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
    "gatsby-plugin-use-query-params",
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
  developMiddleware: app => {
    const middleware = createProxyMiddleware({
      target: "http://pavlushin.design.docker.localhost:9000",
      followRedirects: false
    })
    app.use("/login", middleware)
    app.use("/logout", middleware)
    app.use("/api", middleware)
  },
};
