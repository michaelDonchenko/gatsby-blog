import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const About = ({ data }) => {
  const {
    contentfulAboutMe: { aboutMeRichText },
  } = data

  const document = JSON.parse(aboutMeRichText.raw)

  const options = {
    renderNode: {
      // [BLOCKS.EMBEDDED_ASSET]: node => {
      //   const ref =
      //     aboutMeRichText.references.length > 0
      //       ? references.find(
      //           ref => ref.contentful_id === node.data.target.sys.id
      //         )
      //       : null
      //   return (
      //     <>
      //       <img
      //         style={{ width: "300px", margin: "1rem auto", maxWidth: "100%" }}
      //         src={ref.file.url}
      //         alt="Could not load the image"
      //       />
      //     </>
      //   )
      // },
    },
  }

  return (
    <Layout>
      <h1>About me</h1>

      <div>{documentToReactComponents(document)}</div>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulAboutMe {
      aboutMeRichText {
        raw
      }
    }
  }
`

export default About
