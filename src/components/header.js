import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiSpellBook, GiRobotAntennas } from "react-icons/gi"
import styled from "styled-components"
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-right: 2rem;
`
const Spacer = styled.div`
  padding-left: 2rem;
`

const Header = ({ siteTitle }) => (
  <Navbar>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navbar>
      <Link to="/notebook/">
        <GiSpellBook size="1.45rem" />
      </Link>
      <Spacer />
      <a href="https://robotface.substack.com/">
        <GiRobotAntennas size="1.45rem" />
      </a>
    </Navbar>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
