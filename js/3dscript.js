const preloader = (function() {
  const preloader = document.getElementById('preloader');

  window.onload = function() {
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  preloader.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const texture = new THREE.TextureLoader().load(
    'https://66.media.tumblr.com/55a1c65d8d8a12589baa559d12ecb79f/tumblr_muyk53SQYi1rvwqy9o1_400.gifv'
  );
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
  };

  animate();
})();
