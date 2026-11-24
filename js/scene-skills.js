function scene_skills() {
  App.initScene({ active: "skills", yaw: 0, pitch: 0.4, dist: 13, ty: 0.5 });
  var skills = DATA.skills;
  var colors = ["#e3b34a", "#6d8dff", "#38bdf8", "#9d6c47", "#c88b44", "#5a9e4f", "#a2a1e6", "#f5a623", "#2e7d8c"];
  App.addOrbitCrowd(Math.max(skills.length, 6), 3.0, 0.3, function (i) {
    var s = skills[i % skills.length];
    return { w: 2.6, h: 2.6, d: 0.25, color: App.hex(colors[i % colors.length]), em: App.hex("#e3b34a"), eI: 0.35 };
  }, 0);
  App.addCubes([{ x: 0, y: 4, z: 0, w: 4.5, h: 0.25, d: 6, color: 0xe3b34a }]);
  App.addCubes([{ x: 8, y: 2.8, z: -2, w: 2, h: 0.2, d: 0.2, color: 0xe3b34a, rot: 0.2 },
                { x: 8, y: 2.2, z: -5.5, w: 2, h: 0.2, d: 0.2, color: 0xe3b34a, rot: -0.1 }]);
}
