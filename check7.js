async function f() {
  for (const p of ["js/app.js", "js/scene-home.js"]) {
    const u = "https://karthikeyasharma672.github.io/praneeth-ai-portfolio/" + p;
    const r = await fetch(u);
    const t = await r.text();
    console.log(p, "status:", r.status, "len:", t.length, "has App.scene:", t.includes("App.scene"), "has 'scene is not':", t.includes("scene is not"));
    console.log("  head:", JSON.stringify(t.slice(0, 120)));
  }
}
f();
