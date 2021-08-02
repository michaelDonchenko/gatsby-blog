import { graphql, useStaticQuery } from "gatsby"

//quering all blog posts
export const MostRecentBlogs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(
          sort: { fields: date, order: DESC }
          limit: 3
          skip: 0
        ) {
          edges {
            node {
              title
              date(formatString: "MMMM Do, YYYY")
              slug
              previewImage {
                file {
                  url
                  fileName
                }
              }
            }
          }
        }
      }
    `
  )
  return data
}
