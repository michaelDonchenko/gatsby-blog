import { Link } from "gatsby"
import React from "react"
import * as styles from "./styles.module.css"

const HomePageBlogComponent = ({ blog }) => {
  return (
    <Link className={styles.link} to={`/blog/${blog.node.slug}`}>
      <div className={styles.container}>
        <img
          style={{ maxWidth: "100%" }}
          src={blog.node.previewImage && blog.node.previewImage.file.url}
          alt={
            blog.node.previewImage ? blog.node.previewImage.file.name : "Error"
          }
        />
        <h3>{blog.node.title}</h3>
        <p>{blog.node.date}</p>
      </div>
    </Link>
  )
}

export default HomePageBlogComponent
