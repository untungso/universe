import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { InsteadLogo } from "./instead-logo";

describe("InsteadLogo Component", () => {
  it("to be rendered", () => {
    render(<InsteadLogo scale={3} />);
    const logo = within(screen.getByAltText(/Malah Ngoding Logo/));
    expect(logo).toBeDefined();
  });
});
