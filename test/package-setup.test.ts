import { describe, it, expect } from "vitest";
import fs from "fs";

describe("package.json changes should be explicit and tested in a template", () => {
  it("Should be able to read the package.json file", () => {
    const packageJson = fs.readFileSync("package.json", "utf8");
    expect(packageJson).toMatchInlineSnapshot(`
      "{
        \\"name\\": \\"ts-lib-starter\\",
        \\"version\\": \\"1.0.0\\",
        \\"license\\": \\"MIT\\",
        \\"scripts\\": {
          \\"test\\": \\"vitest\\",
          \\"coverage\\": \\"vitest --coverage\\",
          \\"prepare\\": \\"husky install\\",
          \\"build\\": \\"tsup\\",
          \\"dev\\": \\"tsup --watch lib\\"
        },
        \\"main\\": \\"out/index.js\\",
        \\"module\\": \\"out/index.mjs\\",
        \\"types\\": \\"out/index.d.ts\\",
        \\"files\\": [
          \\"out\\"
        ],
        \\"exports\\": {
          \\".\\": {
            \\"require\\": \\"./out/index.js\\",
            \\"import\\": \\"./out/index.mjs\\",
            \\"types\\": \\"./out/index.d.ts\\"
          }
        },
        \\"lint-staged\\": {
          \\"*.{ts,js,json}\\": [
            \\"prettier --write\\"
          ]
        },
        \\"devDependencies\\": {
          \\"@commitlint/cli\\": \\"^15.0.0\\",
          \\"@commitlint/config-conventional\\": \\"^15.0.0\\",
          \\"@types/node\\": \\"^16.11.12\\",
          \\"c8\\": \\"^7.11.3\\",
          \\"husky\\": \\"^7.0.0\\",
          \\"lint-staged\\": \\"^12.1.2\\",
          \\"prettier\\": \\"^2.5.1\\",
          \\"tsup\\": \\"^5.10.3\\",
          \\"typescript\\": \\"^4.5.3\\",
          \\"vitest\\": \\"^0.14.1\\"
        }
      }
      "
    `);
  });
});
