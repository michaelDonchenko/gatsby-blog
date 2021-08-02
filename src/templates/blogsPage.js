import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import Pager from "../components/pager/Pager"
import BlogPost from "../components/blog-post/BlogPost"
import Seo from "../components/seo/Seo"

const blogsPage = props => {
  const { pageContext, data } = props

  const filteredBlogs = data.allContentfulBlogPost.edges.filter(
    blog => blog.node.slug !== "doNotDelete"
  )

  return (
    <Layout>
      <Seo dynamicTitle="Blogs page" />
      <Pager pageContext={pageContext} />

      {filteredBlogs.length === 0 && <p>No blogs posts yet</p>}

      {filteredBlogs.map((blog, i) => (
        <BlogPost key={i} blog={blog} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    allContentfulBlogPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          date(formatString: "dddd MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
`

export default blogsPage
