import * as THREE from 'three';
import fragmentShader from '../shaders/fragment.glsl';
import vertexShader from '../shaders/vertex.glsl';

export class World {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.resources = this.appCore.resources;
    this.debug = this.appCore.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('test');
    }

    // テストメッシュ
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      }),
    );
    if (this.debug.active) {
    }

    this.scene.add(testMesh);
  }
  update() {}
}
