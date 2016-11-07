import pictureFactory from '../factories/Picture';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import configureStore from '../store/configureStore';
import {receivePicture} from "../actions/PictureActions";
import {setTitle} from "../actions/AppActions";
import {setHref} from "../actions/AppActions";
import {setParagraphs} from "../actions/AppActions";
import {setLinkText} from "../actions/AppActions";
import {setChangeInterval} from "../actions/AppActions";
import {setEnterTimeout} from "../actions/AppActions";

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

  init({pictures, title, paragraphs, href, linkText, node,
        changeInterval, enterTimeout}) {
    this.addPictures(pictures);
    if(title) this.store.dispatch(setTitle({ title }));
    if (paragraphs) this.store.dispatch(setParagraphs({ paragraphs }));
    if (href) this.store.dispatch(setHref({ href }));
    if (linkText) this.store.dispatch(setLinkText({ linkText }));
    if (changeInterval) this.store.dispatch(setChangeInterval({ changeInterval }));
    if (enterTimeout) this.store.dispatch(setEnterTimeout({ enterTimeout }));
    this.render(node);
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
