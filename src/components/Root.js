import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'

import configureStore from '../configureStore'

// Set up store
const store = configureStore();

const appWrapperStyles = {
  height: '100vh',
};

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={appWrapperStyles}>
          <App />
        </div>
      </Provider>
    );
  }

  componentWillMount() {
    document.body.style.margin = 0;
  }
}
