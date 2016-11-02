import React from 'react';
import {Provider} from 'react-redux';
import Home from '../components/Home';

export default class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object
  };

  render() {
    const { store }  = this.props;
    return (
      <div>
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
};
