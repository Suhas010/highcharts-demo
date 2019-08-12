import React, { Component } from 'react';

class SlideWrapper extends Component {
  render() {
    const { title , number, children} = this.props;
    return (
      <div className="slide-container">
        <div>{`${number} - ${title}`}</div>
        {children}
      </div>
    )
  }
}

export default SlideWrapper;
