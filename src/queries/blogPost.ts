import { graphql } from "gatsby"

export const BlogPostFragment = graphql`
  fragment BlogPost on MarkdownRemark {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
`
