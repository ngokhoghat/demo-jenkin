import { Group, PerspectiveCamera } from "three";

export class MainCamera extends Group {
    constructor() {
        super();
    }

    createCamera() {
        const camera = new PerspectiveCamera(50, 1, 1, 10000);

        camera.position.set(10, 5, 10);

        return camera;
    }
}