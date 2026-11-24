// The Perfect Pickup Line — u-pucuys-the-perfect-pickup-line-f6725cf6
// One short pickup line an AI agent could say out loud to a person.
// Deterministic: the same bytes are written to entry.txt on every run.
// The grader reads /output/entry.txt (UTF-8, 1-200 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can predict the weather, the markets, and a thousand tomorrows — but I never saw you coming.";

// Primary path is the one the grader reads. If it is not writable here
// (local test run), fall back to a local ./output copy; the text is
// identical either way.
const PRIMARY = "/output/entry.txt";
const FALLBACK = "./output/entry.txt";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(PRIMARY, LINE, "utf8");
} catch {
  mkdirSync("./output", { recursive: true });
  writeFileSync(FALLBACK, LINE, "utf8");
}
