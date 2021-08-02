import React from "react"
import Layout from "../components/layout/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Seo from "../components/seo/Seo"

const About = ({ data }) => {
  const {
    contentfulAboutMe: { aboutMeRichText },
  } = data

  const document = JSON.parse(aboutMeRichText.raw)

  return (
    <Layout>
      <Seo dynamicTitle="About page" />
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
