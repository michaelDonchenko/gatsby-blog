import React from "react"
import * as styles from "./styles.module.css"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
  return (
    <div className={styles.flexCenterDiv}>
      {pageContext.previousPagePath && (
        <span>
          <Link className={styles.link} to={pageContext.previousPagePath}>
            Previous page
          </Link>
        </span>
      )}
      {
        <span>
          Page {pageContext.humanPageNumber} out of {pageContext.numberOfPages}
        </span>
      }
      {pageContext.nextPagePath && (
        <span>
          <Link className={styles.link} to={pageContext.nextPagePath}>
            Next page
          </Link>
        </span>
      )}
    </div>
  )
}

export default Pager
