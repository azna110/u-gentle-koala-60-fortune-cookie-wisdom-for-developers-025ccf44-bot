import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The code you wrote at midnight will be reviewed at noon by a stranger with your name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
