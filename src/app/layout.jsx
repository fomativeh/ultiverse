import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ultiverse</title>
        <meta property="og:title" content="Ultiverse" />
        <meta property="og:site_name" content="Ultiverse" />
        <meta property="og:type" content="Website" />


        <meta
          property="og:description"
          content="UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO CREATE A SOCIAL AND IMMERSIVE GAMING EXPERIENCE."
        />
        <meta property="og:image" content="/meta-bg.svg" />
        <meta property="og:url" content="https://ultiverse-delta.vercel.app" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ultiverse" />
        <meta
          name="twitter:description"
          content="UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO CREATE A SOCIAL AND IMMERSIVE GAMING EXPERIENCE."
        />
        <meta name="twitter:image" content="/meta-bg.svg" />
        <meta name="twitter:url" content="https://ultiverse-delta.vercel.app" />

        <meta property="og:site_name" content="Ultiverse" />
        <meta
          property="og:description"
          content="UTILIZING METAFI, UE5, AND WEB3 TECHONOLOGY TO CREATE A SOCIAL AND IMMERSIVE GAMING EXPERIENCE."
        />
        <meta property="og:image" content="/meta-bg.svg" />
        <meta property="og:url" content="https://ultiverse-delta.vercel.app" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
