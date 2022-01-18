import './assets/css/style.css';
import { World } from './World/World';

(async function main() {
    const container = document.querySelector('#app')!;

    const world = new World(container);

    await world.init();

    world.start();
})();
