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
  grid-template-columns: 28.89vw;
  grid-template-rows: 10.34vh auto 10.34vh;
  margin: 0 auto;
  width: 100%;
`
const Logo = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  grid-area: logo;
  border-bottom: 1px solid;
  border-color: #f8f8f8;
`
const Head = styled.div`
  grid-area: head;
  border-bottom: 1px solid;
  border-color: #f8f8f8;
`
const Children = styled.div`
  grid-area: children;
`
const FootLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: foot-links;
  border-top: 1px solid;
  border-color: #f8f8f8;
`
const Foot = styled.div`
  display: flex;
  align-items: center;
  grid-area: foot;
  border-top: 1px solid;
  border-color: #f8f8f8;
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
        <img src="/deepfates.svg" alt="logo" height="80%" />
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
