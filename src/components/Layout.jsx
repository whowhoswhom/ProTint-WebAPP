import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title = 'ProTint' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-sans bg-neutral-950 text-gray-200 min-h-screen">
        {children}
      </div>
    </>
  );
}
