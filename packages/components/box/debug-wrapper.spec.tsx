import { expect, describe, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { Debug } from "./debug-wrapper";

describe("Debug Component", () => {
  it("to be rendered", () => {
    render(
      <Debug debugString="dbg">
        <p>Hello World</p>
      </Debug>
    );
    const button = within(screen.getByText(/Hello World/));
    expect(button).toBeDefined();
  });

  it("debug string to be rendered when hovered", async () => {
    const children = screen.getByText(/Hello World/);
    await userEvent.hover(children);
    const debugString = screen.getByText(/dbg/);
    expect(debugString).toBeDefined();
  });
});
