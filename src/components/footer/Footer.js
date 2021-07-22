import React from "react"
import metadataQuery from "../../graphql/metadataQuery"

const Footer = () => {
  const data = metadataQuery()

  return (
    <footer
      style={{
        marginTop: `2rem`,
        padding: "1rem",
      }}
    >
      © {new Date().getFullYear()}, Built by {data.site.siteMetadata.author}
    </footer>
  )
}

export default Footer
