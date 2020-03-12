import React, {FunctionComponent} from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-common';
import {client} from "../Apollo/apolloClient";
import {BookList} from "../../components/BookList/BookList";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    </div>
  );
};

export default App;
