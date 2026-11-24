function scene_experience() {
  App.initScene({ active: "experience", yaw: 0, pitch: 0.5, dist: 12, ty: 0.2, update: function () { App.scene().rotation.y += 0.0004; } });
  var items = DATA.experience;
  var colors = ["#e3b34a", "#6d8dff", "#38bdf8", "#9d6c47"];
  items.forEach(function (it, i) {
    var z = 3 - i * 1.9;
    App.addCubes([
      { x: -4.5, y: 0.6 + i * 0.9, z: z, w: 3, h: 0.25, d: 3.2, color: App.hex(colors[i % colors.length]), rot: 0.05, em: 0xe3b34a, eI: 0.35 },
      { x: 4.5, y: 0.6 + i * 0.9, z: z, w: 3, h: 0.2, d: 0.2, color: App.hex(colors[i % colors.length]), rot: 0.1 },
      { x: 0, y: 2.6 + i * 0.9, z: z, w: 1.5, h: 1.4, d: 1.5, color: 0xe3b34a }
    ]);
    App.addCubes([{ x: 0, y: -0.8 + i * 0.9, z: z, w: 8, h: 0.12, d: 8, color: 0x6d8dff, rot: 0.06 }]);
  });
  App.addCubes([{ x: 0, y: 8, z: 0, w: 2.2, h: 0.3, d: 2.2, color: 0xe3b34a }]);
}
