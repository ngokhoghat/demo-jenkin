import { WebGLRenderer } from "three";

export class Renderer {
    constructor() {

    }

    createRenderer() {
        const renderer = new WebGLRenderer({ antialias: true });
        renderer.physicallyCorrectLights = true;

        return renderer;
    }
}