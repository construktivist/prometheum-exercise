import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from '../client';
import Launches from '../pages/Launches';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Launches />} />
          </Routes>
        </ApolloProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
