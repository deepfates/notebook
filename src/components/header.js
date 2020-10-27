import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiSpellBook } from "react-icons/gi"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderColor: `#000`,
      borderBottomStyle: `dotted`,
      marginBottom: `1.45rem`,
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.175rem 1.0875rem`,
      }}
    >
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
    <div
      style={{
        margin: `0 auto`,
        padding: `0.175rem 1.0875rem`,
      }}
    >
      <Link to="/notebook/">
        <GiSpellBook size="1.45rem" />
      </Link>{" "}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
