/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaInstagram } from "react-icons/fa"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            paddingTop: "2rem",
            marginTop: "2rem",
            borderColor: `#000`,
            borderTopStyle: `dotted`,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            © {new Date().getFullYear()} Max Anton Brewer
            <div>
              <a
                style={{ paddingRight: "1rem" }}
                href="https://twitter.com/deepfates"
              >
                <FaTwitter />
              </a>
              <a href="https://instagram.com/deepfates">
                <FaInstagram />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
