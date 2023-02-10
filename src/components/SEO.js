import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata.jsx"

export default function SEO({ title, description, pathname, children }) {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  console.log('logo', seo.image)
  console.log('url', seo.url)

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="image" content="http://placekitten.com/200/200" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image" content="http://placekitten.com/200/200" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" type="image/png" href={seo.image} />
      {children}
    </>
  )
}