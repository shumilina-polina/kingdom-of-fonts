/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 // import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 type metaType = Array<{
   property?: string
   name?: string
   content?: string
 }>
 type Props = {
   description?: string
   lang?: string
   meta?: metaType
   title?: string
   keywords?: string[]
   ogImage?: string
   url?: string
   ogImageVk?: string
   socialDescription?: string
 }
 
 const SEO: React.FC<Props> = ({
   description,
   lang,
   meta,
   title,
   keywords,
   ogImage,
   url,
   ogImageVk,
   socialDescription,
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
   const metaSocialDescription =
     socialDescription || description || site.siteMetadata.description
 
   const defaultMeta: metaType = [
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
     {
       name: `p:domain_verify`,
       content: `7110133d060664b8d775d9aed52f11c2`,
     },
   ]
 
   const propMeta: metaType = defaultMeta.concat(meta || [])
 
   return (
     <Helmet htmlAttributes={{ lang }} title={metaTitle} meta={defaultMeta.concat(propMeta)}>
       {url && <link rel="canonical" href={metaOgUrl} />}
     </Helmet>
   )
 }
 
 SEO.defaultProps = {
   lang: `ru`,
   meta: [],
   description: ``,
 }
 
 // SEO.propTypes = {
 //   description: PropTypes.string,
 //   lang: PropTypes.string,
 //   meta: PropTypes.arrayOf(PropTypes.object),
 //   title: PropTypes.string.isRequired,
 // }
 
 export default SEO
 