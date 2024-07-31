import { PerspectiveCamera } from 'three';
import { Experience } from './Experience';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export class Camera {
  constructor() {
    this.experinece = new Experience();
    this.sizes = this.experinece.sizes;
    this.scene = this.experinece.scene;
    this.canvas = this.experinece.canvas;

    this.cameraParams = {
      fov: 35,
      aspect: this.sizes.width / this.sizes.height,
      near: 0.1,
      far: 100,
      position: { x: 0, y: 0, z: 0 },
    };

    this.setInstance();
    this.setControls();
  }
  setInstance() {
    const { fov, aspect, near, far, position } = this.cameraParams;
    this.instance = new PerspectiveCamera(fov, aspect, near, far);
    this.instance.position.set(position.x, position.y, position.z);
    this.scene.add(this.instance);
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.cameraParams.aspect;
    this.instance.updateMatrix();
  }

  update() {
    this.controls.update();
  }
}
