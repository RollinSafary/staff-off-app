import { spawn } from "child_process";

const buildWatcher = spawn("pnpm", ["run", "build:watch"], {
  stdio: "inherit",
  shell: true,
});

const firebaseEmulator = spawn("firebase", ["emulators:start"], {
  stdio: "inherit",
  shell: true,
});

firebaseEmulator.on("exit", (code) => {
  buildWatcher.kill();
  process.exit(code ?? 0);
});
