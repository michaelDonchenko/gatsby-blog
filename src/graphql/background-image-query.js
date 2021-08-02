import { useStaticQuery, graphql } from "gatsby"

const BackgroundImageQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBackgroundImage {
        edges {
          node {
            background {
              file {
                contentType
                url
              }
              title
            }
          }
        }
      }
    }
  `)
  return data
}

export default BackgroundImageQuery
