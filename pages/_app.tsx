// import '../styles/globals.css'
// import "../styles/main.css";
import "../styles/link.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

import apolloClient from "../lib/apollo";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>{" "}
    </Layout>
  );
}

export default MyApp;
