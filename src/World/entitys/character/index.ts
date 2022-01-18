import { Group, Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

export class MainCharacter extends Group {
    private meshes;
    private v = -1;

    constructor() {
        super();

        this.meshes = this.createMainCharacter();

        this.add(
            this.meshes.head,
            this.meshes.leftEye,
            this.meshes.rightEye,
            this.meshes.mout,
            this.meshes.body,
            this.meshes.leftHand,
            this.meshes.rightHand,
            this.meshes.leftFoot,
            this.meshes.rightFoot,
        )
    }

    createMainCharacter() {
        const geometries = createGeometries();
        const materials = createMaterials();

        const head = new Mesh(geometries.head, materials.head);
        head.position.set(0.5, 4, 0);

        const leftEye = new Mesh(geometries.eye, materials.eye);
        leftEye.position.set(0.1, 4, 0.5);
        leftEye.rotateX(Math.PI / 2);

        const rightEye = new Mesh(geometries.eye, materials.eye);
        rightEye.position.set(0.9, 4, 0.5);
        rightEye.rotateX(Math.PI / 2);

        const mout = new Mesh(geometries.mout, materials.mout);
        mout.position.set(0.5, 3.7, 0.5);
        mout.rotateX(Math.PI / 2);
        mout.rotateY(Math.PI / 3);

        const body = new Mesh(geometries.body, materials.body);
        body.position.set(0.5, 2.35, 0);

        const leftHand = new Mesh(geometries.hand, materials.hand);
        leftHand.position.set(-0.30, 3.3, 0);

        const rightHand = new Mesh(geometries.hand, materials.hand);
        // rightHand.rotateX(-10)
        rightHand.position.set(1.30, 3.3, 0);

        const leftFoot = new Mesh(geometries.foot, materials.foot);
        leftFoot.position.set(0, 1.5, 0);

        const rightFoot = new Mesh(geometries.foot, materials.foot);
        rightFoot.position.set(1, 1.5, 0);

        return {
            head, body, leftHand, rightHand, leftFoot, rightFoot, leftEye, rightEye, mout
        };
    }

    onWalk(delta: number) {
        this.meshes.leftHand.rotation.x += this.v * delta;
        this.meshes.rightHand.rotation.x += -this.v * delta;

        this.meshes.leftFoot.rotation.x += -this.v * delta;
        this.meshes.rightFoot.rotation.x += this.v * delta;

        if (this.meshes.leftHand.rotation.x < -Math.PI / 3) {
            this.v = 1
        } else if (this.meshes.leftHand.rotation.x > Math.PI / 3) {
            this.v = -1
        }
    }

    tick(delta: number) {
        this.onWalk(delta);
        this.position.z += 1 * delta;
    }
}
