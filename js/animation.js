var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);

var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

var geometry2 = new THREE.SphereGeometry(5);

var circle = new THREE.Mesh(geometry, material);
//var circle = new THREE.Mesh(geometry2, material);

scene.add(circle);

camera.position.z = 15;

var animate = function() {
  requestAnimationFrame(animate);
  circle.translateZ(0.1);
  circle.rotation.x += 0.05;
  circle.rotation.y += 0.05;

  renderer.render(scene, camera);
};

animate();
