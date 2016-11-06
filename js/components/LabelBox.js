import React, {Component} from 'react';
import {connect} from 'react-redux';

class LabelBox extends Component {
  render() {
    const {title, paragraphs, href, linkText} = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div>
          { paragraphs.map((par, i) => <p key={i}>{par}</p>) }
        </div>
        <a className={['btn','btn-primary'].join(' ')} href={href}>
          {linkText}
        </a>
      </div>
    );
  }
}

export default connect(state => state.App)(LabelBox)
