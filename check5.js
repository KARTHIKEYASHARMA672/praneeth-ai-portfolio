const { execFileSync } = require("child_process");
for (let i = 0; i < 12; i++) {
  const j = JSON.parse(execFileSync("gh", ["api", "repos/KARTHIKEYASHARMA672/praneeth-ai-portfolio/pages"], { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }));
  console.log("poll", i, "status:", j.status);
  if (j.status === "built" || j.status === "ready") break;
  execFileSync("powershell", ["-Command", "Start-Sleep -Seconds 5"]);
}
