/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import FooterLinks from "./footerlinks"
import "./layout.css"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "logo head"
    "children children"
    "foot-links foot";
  grid-template-columns: 28.89%;
  grid-template-rows: 10.34% auto 10.34%;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
`
const Logo = styled.div`
  align-items: center;
  justify-content: center;
  width: 28.89%;
  grid-area: logo;
  padding-left: 2rem;
`
const Head = styled.div`
  grid-area: head;
`
const Children = styled.div`
  height: 100 - 10.34%;
  grid-area: children;
`
const FootLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: foot-links;
`
const Foot = styled.div`
  display: flex;
  align-items: center;
  grid-area: foot;
`
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
    <Grid>
      <Logo>
      <img src="/deepfates.svg" alt="logo" />
      </Logo>
      <Head>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </Head>
      <Children>
        <main>{children}</main>
      </Children>
      <FootLinks>
        <FooterLinks />
      </FootLinks>
      <Foot>
        <Footer />
      </Foot>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
