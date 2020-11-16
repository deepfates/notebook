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
  grid-template-columns: 28.89vw;
  grid-template-rows: auto 6.35vh;
  width: 100%;
  height: 100%;
`

const PreTitle = styled.div`
  grid-area: pre-title;
`
const Title = styled.div`
  display: flex;
  align-items: end;
  grid-area: title;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding-top: 2rem;
  height: 100%;
`
const PreAuthor = styled.div`
  grid-area: pre-author;
  border-bottom: 1px solid;
  border-color: #f8f8f8;
`
const Author = styled.div`
  align-items: center;
  display: flex;
  grid-area: author;
  border-bottom: 1px solid;
  border-color: #f8f8f8;
`
const Artwork = styled.div`
  overflow: hidden;
  position: relative;
  width: 100vw;
  grid-area: artwork;
  height: 100vh;
`
const PreContent = styled.div`
  grid-area: pre-content;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: content;
  padding-right: 2rem;
  padding-top: 10.34vh;
  padding-bottom: 10.34vh;
`
const IndexPage = () => (
  <Layout>
    <IndexGrid>
      <SEO title="Home" />
      <PreTitle />
      <Title>
        <h1 style={{ marginBottom: 0 }}>
          A personal website, designed and coded by hand.
        </h1>
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
