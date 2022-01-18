import { DoubleSide, GridHelper, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

export class Ground extends Group {
    constructor() {
        super();

        const plane = this.createGround();
        const size = 20;
        const divisions = 20;
        const gridHelper = new GridHelper(size, divisions);

        this.add(plane, gridHelper);
    }

    createGround() {
        const geometry = new PlaneGeometry(20, 20, 1, 1);
        const material = new MeshBasicMaterial({ color: "#e3e7ea", side: DoubleSide });
        const plane = new Mesh(geometry, material);
        plane.rotateX(- Math.PI / 2);

        return plane;
    }
}