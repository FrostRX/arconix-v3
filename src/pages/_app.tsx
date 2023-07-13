import "@/styles/globals.css";
import "@/styles/glob_loaders.css";
import type { AppProps } from "next/app";
import { Barlow } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const font = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
