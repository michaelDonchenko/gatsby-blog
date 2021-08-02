import { Link } from "gatsby"
import React from "react"
import * as styles from "./styles.module.css"

const BlogPost = ({ blog }) => {
  return (
    <Link className={styles.link} to={`/blog/${blog.node.slug}`}>
      <div className={styles.container}>
        <h3>{blog.node.title}</h3>
        <p>{blog.node.date}</p>
      </div>
    </Link>
  )
}

export default BlogPost
