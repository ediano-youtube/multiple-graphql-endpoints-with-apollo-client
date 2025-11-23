"use client";

import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "../services/apollo-client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={apolloClient()}>{children}</ApolloProvider>;
};
