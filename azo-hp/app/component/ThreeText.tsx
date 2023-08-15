import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { COLORS } from "./Colors";

export const ThreeText = () => {
  const containRef: any = useRef(null);

  useEffect(() => {
    if (!containRef.current) return;

    // シーン作成
    const scene = new THREE.Scene();

    // カメラ作成
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // ポジション変更(ズーム)
    // camera.position.x = 20;
    camera.position.x = 50;
    camera.position.y = -20;
    camera.position.z = 55;

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // レンダラー作成
    const renderer = new THREE.WebGLRenderer();

    // サイズをレンダラーに指定
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 背景をグレーに変更
    renderer.setClearColor(COLORS.gray, 1);

    // メッシュの作成
    const loader: any = new FontLoader();

    loader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_regular.typeface.json",
      (font: any) => {
        const textShapes = font.generateShapes("Azo", 20);

        // ExtrudeGeometryを使って3Dの文字を生成
        const geometry = new THREE.ExtrudeGeometry(textShapes, {
          depth: 10, // 文字の奥行き
          bevelEnabled: false, // ベベルをオフに
        });

        // 側面（side）用の材料
        const sideMaterial = new THREE.MeshBasicMaterial({
          color: "#E0E0E0",
        });

        // 表面（front & back）用の材料
        const faceMaterial = new THREE.MeshBasicMaterial({
          color: "#FFFFFF",
        });

        // 側面と表面の2つの材料を配列として指定
        const materials = [faceMaterial, sideMaterial];

        // マテリアルの配列を使用してメッシュを作成
        const mesh = new THREE.Mesh(geometry, materials);

        // シーンにメッシュを追加
        scene.add(mesh);

        // ポジション用
        let position = 0.01;

        // アニメーション
        const animate = () => {
          requestAnimationFrame(animate);

          // ポジション変更
          mesh.position.y -= position;

          // 上下移動
          if (mesh.position.y < -4) {
            position = -0.01;
          }

          if (mesh.position.y > 0) {
            position = 0.01;
          }

          if (mesh.position) renderer.render(scene, camera);
        };

        // 明示的な初回レンダリング
        renderer.render(scene, camera);

        // アニメーション開始
        animate();
      }
    );

    // 対象のdivを取得
    containRef.current.appendChild(renderer.domElement);

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containRef} style={{ position: "absolute", zIndex: "-1" }}></div>
  );
};
