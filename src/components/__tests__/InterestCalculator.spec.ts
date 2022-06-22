import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InterestCalculator from "../InterestCalculator.vue";

describe("InterestCalculator", () => {
  it("renders properly", () => {
    const wrapper = mount(InterestCalculator);
    expect(wrapper.text()).toContain("Loan details");
  });
});
