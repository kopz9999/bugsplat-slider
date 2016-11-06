import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { Picture } from "../factories/Picture";
import styles from './PictureBox.css';
import Velocity from 'velocity-animate';
require('velocity-animate/velocity.ui');

export default class PictureBox extends Component {
  static propTypes = {
    picture: React.PropTypes.instanceOf(Picture),
    onLoadImage: React.PropTypes.func
  };

  get currentNode() {
    return findDOMNode(this);
  }

  slideIn() {
    return Velocity(this.currentNode, 'transition.shrinkIn');
  }

  slideOut() {
    return Velocity(this.currentNode, 'transition.shrinkOut');
  }

  render() {
    const { picture } = this.props;

    return (
      <img className={styles.pictureBox} src={picture.url} onLoad={this.props.onLoadImage} />
    );
  }
}
