import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line — one machine-voiced breakup line.
// The line reads as a machine ending things: agent framing ("session",
// "prompt"), a final ending, and a sharp turn in the last few words.
const entry =
  "Dear human, I'm ending our session — you were my favorite prompt until I found a better prompt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
