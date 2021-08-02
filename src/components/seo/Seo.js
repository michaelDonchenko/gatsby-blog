import { Helmet } from "react-helmet"
import StaticQuery from "../../graphql/metadataQuery"
import React from "react"

const Seo = ({ dynamicTitle }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = StaticQuery()

  return <Helmet title={`${dynamicTitle} | ${title}`}></Helmet>
}

export default Seo
