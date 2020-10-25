import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Max.</h1>
    <p>
      I'm a technologist and entrepreneur living in Albuquerque, New Mexico.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/notebook/">Take a look at my notebook</Link> <br />
  </Layout>
)

export default IndexPage
