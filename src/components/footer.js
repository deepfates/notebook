import React from "react"

const Footer = () => (
  <footer>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      © {new Date().getFullYear()} Max Anton Brewer
    </div>
  </footer>
)

export default Footer
