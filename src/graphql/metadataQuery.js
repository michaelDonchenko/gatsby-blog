import { useStaticQuery, graphql } from "gatsby"

const StaticQuery = () => {
  const siteMetadataQuery = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return siteMetadataQuery
}

export default StaticQuery
