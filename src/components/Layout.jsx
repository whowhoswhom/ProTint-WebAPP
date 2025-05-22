import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title = 'ProTint' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-sans bg-neutral-950 text-gray-200 min-h-screen">
        {children}
      </div>
    </>
  );
}
