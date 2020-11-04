import React from "react"
import { Link } from "gatsby"
import { GiSpellBook } from "react-icons/gi"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ textAlign: "center" }}>
      This is the website of Max Anton Brewer.
    </h1>
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <p>
          I'm a technologist and entrepreneur living in Albuquerque, New Mexico.
        </p>
        <p>
          I co-founded <a href="https://organicbooks.net">Organic Books</a>. I'm
          also a writer, designer and coder.
        </p>
        <p>
          The main thing to do here, currently, is to look at my{" "}
          <Link to="/notebook/" as="h2">
            <GiSpellBook /> notebook.
          </Link>{" "}
        </p>
      </div>
      <div style={{ width: `30vw`, marginLeft: `1.45rem` }}>
        <Image />
      </div>
    </div>

    <br />
  </Layout>
)

export default IndexPage
