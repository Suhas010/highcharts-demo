import React, { Component } from 'react';
import * as THREE from "three";
import ThreeWrapper from '../helpers/ThreeWrapper';
THREE.Cache.enabled = true;

class HomePage extends Component {
  
  componentDidMount() {
    const renderer = ThreeWrapper.getRenderer('#home');
    // const camera = ThreeWrapper.getCamera()
    // camera.position.z = 2;
    // const scene = new THREE.Scene();
    
  }

  render() {
    return (
      <div className="slide-container">
        <canvas id="home" height="600" width="1300"></canvas>
      </div>
    )
  };
}

export default HomePage;
