import { Camera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Controls {
    constructor() {

    }

    createControls(camera: Camera, canvas: HTMLElement) {
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        // controls.enableRotate = false;
        // controls.enableZoom = false;
        // controls.enablePan = false;

        (controls as any).tick = () => controls.update();
        return controls;
    }
}