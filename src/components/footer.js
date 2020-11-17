import React from "react"
import styled from "styled-components"

const Copyright = styled.div`
  display: "flex"
  justify-content: space-between;
  font-size: 0.715rem
`

const Footer = () => (
  <footer>
    <Copyright>
      <i>© {new Date().getFullYear()} Max Anton Brewer</i>
    </Copyright>
  </footer>
)

export default Footer
