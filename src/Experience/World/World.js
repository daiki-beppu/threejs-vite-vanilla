import { Experience } from '../Experience';

export class World {
  constructor() {
    this.experinece = new Experience();
    this.scene = this.experinece.scene;
  }
}
