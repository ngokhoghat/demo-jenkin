import { AmbientLight, DirectionalLight, Group, HemisphereLight } from "three";

export class Light extends Group {
    constructor() {
        super();

        const { light, ambientLight } = this.createLights();
        const hemisLight = new HemisphereLight(0xffffbb, 0x080820, 1);

        this.add(light, ambientLight, hemisLight);
    }

    createLights() {
        const ambientLight = new AmbientLight('white', 2);

        const light = new DirectionalLight('white', 8);

        light.position.set(0, 0, 0);

        return { light, ambientLight };
    }
}