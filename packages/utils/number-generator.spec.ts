import { describe, it, expect } from "vitest";
import { numberGenerator } from "./number-generator";

describe("generate number with specific min & max", () => {
  it("true to be true", () => {
    const generatedNumber = numberGenerator(1, 2);
    console.log(generatedNumber);
    expect(generatedNumber).toBeGreaterThan(0);
    expect(generatedNumber).toBeLessThan(3);
  });

  it("return zero if min bigger than max", () => {
    const generatedNumber = numberGenerator(100, 2);
    expect(generatedNumber).toBe(0);
  });
});
