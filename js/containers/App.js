import React from 'react';
import {Provider} from 'react-redux';
import LabelBox from '../components/LabelBox';

export default class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object
  };

  render() {
    const { store }  = this.props;
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col-xs-6">

          </div>
          <div className="col-xs-6">
            <LabelBox />
          </div>
        </div>
      </Provider>
    );
  }
};
