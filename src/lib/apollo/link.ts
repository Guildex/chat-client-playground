import { HttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: `https://${process.env.NEXT_PUBLIC_API_HOST}/graphql`,
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `wss://${process.env.NEXT_PUBLIC_API_HOST}/subscriptions`,
          connectionParams: {
            authToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          },
        })
      )
    : null;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };
});

export const link =
  typeof window !== "undefined" && wsLink !== null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);

          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        authLink.concat(httpLink)
      )
    : undefined;
