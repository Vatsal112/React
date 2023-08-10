import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/components/Navbar.css";
import { Provider } from "next-auth/client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Provider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
