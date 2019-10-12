import React, { Component } from "react";
import * as THREE from "three";
import SlideWrapper from "./SlideWrapper";
import ThreeWrapper from '../helpers/ThreeWrapper';
class SlideOne extends Component {


  componentDidMount() {
    const renderer = ThreeWrapper.getRenderer('#slide-one');
    const camera = ThreeWrapper.getCamera()
    camera.position.z = 2;

    const scene = new THREE.Scene();
  
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    renderer.render(scene, camera);;
  }

  render() {
     // === THREE.JS CODE START ===
    return (
      <SlideWrapper title="SUhas" number={1}>
        <div>
          <canvas id="slide-one"></canvas>
        </div>
      </SlideWrapper>
    )
  }
}

export default SlideOne;