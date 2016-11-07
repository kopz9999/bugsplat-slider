import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './LabelBox.css';

class LabelBox extends Component {
  render() {
    const {title, paragraphs, href, linkText} = this.props;

    return (
      <div className={styles.labelBox}>
        <h2>{title}</h2>
        <div>
          { paragraphs.map((par, i) => <p key={i}>{par}</p>) }
        </div>
        <div className={styles.buttonBar}>
          <a className={['btn','btn-primary'].join(' ')} href={href}>
            {linkText}
          </a>
        </div>
      </div>
    );
  }
}

export default connect(state => state.App)(LabelBox)
