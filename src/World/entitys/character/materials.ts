import { MeshStandardMaterial } from 'three';

function createMaterials() {
    const head = new MeshStandardMaterial({
        color: '#ffc014',
        flatShading: true,
    });

    const eye = new MeshStandardMaterial({
        color: '#fff',
        flatShading: true,
    });

    const mout = new MeshStandardMaterial({
        color: '#000',
        flatShading: true,
    });

    const body = new MeshStandardMaterial({
        color: '#ffd400',
        flatShading: true,
    });

    const hand = new MeshStandardMaterial({
        color: '#0c91ff',
        flatShading: true,
    });

    const foot = new MeshStandardMaterial({
        color: '#0c91ff',
        flatShading: true,
    });

    return { head, body, hand, foot, eye, mout };
}

export { createMaterials }