function scene_projects() {
  var projects = DATA.projects.slice();
  App.initScene({ active: "projects", yaw: 0.25, pitch: 0.4, dist: 15, ty: 0.5, update: function () { App.scene().rotation.y += 0.0006; } });
  // 3D showcase arc of project cards
  var R = 7, count = projects.length, i, p;
  for (i = 0; i < count; i++) {
    p = projects[i];
    var a = (i / count) * Math.PI * 2 - Math.PI; // spread along half circle, left-right
    App.addCard({
      title: p.name, tag: p.tag, line: p.lang,
      x: Math.sin(a) * R * 1.2, y: 0.6, z: Math.cos(a) * R,
      color: App.hex(p.color), ts: 12,
      onClick: function () { App.openModal(p); }
    });
  }
  // hangzone: floating "AI Stack" labels
  App.addCubes([{ x: 0, y: 4.5, z: 0, w: 3.2, h: 0.4, d: 0.3, color: 0xe3b34a }]);
  App.addParticles(60, { spread: 5, color: 0xe3b34a, size: 0.03 });
}
