import React from "react";
import { render } from "@testing-library/react";
import { Login } from "./login";

describe("Login", () => {
  it("render correctly", () => {
    const { container } = render(<Login />);
    expect(container.innerHTML).toMatch("button");
  });
});
