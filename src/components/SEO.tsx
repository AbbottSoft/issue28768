/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from "react"
import { Helmet, HelmetProps } from "react-helmet"

import { useSEOMetadata } from "../queries"

interface SEOProps {
  readonly title: HelmetProps["title"]
  readonly description?: JSX.IntrinsicElements["meta"]["content"]
  readonly lang?: JSX.IntrinsicElements["html"]["lang"]
  readonly meta?: HelmetProps["meta"]
}

const SEO: FC<SEOProps> = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
}) => {
  const siteMetadata = useSEOMetadata()

  const metaDescription = description ?? siteMetadata.description
  const htmlAttributes = {
    lang,
  }
  const titleTemplate = `%s | ${siteMetadata.title}`
  const defaultMeta: HelmetProps["meta"] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  return (
    <Helmet
      htmlAttributes={htmlAttributes}
      title={title}
      titleTemplate={titleTemplate}
      meta={defaultMeta.concat(meta)}
    />
  )
}

export default SEO
