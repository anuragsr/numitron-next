"use client";

import { useEffect } from "react";
import * as THREE from "three";
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
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);

    renderer.setSize(width, height);
    scene.background = new THREE.Color(0x000000);
    renderer.render(scene, camera);
  };

  useEffect(() => {
    initScene();
  }, [width, height]);

  return (
    <div className="relative hw-full">
      About 3D Scene here {width}x{height}
      <canvas id="canvas1" className="absolute-child z-[1]"></canvas>
    </div>
  );
}
