const { execFileSync } = require("child_process");
(async () => {
  const r = await fetch("https://karthikeyasharma672.github.io/praneeth-ai-portfolio/js/scene-home.js");
  const t = await r.text();
  console.log("pages scene-home.js status:", r.status, "len:", t.length);
  console.log("has App.scene fix:", t.includes("App.scene"));
  console.log("has 'scene.rotation':", t.includes("scene.rotation"));
  console.log(t.slice(0, 300));
})();
