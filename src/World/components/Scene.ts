import { Color, Scene as ThreeScene } from 'three';

export class Scene {
    constructor() {

    }

    createScene() {
        const scene = new ThreeScene();

        scene.background = new Color('skyblue');

        return scene;
    }
}