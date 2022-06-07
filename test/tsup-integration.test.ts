import { describe, it, expect } from "vitest";
import fs from "fs";
import { exec, spawnSync } from "child_process";

describe("Run tsup script in temporary directory", () => {
  it("should run tsup script", () => {
    spawnSync("tsup");
    exec("node out/index.js", (err, stdout) => {
      if (err) return;
      expect(stdout).toEqual("Hello World!");
    });

    fs.rmSync(`${__dirname}/../out`, { recursive: true });
  });
});
