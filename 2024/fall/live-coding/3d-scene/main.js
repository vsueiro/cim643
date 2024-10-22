import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

for (let i = 0; i < 1000; i++) {
  const geometry = new THREE.SphereGeometry(0.5, 32, 16); // Sphere
  const material = new THREE.MeshNormalMaterial();
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  sphere.position.set(
    THREE.MathUtils.randFloat(-2, 2),
    THREE.MathUtils.randFloat(-2, 2),
    THREE.MathUtils.randFloat(-2, 2)
  );
}

camera.position.z = 10;

function animate() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
