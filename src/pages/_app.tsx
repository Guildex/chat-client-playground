import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useApolloClient } from "~/lib/apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
