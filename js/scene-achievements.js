function scene_achievements() {
  App.initScene({ active: "achievements", yaw: 0, pitch: 0.45, dist: 13, ty: 0.4 });
  DATA.achievements.forEach(function (a, i) {
    var x = -2 + i * 2.5, y = 0.5 + i * 0.8, z = 0;
    App.addCubes([{ x: x, y: y, z: z, w: 3, h: 0.3, d: 3, color: 0xe3b34a, em: 0x2e7d8c, eI: 0.3 },
                  { x: x, y: y + 1.2, z: z, w: 2.2, h: 2.2, d: 0.15, color: 0x6d8dff }]);
  });
  App.addCubes([{ x: -2 + 1.25 * (DATA.achievements.length / 2), y: 6, z: 0, w: 3, h: 0.4, d: 3, color: 0xe3b34a }]);
}
