import './assets/css/style.css';
import { World } from './World/World';

(function main() {
    const container = document.querySelector('#app')!;

    const world = new World(container);

    world.start();
})();
