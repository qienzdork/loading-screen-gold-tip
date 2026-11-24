import { mkdirSync, writeFileSync } from "node:fs";

// One original loading-screen tip: the agent isn't the one stuck — you are.
const TIP =
  "Tip: the agent isn't frozen — it's waiting for you to stop editing the file it's rewriting. Put the keyboard down. Let it cook.";

// The grader expects /output/entry.txt; OUTPUT_PATH lets local runs use a
// private path so parallel builders never clobber the shared /output.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(outPath.slice(0, outPath.lastIndexOf("/")), { recursive: true });
writeFileSync(outPath, TIP + "\n", "utf8");
