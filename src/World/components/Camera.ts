import { PerspectiveCamera } from "three";

export class Camera {
    constructor() {

    }

    createCamera() {
        const camera = new PerspectiveCamera(35, 1, 0.1, 100);

        camera.position.set(0, 0, 10);

        return camera;
    }
}