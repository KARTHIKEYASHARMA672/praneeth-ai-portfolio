function scene_about() {
  App.initScene({ active: "about", yaw: 0.3, pitch: 0.5, dist: 13, ty: 0.4, update: function () { App.scene().rotation.y += 0.0005; } });
  App.addFloor({ w: 26, h: 16, y: 0, color: 0x0f1018 });
  App.addCubes([
    { x: -5.2, y: 1.4, z: 0, w: 1.2, h: 2.4, d: 1, color: 0xe3b34a },
    { x: -3.1, y: 1.4, z: 0, w: 1.2, h: 2.4, d: 1, color: 0x6d8dff },
    { x: -1, y: 1.4, z: 0, w: 1.2, h: 2.4, d: 1, color: 0x38bdf8 },
    { x: 1.1, y: 1.4, z: 0, w: 1.2, h: 2.4, d: 1, color: 0x9d6c47 },
    { x: 3.2, y: 1.4, z: 0, w: 1.2, h: 2.4, d: 1, color: 0xc88b44 }
  ]);
  App.addCubes([
    { x: 0, y: 4, z: 0, w: 5.5, h: 0.25, d: 4, color: 0xe3b34a },
    { x: -6, y: 2.4, z: -3, w: 2.2, h: 0.2, d: 0.2, color: 0xe3b34a, rot: 0.3 },
    { x: -6, y: 1.3, z: 2.8, w: 2.2, h: 0.2, d: 0.2, color: 0xe3b34a, rot: -0.4 }
  ]);
}
