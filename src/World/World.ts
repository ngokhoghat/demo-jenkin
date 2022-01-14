import { Camera } from "./components/Camera";
import { Cube } from "./components/Cube";
import { Light } from "./components/Light";
import { MeshGroup } from "./components/MeshGroup";
import { Scene } from "./components/Scene";
import { Controls } from "./systems/Controls";
import { Loop } from "./systems/Loop";
import { Renderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";


export class World {
    private camera;
    private scene;
    private renderer;
    private loop;
    private controls;

    constructor(container: Element) {
        this.camera = new Camera().createCamera();
        this.scene = new Scene().createScene();
        this.renderer = new Renderer().createRenderer();
        this.loop = new Loop(this.camera, this.scene, this.renderer);
        this.controls = new Controls().createControls(this.camera, this.renderer.domElement);
        container.append(this.renderer.domElement);

        const cube = new Cube().createCube();
        const meshGroup = new MeshGroup().createMeshGroup();
        const { light, ambientLight } = new Light().createLights();

        this.loop.updatables.push(cube);
        this.loop.updatables.push(meshGroup);
        this.loop.updatables.push(this.controls);

        this.scene.add(light, ambientLight, meshGroup);
        this.controls.target.copy(cube.position);

        const resizer = new Resizer(container, this.camera, this.renderer);

        resizer.onResize = () => {
            this.render();
        }
    }

    async init() {
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.loop.start();
    }

    stop() {
        this.loop.stop();
    }
}
