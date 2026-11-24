function scene_home() {
  App.initScene({ active: "home", yaw: -0.35, pitch: 0.42, dist: 12, ty: 0.3, update: function () { App.scene().rotation.y += 0.0008; } });
  var featured = DATA.projects.filter(function (p) { return p.featured; });
  App.addOrbitCrowd(10, 3.2, 0.2, function (i) {
    var p = featured[i % featured.length];
    return { w: 2.2, h: 2.2, d: 0.1, color: App.hex(p.color), em: 0xe3b34a, eI: 0.25 };
  }, 0);
  App.addCubes([
    { x: 0, y: 2.6, z: 0, w: 9, h: 0.4, d: 0.5, color: 0xe3b34a, rot: 0.15 },
    { x: 0, y: 1.6, z: 0, w: 6.5, h: 0.25, d: 0.5, color: 0x6d8dff },
    { x: 0, y: 0.7, z: 0, w: 8, h: 0.3, d: 0.4, color: 0x38bdf8 }
  ]);
  featured.forEach(function (p, i) {
    var a = (i / featured.length) * Math.PI * 2;
    App.addCard({
      title: p.name, tag: p.tag, line: p.lang, w: 200, h: 110,
      x: Math.cos(a) * 4.6, y: 0.4, z: Math.sin(a) * 4.6,
      color: App.hex(p.color), onClick: function () { App.openModal(p); }
    });
  });
  App.addParticles(90, { spread: 7, color: 0xe3b34a, size: 0.04 });
}
