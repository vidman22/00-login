import React from 'react';

import Auth from './Auth';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});
// Create the client as outlined in the setup guide


const App = () => (
  <ApolloProvider client={client}>
    <Auth />
  </ApolloProvider>
);

AppRegistry.registerComponent('MyApplication', () => App);