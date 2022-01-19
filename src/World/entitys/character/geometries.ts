import { BoxBufferGeometry, BoxGeometry, CylinderGeometry } from 'three';

function createGeometries() {
    const head = new BoxGeometry(1, 1, 1);
    const eye = new CylinderGeometry(0.1, 0.1, 0.1, 37);
    const mout = new CylinderGeometry(0.1, 0.1, 0.1, 3);
    const body = new BoxGeometry(1.2, 1.7, 1);
    const hand = new BoxBufferGeometry(0.25, 1, 0.2);
    hand.translate(0, -1, 0);
    
    const foot = new BoxGeometry(0.3, 1, 0.3);
    foot.translate(0, -1, 0);
    return {
        head,
        body,
        hand,
        foot,
        eye,
        mout
    };
}

export { createGeometries }