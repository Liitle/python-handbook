/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `JupyterNotebook`) {
    const slug = createFilePath({ node, getNode, basePath: "lectures" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query lecturesQuery {
      allJupyterNotebook {
        edges {
          node {
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)
  result.data.allJupyterNotebook.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/lecture.tsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
