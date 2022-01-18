import { Event, Group, Object3D } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export class Songoku extends Group {
    public character: Object3D<Event> | undefined;

    constructor() {
        super();
    }

    async createCharacter() {
        const loader = new GLTFLoader();
        const character = await loader.loadAsync("src/assets/characters/son_goku_lowpoly/scene.gltf");
        this.character = character.scene.children[0];
        this.character.scale.set(0.002, 0.002, 0.002);
        this.character.position.y = 3.5;
        this.character.rotateZ(155);

        this.add(this.character);


        return this.character;
    }

    tick(delta: number) {
        this.position.x -= 0.05;
    }
}