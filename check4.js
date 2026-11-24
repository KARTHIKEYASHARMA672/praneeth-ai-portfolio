const { execFileSync } = require("child_process");
function run(args) {
  try { return execFileSync("gh", ["api", ...args], { encoding: "utf8" }); }
  catch (e) { return (e.stdout || e.message || "").toString().slice(0, 500); }
}
const builds = run(["repos/KARTHIKEYASHARMA672/praneeth-ai-portfolio/pages/builds"]);
console.log("builds:", builds.slice(0, 3000));
