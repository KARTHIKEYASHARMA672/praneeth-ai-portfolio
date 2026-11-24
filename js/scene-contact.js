function scene_contact() {
  App.initScene({ active: "contact", yaw: 0, pitch: 0.6, dist: 11, ty: 0.8 });
  App.addCubes([{ x: 0, y: 4, z: 0, w: 3, h: 0.25, d: 3, color: 0xe3b34a }]);
  App.addCubes([
    { x: -5, y: 1.6, z: 0, w: 2, h: 1.8, d: 0.15, color: 0xe3b34a, em: 0xe3b34a, eI: 0.4 },
    { x: 0, y: 1.2, z: 2.2, w: 3, h: 0.3, d: 0.3, color: 0x6d8dff, em: 0xe3b34a, eI: 0.35 },
    { x: 0, y: 1.2, z: -2.2, w: 3, h: 0.3, d: 0.3, color: 0xe3b34a, em: 0xe3b34a, eI: 0.4 },
    { x: 5, y: 1.6, z: 0, w: 2, h: 1.8, d: 0.15, color: 0x38bdf8, em: 0xe3b34a, eI: 0.35 }
  ]);
}
