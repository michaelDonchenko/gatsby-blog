import React from "react"
import Layout from "../components/layout/Layout"
import * as styles from "./styles.module.css"
import { useForm, ValidationError } from "@formspree/react"
import { Col, Container, Row } from "react-bootstrap"
import Seo from "../components/seo/Seo"

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjqzykb")

  const showSuccess = () => {
    if (state.succeeded) {
      return <p style={{ color: "green" }}>Message sent succefully</p>
    }
  }

  return (
    <Layout>
      <Seo dynamicTitle="Contact page" />
      <h1>Contact me</h1>

      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.flexDiv}>
              <form
                className={styles.form}
                method="post"
                onSubmit={handleSubmit}
              >
                <div className={styles.formGroup}>
                  <label for="email">Your Email:</label>
                  <input
                    className={styles.input}
                    name="email"
                    type="email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label for="message">Message:</label>
                  <textarea
                    className={styles.input}
                    name="message"
                    type="text"
                    required
                  />
                </div>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                {showSuccess()}

                <input
                  className={styles.myButton}
                  type="submit"
                  value={state.submitting ? "Sending..." : "Send Message"}
                  disabled={state.succeeded}
                />
              </form>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className={styles.flexColumn}>
              <h4>Links:</h4>

              <a href="https://michael-dev.com" target="_blank">
                Personal website - michael-dev.com
              </a>
              <a
                href="https://www.linkedin.com/in/michael-donchenko-39aa711b3/"
                target="_blank"
              >
                Linkedin
              </a>
              <a href="https://github.com/michaelDonchenko" target="_blank">
                Github
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact
