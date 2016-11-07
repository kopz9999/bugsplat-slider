import React from 'react';
import {Provider} from 'react-redux';
import LabelBox from '../components/LabelBox';
import Slider from '../components/Slider';

export default class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object
  };

  render() {
    const { store }  = this.props;
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col-md-6">
            <Slider />
          </div>
          <div className="col-md-6">
            <LabelBox />
          </div>
        </div>
      </Provider>
    );
  }
};
