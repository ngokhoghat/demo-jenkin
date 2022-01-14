import { Camera, Clock, Renderer, Scene } from "three";

export class Loop {
    private camera: Camera;
    private scene: Scene;
    private clock = new Clock();
    private renderer: Renderer | any;
    public updatables: Array<any> = [];

    constructor(camera: Camera, scene: Scene, renderer: Renderer | any) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // render a frame
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        const delta = this.clock.getDelta();

        for (const object of this.updatables) {
            (object as any).tick(delta);
        }
    }
}