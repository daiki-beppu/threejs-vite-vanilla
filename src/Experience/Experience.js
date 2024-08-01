import * as THREE from 'three';
import { Sizes } from './Utils/Sizes';
import { Time } from './Utils/Time';
import { Camera } from './Camera';
import { Renderer } from './Renderer';
import { Resources } from './Utils/Resources';
import { Debug } from './Utils/Debug';
import { assets } from './assets';
import { World } from './World/World';

let instance = null;

export class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;

    window.experience = this;
    this.canvas = canvas;

    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(assets);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on('resize', () => {
      this.resize();
    });

    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}
