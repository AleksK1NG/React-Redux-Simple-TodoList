import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styled-components/theme';
import Routes from './routes';
import './App.css';

import { store, history } from './store/configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <ThemeProvider theme={theme}>
              <Routes/>
            </ThemeProvider>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
