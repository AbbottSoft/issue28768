import { useStaticQuery, graphql } from "gatsby"

import { SeoMetadataFragment } from "../graphqlTypes"

export const SEOMetadataFragment = graphql`
  fragment SEOMetadata on SiteSiteMetadata {
    title
    description
    author
  }
`
type UseSEOMetadata = () => SeoMetadataFragment
export const useSEOMetadata: UseSEOMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            ...SEOMetadata
          }
        }
      }
    `
  )

  return siteMetadata
}
