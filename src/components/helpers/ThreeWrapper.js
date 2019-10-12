import * as THREE from "three";

export default class ThreeWrapper {

  static getCamera = (fov = 75, aspect = 2, near = 0.1, far = 5) => {
    return new THREE.PerspectiveCamera(fov, aspect, near, far);
  }

  static getRenderer = (id = '#slide-one') => {
    const canvas = document.querySelector(id);
    return new THREE.WebGLRenderer({canvas});
  }
}