import React from "react"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../../../components/layout"
import styled from "styled-components"

const BrainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "pre-title title"
    "pre-content content";
  grid-template-columns: 28.89%;
  grid-template-rows: 11.72%;
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
  padding-right: 2em;
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
        <>
          <h2>Linked References</h2>
          <ul>{references}</ul>
        </>
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
            <h1>{note.title}</h1>
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
