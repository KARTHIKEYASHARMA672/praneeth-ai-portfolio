async function f() {
  const u = "https://karthikeyasharma672.github.io/praneeth-ai-portfolio/index.html";
  const r = await fetch(u);
  const t = await r.text();
  const m = t.match(/<div class="sec[^"]*" id="sec_home"[^>]*>/);
  console.log("pages index.html sec_home tag:", m ? m[0] : "NOT FOUND");
  const gh = await fetch("https://raw.githubusercontent.com/KARTHIKEYASHARMA672/praneeth-ai-portfolio/main/index.html");
  const gt = await gh.text();
  const m2 = gt.match(/<div class="sec[^"]*" id="sec_home"[^>]*>/);
  console.log("repo index.html sec_home tag:", m2 ? m2[0] : "NOT FOUND");
}
f();
