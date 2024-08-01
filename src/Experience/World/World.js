import * as THREE from 'three';
import { Experience } from '../Experience';

export class World {
  constructor() {
    this.experinece = new Experience();
    this.scene = this.experinece.scene;
    this.resources = this.experinece.resources;
    this.debug = this.experinece.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('test');
    }

    // テストメッシュ
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({
        color: 'orange',
      })
    );
    if (this.debug.active) {
    }

    this.scene.add(testMesh);
  }
  update() {}
}
