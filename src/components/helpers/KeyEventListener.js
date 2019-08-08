/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KeyListener extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    this.props.handleKeyPress(event);
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

KeyListener.propTypes = {
  onNew: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.node.isRequired,
};

KeyListener.defaultProps = {
  onNew: () => {},
  onCancel: () => {},
};

export default KeyListener;
