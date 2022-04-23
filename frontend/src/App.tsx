import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:400",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          test
      </div>
    </ApolloProvider>
  );
}

export default App;
