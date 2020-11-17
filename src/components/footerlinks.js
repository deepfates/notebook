import React from "react"
import { GiPhotoCamera, GiRaven } from "react-icons/gi"
import styled from "styled-components"

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`

const FooterLinks = () => (
  <Icons>
    <a style={{ paddingRight: "1rem" }} href="https://twitter.com/deepfates">
      <GiRaven size="1.45rem" />
    </a>
    <a href="https://instagram.com/deepfates">
      <GiPhotoCamera size="1.45rem" />
    </a>
  </Icons>
)

export default FooterLinks
