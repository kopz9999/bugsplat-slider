import pictureFactory from '../factories/Picture';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import configureStore from '../store/configureStore';
import {receivePicture} from "../actions/PictureActions";

export default class BugsplatSlider {
  constructor() {
    this.initStore();
  }

  render(node) {
    this.app = ReactDOM.render(<App store={this.store} />, node);
  }

  initStore() {
    this.store = configureStore();
  }

  addPicture(object) {
    const picture = pictureFactory.buildFromObject(object);
    this.store.dispatch(
      receivePicture({ id: picture.id, picture })
    );
  }
  addPictures(objects) {
    objects.forEach((o)=> this.addPicture(o) );
  }

  processUrl(url) {
    this.addPicture({ url });
  }

  processUrls(urls) {
    urls.forEach((u)=> this.processUrl(u));
  }
}
