import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Photogallery from '../photogallery/index';
import configureStore from './configureStore';

//import 'bootstrap/dist/css/bootstrap.min.css';
import 'glyphicons-only-bootstrap/css/bootstrap.css';
import 'glyphicons-only-bootstrap/css/bootstrap-theme.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Photogallery />
        </Provider> 
      </div>
    );
  }
}

export default App;
