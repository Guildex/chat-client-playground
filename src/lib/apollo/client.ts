import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";

export const useApolloClient = () => {
  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
    cache: new InMemoryCache(),
  });

  return useMemo(() => client, []);
};
