import { Loop } from "./systems/Loop";
import { Light } from "./components/Light";
import { Scene } from "./components/Scene";
import { Resizer } from "./systems/Resizer";
import { Renderer } from "./systems/Renderer";
import { Controls } from "./systems/Controls";
import { Ground } from "./entitys/ground/ground";
import { MainCamera } from "./components/MainCamera";
import { MainCharacter } from "./entitys/character";

export class World {
    private mainCamera;
    private scene;
    private renderer;
    private loop;
    private controls;
    private container;

    constructor(container: Element) {
        this.container = container;
        this.scene = new Scene().createScene();
        this.renderer = new Renderer().createRenderer();
        this.mainCamera = new MainCamera().createCamera();
        this.loop = new Loop(this.mainCamera, this.scene, this.renderer);
        this.controls = new Controls().createControls(this.mainCamera, this.renderer.domElement);
    }

    async init() {
        this.container.append(this.renderer.domElement);
        const resizer = new Resizer(this.container, this.mainCamera, this.renderer);

        // init entity
        const light = new Light();
        const ground = new Ground();
        const mainCharacter = new MainCharacter();

        // animation
        this.loop.updatables.push(mainCharacter);
        this.loop.updatables.push(this.controls);

        // scene
        this.scene.add(light, ground);
        this.scene.add(mainCharacter);

        resizer.onResize = () => this.render();

        console.log(this.scene);
        
    }

    render() {
        this.renderer.render(this.scene, this.mainCamera);
    }

    start() {
        this.loop.start();
    }

    stop() {
        this.loop.stop();
    }
}
