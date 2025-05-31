import { existsSync } from "fs";
import { spawn } from "child_process";

const seedPath = "./seed";
const backupPath = "./emulator-backup";

const args = ["emulators:start", "--export-on-exit=./emulator-backup"];

if (existsSync(backupPath)) {
  args.push(`--import=${backupPath}`);
}
if (existsSync(seedPath)) {
  args.push(`--import=${seedPath}`);
}

const proc = spawn("firebase", args, { stdio: "inherit", shell: true });

proc.on("exit", (code: number) => {
  process.exit(code);
});
