import { useStaticQuery, graphql } from "gatsby"

export const SiteTitleFragment = graphql`
  fragment SiteTitle on Site {
    siteMetadata {
      title
    }
  }
`

export type UseSiteTitle = () => string
export const useSiteTitle: UseSiteTitle = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        ...SiteTitle
      }
    }
  `)

  return data.site.siteMetadata.title
}
