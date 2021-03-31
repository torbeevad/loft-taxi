import React from "react";
import { render } from "@testing-library/react";
import { Registration } from "./registration";

describe("Registration", () => {
  it("render correctly", () => {
    const { container } = render(<Registration />);
    expect(container.innerHTML).toMatch("button");
  });
});
