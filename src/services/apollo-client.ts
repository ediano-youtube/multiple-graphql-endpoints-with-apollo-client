import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ErrorLink } from "@apollo/client/link/error";

const error = new ErrorLink(() => {
  return;
});

type GeneratedLink = {
  apiName: string;
  uri: string;
};
const generatedLink = ({ apiName, uri }: GeneratedLink) => {
  const link = HttpLink.split((op) => {
    const context = op.getContext();
    return context.apiName === apiName || !context.apiName;
  }, new HttpLink({ uri }));
  return link;
};

const getLink = () => {
  const trevorbladesLink = generatedLink({
    apiName: "trevorblades",
    uri: "https://countries.trevorblades.com",
  });
  const rickandmortyapiLink = generatedLink({
    apiName: "rickandmortyapi",
    uri: "https://rickandmortyapi.com/graphql",
  });
  const catalysishubLink = generatedLink({
    apiName: "catalysishub",
    uri: "https://api.catalysis-hub.org/graphql",
  });

  const httpLink = HttpLink.from([
    error,
    trevorbladesLink,
    rickandmortyapiLink,
    catalysishubLink,
  ]);
  return httpLink;
};

export const apolloClient = () => {
  return new ApolloClient({
    link: getLink(),
    cache: new InMemoryCache(),
  });
};
