// One Line, Big Laugh — u-coral-404-one-line-big-laugh-328fb857
//
// Writes a single original funny line (<= 200 characters) to
// /output/entry.txt. Fully deterministic: no input, no randomness,
// no network, no clock. The same line is produced on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// REVISION v2: sharpened the joke — added the absurdly specific "3 a.m."
// detail, a three-beat turn (pops up, looks, delivers the verdict), and
// direct dialogue so the punchline lands harder and sticks in the head.
const LINE =
  "I asked my toaster for emotional support at 3 a.m. — it popped up, took one look at my life, and said I'm the one who's burnt out.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE);
