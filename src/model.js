import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { scene } from './scene.js';

function loadModel(onLoaded) {
  const loader = new GLTFLoader();
  loader.load(
    '/old-pc.glb',
    (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.004, 0.004, 0.004);
      model.position.y = -1;
      scene.add(model);

      // Lights
      const al = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(al);

      const dl1 = new THREE.DirectionalLight(0xffffff, 0.6);
      dl1.position.set(0, 5, 5);
      scene.add(dl1);

      const dl2 = new THREE.DirectionalLight(0xffffff, 0.6);
      dl2.position.set(0, 5, -5);
      scene.add(dl2);

      if (onLoaded) onLoaded(model);
    },
    (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
    (error) => console.error('GLB load error:', error)
  );
}

export { loadModel };
