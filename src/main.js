import { scene, camera, renderer } from './scene.js';
import { loadModel } from './model.js';
import { setupControls } from './controls.js';
import { handleResize } from './resize.js';

let controls;

loadModel(() => {
  controls = setupControls(camera, renderer);
  animate();
});

function animate() {
  requestAnimationFrame(animate);
  if (controls) controls.update();
  renderer.render(scene, camera);
}

handleResize(renderer, camera);

renderer.domElement.addEventListener('touchmove', (event) => {
  event.preventDefault();
}, { passive: false });
