import Head from "next/head";
import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  desc: string;
  ogImage?: string;
  url?: string;
  author?: string;
}

export default function Layout({
  children,
  title,
  desc,
  ogImage,
  url,
  author,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* OG Card */}

        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ByFrXst" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
