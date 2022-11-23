import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { SSRProvider } from "react-aria";
import { useApolloClient } from "~/lib/apollo/client";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ApolloProvider>
  );
}

export default MyApp;
