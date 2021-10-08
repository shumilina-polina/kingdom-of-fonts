// const path = require("path")

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const contentContent = path.resolve("./src/templates/category.js")

//   return graphql(`
//     {
//       content: allContentfulGranichMainContentCard(
//         filter: {
//           contentType: {
//             in: ["Youtube", "Youtube + Medium + Behance", "Youtube + Pinterest"]
//           }
//         }
//       ) {
//         edges {
//           node {
//             contentSlug
//             contentYoutubeVideoLink
//             contentBanner
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     const contents = result.data.content.edges

//     contents.forEach(content => {
//       createPage({
//         path: content.node.contentSlug,
//         component: contentContent,
//         context: {
//           slug: content.node.contentSlug,
//           banner: content.node.contentBanner,
//         },
//       })
//     })
//   })
// }