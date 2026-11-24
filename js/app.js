/* ============ 3D ENGINE + SHARED UI (js/app.js) ============ */
(function () {
  var scene = null, camera = null, renderer = null, controls = null, clock = null;
  var currentScene = null, resizeObs = null;

  function qd(s) { return document.querySelector(s); }
  function V(x, y, z) { return new THREE.Vector3(x, y, z); }

  /* ---------- NAV ---------- */
  var NAV_ITEMS = [
    ["home", "Home", "#6d8dff"], ["about", "About", "#e3b34a"], ["skills", "Skills", "#38bdf8"],
    ["projects", "Projects", "#e3b34a"], ["experience", "Experience", "#6d8dff"],
    ["certifications", "Certs", "#38bdf8"], ["achievements", "Awards", "#e3b34a"], ["contact", "Contact", "#6d8dff"]
  ];
  function renderNav(activeId) {
    var bar = qd(".topbar");
    if (!bar) { bar = document.createElement("div"); bar.className = "topbar"; document.body.prepend(bar); }
    bar.innerHTML = '<span class="brand"><b>\u2261</b><span>Praneeth</span> Alpha</span>' +
      NAV_ITEMS.map(function (n) {
        return '<a href="' + n[0] + '.html" class="' + (n[0] === activeId ? "active" : "") + '"><span class="dot" style="background:' + n[2] + '"></span>' + n[1] + '</a>';
      }).join("");
    bar.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); location.href = a.getAttribute("href"); });
    });
  }

  /* ---------- TEXT SPRITES ---------- */
  function textSprite(text, opts) {
    opts = opts || {};
    var c = document.createElement("canvas"); c.width = 256; c.height = 48;
    var ctx = c.getContext("2d");
    ctx.font = "bold " + (opts.size || 16) + "px Segoe UI, Roboto, sans-serif";
    ctx.fillStyle = opts.color || "#ffffff";
    ctx.textBaseline = "middle"; ctx.textAlign = "left";
    ctx.fillText(text, 4, 24);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: opts.opacity || 0.95 }));
    sp.scale.set(opts.scale || (opts.size || 16) * 0.07, (opts.size || 16) * 0.025, 1);
    return sp;
  }

  /* ---------- CARDS ---------- */
  function addCard(opts) {
    var group = new THREE.Group();
    var mesh = new THREE.Mesh(
      new THREE.BoxGeometry(opts.w || 210, opts.h || 118, 0.22),
      new THREE.MeshStandardMaterial({
        color: opts.color || 0xe3b34a, roughness: 0.85,
        emissive: new THREE.Color(opts.em || 0x111111), emissiveIntensity: 0.5
      })
    );
    mesh.position.set(opts.x || 0, opts.y || 0, opts.z || 0);
    var sp = textSprite(opts.title || "", { size: opts.ts || 14, color: opts.tcolor || 0xffffff });
    sp.position.set(0, 0, 0.11);
    if (opts.tag) { var tg = textSprite(opts.tag, { size: 7, color: 0x9e7a4a, opacity: 0.8 }); tg.position.set(0, -opts.h / 2 + 24, 0.12); group.add(tg); }
    if (opts.line) { var ln = textSprite(opts.line, { size: 7, color: 0x9e7a4a, opacity: 0.7 }); ln.position.set(0, -opts.h / 2 + 52, 0.12); group.add(ln); }
    group.add(sp); group.add(mesh);
    group.userData.onClick = opts.onClick; group.name = opts.title;
    scene.add(group); return group;
  }

  /* ---------- OTHER 3D HELPERS ---------- */
  function addCubes(list) {
    var out = [];
    list.forEach(function (L) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(L.w, L.h, L.d || 1),
        new THREE.MeshStandardMaterial({ color: L.color || 0xe3b34a, transparent: L.trans !== false, opacity: L.alpha || 0.9, roughness: 0.85, emissive: new THREE.Color(L.em || 0x111111), emissiveIntensity: L.eI || 0.3 }));
      m.position.set(L.x, L.y, L.z); if (L.rot) m.rotation.z = L.rot;
      m.userData.meta = L;
      scene.add(m); out.push(m);
    });
    return out;
  }
  function addParticles(count, opts) {
    var geometry = new THREE.BufferGeometry();
    var pos = new Float32Array(count * 3);
    for (var i = 0; i < count; i++) { pos[i * 3] = (Math.random() - 0.5) * (opts.spread || 10); pos[i * 3 + 1] = (Math.random() - 0.5) * (opts.spread || 6); pos[i * 3 + 2] = (Math.random() - 0.5) * (opts.spread || 10); }
    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geometry, new THREE.PointsMaterial({ size: opts.size || 0.03, color: opts.color || 0xe3b34a, transparent: true, opacity: 0.6 })));
  }
  function addOrbitCrowd(n, radius, y, make, angle0) {
    var items = [];
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + (angle0 || 0);
      var L = make(i); L.x = Math.cos(a) * radius; L.y = y; L.z = Math.sin(a) * radius;
      items.push(addCubes([L])[0]);
    }
    return items;
  }
  function addFloor(opts) {
    var m = new THREE.Mesh(new THREE.PlaneGeometry((opts.w || 40), (opts.h || 40)),
      new THREE.MeshStandardMaterial({ color: 0x0e0f16, transparent: true, opacity: 0.85, roughness: 0.95 }));
    m.position.y = opts.y || 0; m.rotation.x = -Math.PI / 2; scene.add(m); return m;
  }

  /* ---------- CAM ---------- */
  function updateCamera() {
    controls.pitch = Math.min(1.2, Math.max(-0.05, controls.pitch));
    var t = controls.target, d = controls.dist;
    camera.position.set(
      t.x + Math.sin(controls.yaw) * Math.cos(controls.pitch) * d,
      t.y + Math.sin(controls.pitch) * d + 0.4,
      t.z + Math.cos(controls.yaw) * Math.cos(controls.pitch) * d
    );
    camera.lookAt(t);
  }
  function reset() {
    scene = null; camera = null; renderer = null; controls = null; clock = null;
  }
  function initScene(opts) {
    reset();
    clock = new THREE.Clock();
    var cv0 = qd(".main-bg");
    if (!cv0) { cv0 = document.createElement("canvas"); cv0.className = "main-bg"; qd(".canvas-wrap").appendChild(cv0); }
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0f16);
    renderer = new THREE.WebGLRenderer({ canvas: qd(".main-bg"), antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    var vp = qd(".viewport"); renderer.setSize(vp.clientWidth, Math.max(1, vp.clientHeight));
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    var dl = new THREE.DirectionalLight(0xe3b34a, 0.55); dl.position.set(8, 10, 6); scene.add(dl);
    camera = new THREE.PerspectiveCamera(45, vp.clientWidth / Math.max(1, vp.clientHeight), 0.1, 60);
    controls = { target: V(opts.tx || 0, opts.ty || 0.4, opts.tz || 0), dist: opts.dist || 14, yaw: opts.yaw || 0.4, pitch: opts.pitch || 0.55, rotSpeed: 0.02, dragging: false };
    var cv = qd(".main-bg");
    var down = function (e) { e.preventDefault(); if (!cv.contains(e.target) && e.target !== cv) return; controls.dragging = true; controls.lx = e.clientX; controls.ly = e.clientY; };
    var move = function (e) { if (!controls.dragging) return; var dx = e.clientX - controls.lx, dy = e.clientY - controls.ly; controls.lx = e.clientX; controls.ly = e.clientY; controls.yaw -= dx * 0.004; controls.pitch += dy * 0.004; updateCamera(); };
    var up = function () { controls.dragging = false; };
    cv.addEventListener("pointerdown", down); window.addEventListener("pointermove", move); window.addEventListener("pointerup", up);
    cv.addEventListener("wheel", function (e) { e.preventDefault(); controls.dist = Math.min(30, Math.max(4, controls.dist + e.deltaY * 0.005)); updateCamera(); }, { passive: false });
    // raycast clicks
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    cv.addEventListener("click", function (e) {
      if (window.innerWidth < 640 && e.target !== cv) return;
      mouse.x = ((e.clientX - cv.getBoundingClientRect().left) / cv.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - cv.getBoundingClientRect().top) / cv.clientHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      var hits = raycaster.intersectObjects(scene.children, true);
      var best = null;
      for (var i = 0; i < hits.length; i++) {
        var o = hits[i].object, m = o.userData && o.userData.meta;
        if (!m) { var p = o.parent && o.parent.userData ? o.parent.userData.meta : null; m = p || o.userData.onClick ? (o.parent && o.parent.userData.meta) : null; }
        var onClick = o.userData && o.userData.onClick;
        var meta = o.userData.meta || (o.parent && o.parent.userData.meta);
        if (meta || onClick) { best = meta || onClick; break; }
      }
      if (best) { var fn = typeof best === "function" ? best : best.onClick; if (fn) fn(); }
    });
    resize();
    anim();
    if (opts.onInit) opts.onInit();
    currentScene = opts;
  }
  function anim() {
    requestAnimationFrame(anim);
    if (!scene || !camera || !renderer) return;
    var dt = clock ? clock.getDelta() : 0.016;
    if (currentScene && currentScene.update) currentScene.update(dt);
    updateCamera();
    renderer.render(scene, camera);
  }
  function resize() {
    if (!renderer) return;
    var vp = qd(".viewport");
    renderer.setSize(vp.clientWidth, vp.clientHeight);
    if (camera) camera.aspect = vp.clientWidth / Math.max(1, vp.clientHeight);
    if (camera) camera.updateProjectionMatrix();
  }
  if (!window.addEventListener) return;
  window.addEventListener("resize", resize);

  /* ---------- MODALS ---------- */
  function openModal(p) {
    var ov = qd(".modal-overlay");
    if (!ov) return;
    var links = "";
    if (p.hosted) links += '<a class="btn" href="' + p.hosted + '" target="_blank" rel="noopener">\u21b3 View Live Site \u2197</a>';
    if (p.repo) links += '<a class="btn ghost" href="' + p.repo + '" target="_blank" rel="noopener">\u21b3 GitHub Repo \u2197</a>';
    ov.querySelector(".modal h3").textContent = p.name;
    ov.querySelector(".mod-tag").textContent = p.tag || "";
    ov.querySelector(".mod-desc").textContent = p.desc || "";
    ov.querySelector(".mod-links").innerHTML = links;
    ov.classList.add("show");
  }
  function closeModal() { qd(".modal-overlay") && qd(".modal-overlay").classList.remove("show"); }
  qd(".modal-overlay") && qd(".modal-overlay").addEventListener("click", function (e) { if (e.target === qd(".modal-overlay")) closeModal(); });
  window.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  window.App = {
    DATA: window.DATA, initScene, addCard, addCubes, addParticles, addOrbitCrowd, addFloor, textSprite,
    hex: function (h) { return parseInt(String(h || 0).replace("#", ""), 16); },
    hash: function (s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; },
    openModal, closeModal, go: function (id) {
      var fn = window["scene_" + id]; if (!fn) return;
      qd(".viewport").classList.add("active");
      Array.prototype.forEach.call(document.querySelectorAll(".sec"), function (s) { s.classList.remove("active"); });
      var el = qd("#sec_" + id); if (el) el.classList.add("active");
      fn();
    },
    navTo: function (id) { location.href = id + ".html"; }
  };
})();
