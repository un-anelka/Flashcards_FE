// import '../styles/globals.css'
// import "../styles/main.css";
import "../styles/link.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import apolloClient from "../lib/apollo";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
