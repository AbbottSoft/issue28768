/** @jsx jsx */
import { Link } from "gatsby"
import { FC } from "react"
import { jsx } from "@emotion/core"

import {
  headerStyles,
  headerContentStyles,
  h1Styles,
  linkStyles,
} from "./Header.styles"

interface HeaderProps {
  readonly siteTitle: string
}

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <header css={headerStyles}>
    <div css={headerContentStyles}>
      <h1 css={h1Styles}>
        <Link to="/" css={linkStyles}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
