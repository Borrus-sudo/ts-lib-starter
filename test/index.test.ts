import { describe, it, expect } from "vitest";
import { helloWorld } from "../lib/index";

describe("it should pass the tests", () => {
  it("Should print 'Hello World!' from foo, exported from index", () => {
    expect(helloWorld()).toEqual("Hello World!");
  });
});
