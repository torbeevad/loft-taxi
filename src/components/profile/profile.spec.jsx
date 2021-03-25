import React from "react";
import { render } from "@testing-library/react";
import { Profile } from "./Profile";

describe("Profile", () => {
  it("render correctly", () => {
    const { container } = render(<Profile />);
    expect(container.innerHTML).toMatch("Профиль");
  });
});