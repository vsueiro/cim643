import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

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

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 40;
controls.update();

function animate() {
  controls.update();
  renderer.render(scene, camera);
}

async function load() {
  const response = await fetch("umap-clean.json");
  const data = await response.json();

  // Find min and max values of marketcap
  const minMarketCap = d3.min(data, (d) => d.marketcap);
  const maxMarketCap = d3.max(data, (d) => d.marketcap);

  const colorScale = d3
    .scalePow()
    .exponent(0.1666)
    .domain([minMarketCap, maxMarketCap])
    .range([0, 1]);

  for (let company of data) {
    const radius = Math.cbrt(company.marketcap) * 0.0001;
    const color = d3.interpolateTurbo(colorScale(company.marketcap));

    // Create Sphere
    const geometry = new THREE.SphereGeometry(radius, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.position.set(
      company.umap3d[0],
      company.umap3d[1],
      company.umap3d[2]
    );

    scene.add(sphere);
  }
}

load();
