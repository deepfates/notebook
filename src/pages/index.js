import React from "react"
import { Link } from "gatsby"
import { GiSpellBook } from "react-icons/gi"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexGrid = styled.div`
  display: grid;
  grid-template-areas:
    "pre-title title"
    "pre-author author"
    "artwork  artwork"
    "pre-content content";
  grid-template-columns: 28.89%;
  grid-template-rows: 11.72% 6.35%;
  width: 100%;
`

const PreTitle = styled.div`
  height: 11.72%;
  width: 100 - 28.89%;
  grid-area: pre-title;
`
const Title = styled.div`
  height: 11.72%;
  width: 100 - 28.89%;
  align-items: start;
  display: flex;
  grid-area: title;
`
const PreAuthor = styled.div`
  height: 6.35%;
  width: 28.89%;
  grid-area: pre-author;
`
const Author = styled.div`
  height: 6.35%;
  width: 100 - 28.89%;
  align-items: center;
  display: flex;
  grid-area: author;
`
const Artwork = styled.div`
  height: 100% - 10.34 - 11.72 - 6.35;
  overflow: hidden;
  position: relative;
  width: 100vw;
  grid-area: artwork;
  height: 100vh;
`
const PreContent = styled.div`
  height: 6.35%;
  width: 28.89%;
  grid-area: pre-content;
`
const Content = styled.div`
  width: 100 - 28.89%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: content;
  height: 100vh;
  padding-right: 2rem;
`
const IndexPage = () => (
  <Layout>
    <IndexGrid>
      <SEO title="Home" />
      <PreTitle />
      <Title>
        <h1>A personal website.</h1>
      </Title>
      <PreAuthor />
      <Author>
        <i>Max Anton Brewer</i>
      </Author>
      <Artwork>
        <Image />
      </Artwork>
      <PreContent />
      <Content>
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
      </Content>
    </IndexGrid>
  </Layout>
)

export default IndexPage
