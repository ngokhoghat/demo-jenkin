import { Group } from "three";

export class MeshGroup {
    constructor() {

    }

    createMeshGroup() {
        const group = new Group();

        (group as any).tick = (delta: number) => {

        };

        return group;
    }
}