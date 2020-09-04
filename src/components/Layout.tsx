/** @jsx jsx */
import { FC, Fragment, ReactNode } from "react"
import { jsx } from "@emotion/core"

import { useSiteTitle } from "../queries"

import Header from "./Header"
import { layoutStyles } from "./Layout.styles"
import "./Layout.css"

interface LayoutProps {
  readonly children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const siteTitle = useSiteTitle()

  return (
    <Fragment>
      <Header siteTitle={siteTitle} />
      <div css={layoutStyles}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
