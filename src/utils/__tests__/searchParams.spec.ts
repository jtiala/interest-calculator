import { describe, it, expect } from "vitest";

import { getNumberParam } from "../searchParams";

describe("getNumberParam", () => {
  it("gets param correctly", () => {
    const params = new URLSearchParams({
      1: "100",
      2: "0",
      3: "-999999",
      4: "",
      5: "NaN",
    });

    expect(getNumberParam(params, "1")).toBe(100);
    expect(getNumberParam(params, "2")).toBe(0);
    expect(getNumberParam(params, "3")).toBe(-999999);
    expect(getNumberParam(params, "4")).toBe(undefined);
    expect(getNumberParam(params, "5")).toBe(undefined);
  });
});
