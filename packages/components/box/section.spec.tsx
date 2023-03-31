import { expect, describe, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Section } from "./section";

describe("Section Component", () => {
  it("to be rendered", () => {
    render(
      <Section>
        <p>Hello World</p>
      </Section>
    );
    const button = within(screen.getByText(/Hello World/));
    expect(button).toBeDefined();
  });
});
