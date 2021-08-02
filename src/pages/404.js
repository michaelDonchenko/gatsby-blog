import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo/Seo"

const NotFound = () => {
  return (
    <Layout>
      <Seo dynamicTitle="Page not found" />
      <p>Page not found</p>
    </Layout>
  )
}

export default NotFound
