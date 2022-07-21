import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NumberInput from "../NumberInput.vue";

describe("NumberInput", () => {
  it("renders properly", () => {
    const wrapper = mount(NumberInput, {
      props: {
        label: "Number label",
        name: "number",
        modelValue: 100,
      },
    });

    const label = wrapper.get("label");
    const input = wrapper.get("input");

    expect(label.text()).toContain("Number label");
    expect(input.attributes()["name"]).toBe("number");

    expect(input.element.value).toBe("100");

    input.element.value = "200";

    expect(input.element.value).toBe("200");
  });
});
