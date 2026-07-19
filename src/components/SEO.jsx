import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, type = "website", schema, image = "https://bharath2006.site/seo-banner.jpg" }) => {
  const siteUrl = "https://bharath2006.site";
  const fullUrl = `${siteUrl}${url}`;
  const defaultTitle = "Bharath V | AI Engineer & Full Stack Developer";
  const defaultDescription =
    "Portfolio of Bharath V, an expert Software Engineer, AI Engineer, and Full Stack Developer based in Bangalore, India.";

  const seoTitle = title ? `${title} | Bharath V` : defaultTitle;
  const seoDescription = description || defaultDescription;

  // Base Organization and Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bharath V",
    "alternateName": ["BharathDotExe", "Bharath Dot Exe", "Bharath.exe"],
    "jobTitle": "Software Engineer & AI Developer",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/bharathDotExe",
      "https://linkedin.com/in/bharath-v",
      "https://twitter.com/bharathDotExe"
    ],
    "image": [
      "https://bharath2006.site/Bharath%20Dot%20Exe.jpeg",
      "https://bharath2006.site/Bharath%20V%20Portfolio.jpeg",
      "https://bharath2006.site/Bharath%20V.jpeg",
      "https://bharath2006.site/bharath.jpeg",
      "https://bharath2006.site/bharathdotexe.jpeg",
      "https://bharath2006.site/bharathv.jpeg",
      "https://bharath2006.site/about-bharathdotexe.jpeg",
      "https://bharath2006.site/who-is-bharathdotexe.jpeg",
      "https://bharath2006.site/profile/profile.jpeg",
      "https://bharath2006.site/profile/profile%201.jpeg"
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || personSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
