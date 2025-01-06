"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { l } from "@/app/helpers";

export default function About3DScene({ width, height }) {
  const initScene = () => {
    l("About 3d scene");
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: document.getElementById("canvas1"),
      }),
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000),
      controls = new OrbitControls(camera, renderer.domElement),
      config = {
        height: 4000,
        width: 4000,
        linesHeight: 25,
        linesWidth: 25,
      },
      stepw = (2 * config.width) / config.linesWidth,
      steph = (2 * config.height) / config.linesHeight,
      gridObject = new THREE.Object3D(),
      geometry = new THREE.SphereGeometry(10, 4, 4),
      material = new THREE.MeshBasicMaterial({ color: 0x23afcb });

    renderer.setSize(width, height);
    scene.background = new THREE.Color(0x000000);
    camera.position.z = 5000;

    // Create left grid from spheres
    for (let i = -config.width; i <= config.width; i += stepw) {
      for (let j = -config.height; j <= config.height; j += steph) {
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = i;
        sphere.position.y = j;
        gridObject.add(sphere);
      }
    }

    scene.add(gridObject);

    gsap.ticker.add(() => {
      controls.update();
      renderer.render(scene, camera);
    });
  };

  useEffect(() => {
    initScene();
  }, [width, height]);

  return (
    <div className="relative hw-full">
      {/*About 3D Scene here {width}x{height}*/}
      <canvas id="canvas1" className="absolute-child z-[1]"></canvas>
    </div>
  );
}
