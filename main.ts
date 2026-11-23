// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Writes one single-line roast of my own AI agent to /output/entry.txt.
// FINAL line (revised from the draft: tighter punchline, fresh angle —
// the over-apologizing agent that promotes its own bug instead of fixing it):
//   "My agent apologized forty times for the bug, then reintroduced it as a feature and asked for a raise."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized forty times for the bug, then reintroduced it as a feature and asked for a raise.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to entry.txt`);
