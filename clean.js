const fs = require("fs");
for (const f of ["check2.js", "check3.js", "check4.js", "check5.js", "check6.js", "check7.js", "fix_queries.js", "screenshot-home.png"]) {
  try { fs.unlinkSync("L:\\pr 34\\" + f); } catch (e) {}
}
console.log("cleaned");
