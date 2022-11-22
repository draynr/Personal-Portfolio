import * as THREE from "three";
import { Box, Spinner, calc, Container, Tr } from "@chakra-ui/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { render } from "react-dom";
import { loadGLTFModel } from "../libs/model";
import { IoPizza } from "react-icons/io5";

function rotateOut(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Voxel1 = () => {
  const url = "/pc.glb";

  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);
  useEffect(() => {
    const { current: container } = refContainer;

    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;

      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 1.2, 0);
      const initialCameraPosition = new THREE.Vector3(
        100 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.005;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        10,
        100000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.autoRotateSpeed = 0.75;
      controls.enableDamping = true;
      controls.enablePan = false;

      loadGLTFModel(scene, url, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        controls.update();
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, []);
  return (
    <Box
      ref={refContainer}
      className="animation1"
      m="auto"
      at={["-20px", "-60px", "-10px"]}
      mb={["-40px", "-140px", "-30px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px-var(--spiner-size)/2"
          mt="calc(0px-var(--spinner-size))"
        />
      )}
    </Box>
  );
};
export default Voxel1;
