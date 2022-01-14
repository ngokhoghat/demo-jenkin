import { Camera, Renderer } from "three";

export class Resizer {
    constructor(container: Element, camera: Camera | any, renderer: Renderer | any) {
        this.setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            // set the size again if a resize occurs
            this.setSize(container, camera, renderer);

            this.onResize();
        });
    }

    setSize = (container: Element, camera: Camera | any, renderer: Renderer | any) => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    }

    onResize() { 
        
    }
}