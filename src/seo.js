/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"


 const SEO = ({
   description,
   lang,
   meta,
   title,
   keywords,
   ogImage,
   url,
   ogImageVk,
   socialDescription,
   noIndex,
 }) => {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
             keywords
             ogImage
             ogImageVk
             siteUrl
           }
         }
       }
     `
   )

   const metaDescription = description || site.siteMetadata.description
   const metaKeywords = keywords || site.siteMetadata.keywords
   const metaOgImage = ogImage || site.siteMetadata.ogImage
   const metaTitle = title || site.siteMetadata.title
   const metaOgUrl = url || site.siteMetadata.siteUrl
   const metaOgImageVk = ogImageVk || site.siteMetadata.ogImageVk
  //  const metaOgUrl = ogImage
  //  const metaOgImageVk = ogImageVk
   const metaSocialDescription =
     socialDescription || description || site.siteMetadata.description

   const defaultMeta = [
     {
       name: `description`,
       content: metaDescription,
     },
     {
       property: `og:title`,
       content: metaTitle,
     },
     {
       property: `og:description`,
       content: metaDescription,
     },
     {
       property: `vk:image`,
       content: metaOgImageVk,
     },
     {
       property: `og:image`,
       content: metaOgImage,
     },

     {
       property: `og:image:width`,
       content: "1200",
     },
     {
       property: `og:image:height`,
       content: "630",
     },
     {
       property: `og:type`,
       content: `website`,
     },
     {
       property: `og:url`,
       content: metaOgUrl,
     },
     {
       name: `twitter:title`,
       content: metaTitle,
     },
     {
       name: `twitter:image`,
       content: metaOgImage,
     },
     {
       name: `twitter:description`,
       content: metaSocialDescription,
     },
     {
       name: `twitter:card`,
       content: `summary_large_image`,
     },
     {
       name: `keywords`,
       content: metaKeywords,
     },
    //  {
    //    name: `p:domain_verify`,
    //    content: `7110133d060664b8d775d9aed52f11c2`,
    //  },
   ]

   const propMeta = defaultMeta.concat(meta || [])

   return (
     <Helmet htmlAttributes={{ lang }} title={metaTitle} meta={defaultMeta.concat(propMeta)}>
       {url && <link rel="canonical" href={metaOgUrl} />}
       {noIndex && <meta name="robots" content="noindex, nofollow" />}

     </Helmet>
   )
 }

 SEO.defaultProps = {
   lang: `ru`,
   meta: [],
   description: ``,
 }

export default SEO
