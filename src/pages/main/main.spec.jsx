import React from "react";
import { render } from "@testing-library/react";
import { Main } from "./main";

describe("Main", () => {
  it("render correctly", () => {
    const { container } = render(<Main />);
    expect(container.innerHTML).toMatch("div");
  });
});
