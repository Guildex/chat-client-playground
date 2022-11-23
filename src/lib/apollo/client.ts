import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";
import { link } from "./link";

export const useApolloClient = () => {
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return useMemo(() => client, []);
};
