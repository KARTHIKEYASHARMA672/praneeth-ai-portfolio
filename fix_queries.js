const fs = require("fs");
const files = ["index.html", "about.html", "skills.html", "projects.html", "experience.html",
  "certifications.html", "achievements.html", "contact.html", "resume.html"];
for (const f of files) {
  let t = fs.readFileSync(f, "utf8");
  t = t.replace(/(<script src=")([^"]+)(")/g, (m, a, p, c) => {
    if (!p.includes("?")) return a + p + "?v=3" + c;
    return m;
  });
  fs.writeFileSync(f, t);
}
console.log("done");
