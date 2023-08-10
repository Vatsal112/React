import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      </Provider>
    </>
  );
}
