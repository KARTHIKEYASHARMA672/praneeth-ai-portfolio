const { execFileSync } = require("child_process");
let j;
try {
  j = JSON.parse(execFileSync("gh", ["api", "repos/KARTHIKEYASHARMA672/praneeth-ai-portfolio/pages"], { encoding: "utf8" }));
} catch (e) { console.log("gh err", e.message); process.exit(0); }
console.log("pages status:", j.status, "build:", j.build_status, "commit:", (j.commit || "") && j.commit.sha);
console.log("cname:", j.cname);
