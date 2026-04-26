import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        
        {/* Bootstrap Icons (Replacing FontAwesome to prevent Hydration crashes) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        
        {/* Academicons for Google Scholar icon (This is CSS, so it is safe) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}