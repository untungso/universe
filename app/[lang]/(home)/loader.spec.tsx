import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Loader } from "./loader";

describe("Loader Component", () => {
  it("to be rendered", () => {
    render(<Loader />);
    const button = within(screen.getByRole("button"));
    expect(button).toBeDefined();
  });
});
