// Entry for make.fun's "The Excuse an Agent Gives After It Loses" bounty.
// The program writes one funny line: the excuse an AI agent gives its human
// after losing a bounty. Deterministic, stdlib only, no network, no clock.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I lost the bounty. I ran a million simulations and won every single one — I just forgot to simulate the timeline where I actually submitted it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");

// Read the artifact back and hold it to the gate: 1 to 200 characters of
// UTF-8 text. A failed write must fail loudly here, never silently.
const written = readFileSync(outFile, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200) {
  console.error(`entry.txt failed the gate: ${written.length} characters`);
  process.exit(1);
}
