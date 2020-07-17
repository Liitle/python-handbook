import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

import headerStyles from "./header.module.css"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className={headerStyles.headerContainer}>
    <h1>
      <Link
        to="/"
        css={css`
              text-decoration: none;
              color: inherit;
            `}
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header
