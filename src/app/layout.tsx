import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const initDarkModeDetection = `
(function () {
const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
const themeChosen = localStorage.theme;
if ((!themeChosen && isDarkModePreferred) || themeChosen === "dark") {
  document.documentElement.classList.add("dark");
  localStorage.theme = 'dark';
}
})()`;

  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="The best repository for Rust developers"
        />

        <meta property="og:title" content="Rustcrab" />
        <meta
          property="og:description"
          content="An Open source project with everything you need to learn about Rust."
        />
        <meta
          property="og:image"
          content="https://www.rustcrab.com/rust_lgo_720.png"
        />
        <meta property="og:url" content="https://www.rustcrab.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Rustcrab" />
        <meta
          name="twitter:description"
          content="An Open source project with everything you need to learn about Rust"
        />
        <meta
          name="twitter:image"
          content="https://www.rustcrab.com/rust_lgo_720.png"
        />

        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-J6GRE0TKHY"
            ></Script>

            <Script id="google-analytics">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J6GRE0TKHY');
              `}
            </Script>
          </>
        )}

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${inter.className} ${roboto.className} bg-white dark:bg-black min-h-screen text-black dark:text-white `}
      >
        <Header />

        {children}

        <Footer />

        <CookieConsent />

        <script
          type="application/javascript"
          id="dark-mode-detection"
          dangerouslySetInnerHTML={{ __html: initDarkModeDetection }}
        ></script>
      </body>
    </html>
  );
}
