import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import * as styles from "./styles.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const blog = props => {
  const document = JSON.parse(props.data.contentfulBlogPost.body.raw)
  // console.log(props.data.contentfulBlogPost.body.references)

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // console.log(node.data.target.sys.id)
        const ref = props.data.contentfulBlogPost.body.references.find(
          ref => ref.contentful_id === node.data.target.sys.id
        )

        return (
          <>
            <img
              style={{ maxWidth: "100%", margin: "1rem auto" }}
              src={ref.file.url}
              alt="Could not load the image"
            />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{props.data.contentfulBlogPost.title}</h1>

        <hr></hr>
        <div className={styles.contentDiv}>
          {documentToReactComponents(document, options)}
        </div>
      </div>
    </Layout>
  )
}

//queries
export const blogQuery = graphql`
  query blogPost($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      date(fromNow: true)
      slug
      title
      body {
        raw
        references {
          file {
            contentType
            fileName
            url
          }
          contentful_id
        }
      }
    }
  }
`

export default blog
