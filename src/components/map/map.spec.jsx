import React from "react";
import { render } from "@testing-library/react";
import { Map } from "./map";

describe("Map", () => {
  it("render correctly", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("Карта");
  });
});
