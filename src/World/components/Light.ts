import { AmbientLight, DirectionalLight } from "three";

export class Light {
    constructor() {

    }

    createLights() {
        const ambientLight = new AmbientLight('white', 2);

        const light = new DirectionalLight('white', 8);

        light.position.set(10, 10, 10);

        return { light, ambientLight };
    }
}