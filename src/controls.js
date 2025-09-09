import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function setupControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.rotateSpeed = 0.7;
  controls.screenSpacePanning = false;
  controls.enablePan = false;

  controls.minDistance = 4;
  controls.maxDistance = 10;
  controls.minPolarAngle = 0;
  controls.maxPolarAngle = Math.PI / 2;

  return controls;
}

export { setupControls };
