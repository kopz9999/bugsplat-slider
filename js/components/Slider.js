import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PictureBox from './PictureBox';
import styles from './Slider.css';
import * as AppActions from '../actions/AppActions';

class Slider extends Component {
  onLoadImage = (e) => {
    let img = e.target;
    const { naturalWidth: width, naturalHeight: height } = img;
    if (width > this.state.maxWidth) {
      this.setState({ maxWidth: width })
    }
    if (height > this.state.maxHeight) {
      this.setState({ maxHeight: height })
    }
  };

  hideLastPicture = () => {
    const { pictureCards, enterTimeout } = this.props;
    const lastPictureComponent =
      this.refs[pictureCards[pictureCards.length - 1].id];
    lastPictureComponent.slideOut().then(()=> {
      this.props.pushBackPicture();
      setTimeout(()=> lastPictureComponent.slideIn(), enterTimeout);
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      maxWidth: 0,
      maxHeight: 0,
      intervalId: setInterval(this.hideLastPicture, props.changeInterval)
    };
  }

  render() {
    const { pictureCards } = this.props;
    const { maxWidth, maxHeight } = this.state;
    let style = { width: maxWidth, height: maxHeight };
    const pictureNodes = pictureCards.map(picture => <PictureBox picture={picture}
                                                                 ref={picture.id}
                                                                 key={picture.id}
                                                                 onLoadImage={this.onLoadImage} />);

    return (
      <div className={styles.slider} style={style}>
        { pictureNodes }
      </div>
    );
  }
}

export default connect(state => state.App,
  dispatch=> ({...bindActionCreators(AppActions, dispatch)}))(Slider)
