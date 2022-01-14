import {
    Mesh,
    BoxBufferGeometry,
    MeshStandardMaterial,
    MathUtils,
    TextureLoader
} from "three";

export class Cube {
    constructor() {

    }

    createCube() {
        const geometry = new BoxBufferGeometry(2, 2, 2);
        const material = this.createMaterial();

        const cube = new Mesh(geometry, material);
        cube.rotation.set(-0.5, -0.1, 0.8);

        const radiansPerSecond = MathUtils.degToRad(30);

        (cube as any).tick = (delta: number) => {
            // increase the cube's rotation each frame
            cube.rotation.z += radiansPerSecond * delta;
            cube.rotation.x += radiansPerSecond * delta;
            cube.rotation.y += radiansPerSecond * delta;
        };

        return cube;
    }

    createMaterial() {
        const textureLoader = new TextureLoader();
        const texture = textureLoader.load('/src/assets/textures/youtube.png');
        // create a "standard" material
        const material = new MeshStandardMaterial({ map: texture });

        return material;
    }
}
