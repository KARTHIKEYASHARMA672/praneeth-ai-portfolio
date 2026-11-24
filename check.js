async function f() {
  const urls = [
    "https://cdn.jsdelivr.net/npm/three@0.160/build/three.min.js",
    "https://karthikeyasharma672.github.io/praneeth-ai-portfolio/",
    "https://karthikeyasharma672.github.io/praneeth-ai-portfolio/projects.html",
    "https://karthikeyasharma672.github.io/praneeth-ai-portfolio/index.html"
  ];
  for (const u of urls) {
    try {
      const r = await fetch(u, { redirect: "follow" });
      const t = await r.text();
      console.log(u, r.status, "len:", t.length, "head:", JSON.stringify(t.slice(0, 80)));
    } catch (e) { console.log(u, "ERR", e.message); }
  }
}
f();
