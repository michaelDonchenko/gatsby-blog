import React from "react"
import Layout from "../components/layout/Layout"
import { MostRecentBlogs } from "../graphql/contentfullQueries"
import BackgroundImageQuery from "../graphql/background-image-query"
import { Col, Container, Row } from "react-bootstrap"
import HomePageBlogComponent from "../components/blog-post/HomePageBlogComponent"
import Seo from "../components/seo/Seo"

const Index = () => {
  const data = MostRecentBlogs()
  const backgroundImage = BackgroundImageQuery()

  const filteredBlogs = data.allContentfulBlogPost.edges.filter(
    blog => blog.node.slug !== "doNotDelete"
  )

  const src =
    backgroundImage.allContentfulBackgroundImage.edges[0].node.background.file
      .url

  return (
    <Layout>
      <Seo dynamicTitle="Home page" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={src}
          style={{ width: "100%" }}
          alt="Could not load the image"
        />
      </div>

      <h1>Michael Donchenko</h1>
      <h2>Full stack we developer</h2>
      <h3>Welcome to my Personal Blog</h3>

      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={12} md={6}>
            {filteredBlogs[0] ? (
              <HomePageBlogComponent blog={filteredBlogs[0]} />
            ) : (
              <p>No blog posts yet</p>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            {filteredBlogs[1] ? (
              <HomePageBlogComponent blog={filteredBlogs[1]} />
            ) : null}
          </Col>
          <Col xs={12} md={6}>
            {filteredBlogs[2] ? (
              <HomePageBlogComponent blog={filteredBlogs[2]} />
            ) : null}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index
