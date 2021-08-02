const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const blogsPageTemplate = path.resolve("./src/templates/blogsPage.js")

  const blogs = await graphql(`
    query MyQuery {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const filterDummyBlog = blogs.data.allContentfulBlogPost.edges.filter(
    blog => blog.node.slug !== "doNotDelete"
  )

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: filterDummyBlog, // An array of objects
    itemsPerPage: 5, // How many items you want per page
    pathPrefix: "/blogs", // Creates pages like `/blog`, `/blog/2`, etc
    component: blogsPageTemplate, // Just like `createPage()`
  })

  filterDummyBlog.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
