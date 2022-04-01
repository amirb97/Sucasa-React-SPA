import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './components/About';
import Gallery from './components/Gallery';
import Eat from './components/Eat';
import Drink from './components/Drink';
import Events from './components/Events';
import SingleEvent from './components/SingleEvent';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='d-flex flex-column min-vh-100'>
          <Nav></Nav>
            <main className='container'>
              <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/eat' component={Eat} />
                <Route exact path='/drink' component={Drink} />
                <Route exact path='/gallery' component={Gallery} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/event/:id' component={SingleEvent} />


              </Switch>
            </main>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
