import React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"
import * as styles from "./styles.module.css"

const Header = ({ siteTitle }) => {
  return (
    <Navbar className={styles.navBar} collapseOnSelect expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.brandLink} to="/">
              {siteTitle}
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
