/** @jsx jsx */
import { jsx } from "@emotion/core"
import { FC } from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { imageContainerStyles } from "./index.styles"

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div css={imageContainerStyles}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
