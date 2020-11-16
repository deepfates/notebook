import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "max-no-bg.png" }) {
        childImageSharp {
          fluid(
            fit: CONTAIN
            duotone: { highlight: "#f8f8f8", shadow: "#090909" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      colorImage: file(relativePath: { eq: "max.jpg" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#56b0ca", shadow: "#090909" }) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
