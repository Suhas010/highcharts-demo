import React, { Component } from 'react';
import "./index.css";
class SlideWrapper extends Component {
  render() {
    const { title , children} = this.props;
    return (
      <div className="slide-container">
        <div className="heading">{title}</div>
        {children}
      </div>
    )
  }
}

export default SlideWrapper;
