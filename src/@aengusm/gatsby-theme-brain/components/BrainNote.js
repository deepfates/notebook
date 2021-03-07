import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../../../components/layout"
import styled from "styled-components"

const BrainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "pre-title title"
    "pre-content content";
  grid-template-columns: 28.89vw;
  grid-template-rows: 11.72vh;
  width: 100%;

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
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: title;
`

const PreContent = styled.div`
  grid-area: pre-content;
`
const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  grid-area: content;
  padding-right: 2em;
  padding-top: 10.34vh;
  padding-bottom: 10.34vh;
  max-width: 58ch;
  }
`
const Ref = styled.div`
  font-size: 0.715rem;
`

const BrainNote = ({ note }) => {
  let references = []
  let referenceBlock
  if (note.inboundReferencePreviews != null) {
    references = note.inboundReferencePreviews.map(ref => (
      <li>
        <a href={ref.source}>{ref.source}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ))

    if (references.length > 0) {
      referenceBlock = (
        <Ref>
          <h2>Linked References</h2>
          <ul>{references}</ul>
        </Ref>
      )
    }
  }

  let externalRefBlock = []
  if (note.externalInboundReferences !== null) {
    let refs = note.externalInboundReferences.map(ref => (
      <li>
        <a href={ref.sourceUrl}>
          {ref.siteName}/{ref.sourcePage}
        </a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ))
    if (refs.length > 0) {
      externalRefBlock = (
        <>
          <h2>External References</h2>
          <ul>{refs}</ul>
        </>
      )
    }
  }
  return (
    <Layout>
      <div id="brainNote">
        <BrainGrid>
          <PreTitle />
          <Title>
            <h1 style={{ marginBottom: 0 }}>{note.title}</h1>
          </Title>
          <PreContent />
          <Content>
            <MDXRenderer>{note.childMdx.body}</MDXRenderer>
            {referenceBlock}
            {externalRefBlock}
          </Content>
        </BrainGrid>
      </div>
    </Layout>
  )
}

export default BrainNote
