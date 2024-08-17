import * as THREE from 'three';
import { Environment } from './environment/Enviroment';

export class World {
  constructor(appCore) {
    this.appCore = appCore;
    this.scene = this.appCore.scene;
    this.resources = this.appCore.resources;
    this.debug = this.appCore.debug;

    this.resources.on('ready', () => {
      this.environment = new Environment(this);
    });

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('test');
    }

    // テストメッシュ
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshStandardMaterial({
        color: 'red',
        // vertexShader: vertexShader,
        // fragmentShader: fragmentShader,
      }),
    );
    if (this.debug.active) {
    }

    this.scene.add(testMesh);
  }
  update() {}
}
