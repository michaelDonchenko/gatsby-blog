import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import * as styles from "./styles.module.css"
import "./globalStyles.module.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import metadataQuery from "../../graphql/metadataQuery"

const Layout = ({ children }) => {
  const data = metadataQuery()

  return (
    <main>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className={styles.container}>
        <div className={styles.flex1}>{children}</div>

        <Footer />
      </Container>
    </main>
  )
}

export default Layout
