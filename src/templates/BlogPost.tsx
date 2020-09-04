/** @jsx jsx */
import { jsx } from "@emotion/core"
import { FC } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import {
  BlogPostByPathQuery,
  Maybe,
  MarkdownRemarkFrontmatter,
} from "../graphqlTypes"

import { linkContainerStyles } from "./BlogPost.styles"

interface BlogPostProps {
  readonly data: BlogPostByPathQuery
  readonly pageContext: {
    readonly next?: Maybe<MarkdownRemarkFrontmatter>
    readonly previous?: Maybe<MarkdownRemarkFrontmatter>
  }
}

const BlogPost: FC<BlogPostProps> = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { next, previous } = pageContext

  return (
    <Layout>
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div css={linkContainerStyles}>
        {previous && <Link to={previous.path}>{previous.title}</Link>}
        {next && <Link to={next.path}>{next.title}</Link>}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      ...BlogPost
    }
  }
`

export default BlogPost
