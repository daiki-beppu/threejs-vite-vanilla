import * as THREE from 'three';
import { Experience } from './Experience';

export class Renderer {
  constructor() {
    this.experinece = new Experience();
    this.canvas = this.experinece.canvas;
    this.sizes = this.experinece.sizes;
    this.scene = this.experinece.scene;
    this.camera = this.experinece.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor('#211d20');
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.devicePixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.devicePixelRatio);
  }

  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
