import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container } from 'reactstrap';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import AppNavbar from './components/AppNavbar';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
