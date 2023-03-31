import { describe, it, expect } from "vitest";
import { i18n } from "./i18n-config";

describe("i18n check object", () => {
  it("it has default id as a lang", () => {
    expect(i18n.defaultLocale).toBe("id");
  });

  it("it has 2 locale being set", () => {
    expect(i18n.locales.length).toBe(2);
  });
});
