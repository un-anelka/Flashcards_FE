import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  // uri: "https://flashcards-be-un.herokuapp.com/",
  uri: "http://localhost:4500",
  cache: new InMemoryCache(),
});

export default apolloClient;
