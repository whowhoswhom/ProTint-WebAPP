import React from 'react';
import Head from 'next/head';

export default function Layout({ children, title = 'ProTint' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Simple header with shrinking logo on scroll */}
      <header
        className="fixed top-0 left-0 z-50 p-4 flex items-center"
        id="protint-header"
      >
        <img
          src="/assets/protint.svg"
          alt="ProTint"
          className="w-32 transition-transform"
        />
      </header>
      <div className="font-sans bg-neutral-950 text-gray-200 min-h-screen pt-20">
        {children}
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              const header=document.getElementById('protint-header');
              const img=header.querySelector('img');
              function onScroll(){
                const scale=Math.max(0.6,1-window.scrollY/300);
                img.style.transform='scale('+scale+')';
              }
              window.addEventListener('scroll',onScroll);})();
          `,
        }}
      />
    </>
  );
}
