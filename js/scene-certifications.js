function scene_certifications() {
  App.initScene({ active: "certifications", yaw: 0, pitch: 0.55, dist: 16, ty: 0.5 });
  DATA.certs.forEach(function (c, i) {
    var x = -7 + (i % 2) * 7, y = 1.2 + Math.floor(i / 2) * 4, z = i % 2 ? 0 : 2;
    var gap = 0.2;
    App.addCubes([
      { x: x, y: y + 1.5, z: z, w: 4.6, h: 0.3, d: 5, color: 0xe3b34a },
      { x: x, y: y + 0.6, z: z, w: 4.4, h: 0.4, d: 4.8, color: 0x2e7d8c },
      { x: x, y: y - 0.4, z: z, w: 4.4, h: 0.6, d: 4.9, color: 0xe3b34a },
      { x: x, y: y - 1.0, z: z, w: 4.3, h: 0.3, d: 4.95, color: 0x6d8dff, em: 0xe3b34a, eI: 0.3 }
    ]);
  });
  App.addCubes([{ x: 0, y: 9, z: 0, w: 3.5, h: 0.3, d: 3.5, color: 0xe3b34a }]);
  var upd = function (dt) { scene.rotation.y += 0.0004; };
  App.currentScene = upd;
}
