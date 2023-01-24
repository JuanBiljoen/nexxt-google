
import type { AppProps } from "next/app";
// import Link from "next/link";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                id="gtm-script"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-35HSDLJRHW`}
            />
            <Script id="gtm-script-2" strategy="lazyOnload">
                {`    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-35HSDLJRHW');`}
            </Script>
            <Component {...pageProps} />
        </>
    );
}