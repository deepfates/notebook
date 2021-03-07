import React from "react"
import { Link } from "gatsby"
import { GiSpellBook, GiRobotAntennas } from "react-icons/gi"
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

    article > p:first-child:first-letter {
      float: left;
      font-family: Manrope;
      font-size: 4rem;
      line-height: 1;
      padding-top: .375rem;
      padding-right: 8px;
      padding-left: 3px;
      font-style: normal;
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
  max-height: 100vh;
`
const PreContent = styled.div`
  grid-area: pre-content;
`
const Content = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: content;
  padding-right: 2rem;
  padding-top: 10.34vh;
  padding-bottom: 10.34vh;
  max-width: 58ch;
`
const IndexPage = () => (
  <Layout>
    <IndexGrid>
      <SEO title="Home" />
      <PreTitle />
      <Title>
        <h1 style={{ marginBottom: 0 }}>
          The Presentation of Self in Internet Life
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
          Welcome to my website. I'm Max, aka <strong>@deepfates</strong>. I'm a
          technologist and entrepreneur in Albuquerque, New Mexico. My
          background is in whole-systems design and long-term thinking.
        </p>
        <p>
          I founded <a href="https://organicbooks.net">Organic Books</a>, a
          used-and-new bookstore in Nob Hill. I am a book person, in many senses
          of the term.
        </p>
        <p>
          I also write, design, and code. I think a lot about intelligence,
          language, computers and books. The main thing to do here is{" "}
          <strong>
            sign up to my newsletter about human-computer interfaces:{" "}
            <a href="https://robotface.substack.com/">
              <GiRobotAntennas />
              Robot Face
            </a>
          </strong>
        </p>
        <p>
          <em>
            {" "}
            You can also follow me on the bird site{" "}
            <a href="https://twitter.com/deepfates">@deepfates</a>, or snoop
            around my{" "}
            <Link to="/notebook/" as="h2">
              <GiSpellBook />
              living notebook.
            </Link>{" "}
            .
          </em>
        </p>
      </Content>
    </IndexGrid>
  </Layout>
)

export default IndexPage
