import { test, expect, type Page } from "@playwright/test";

test.describe("Demonstration of grep config not matching metadata", () => {
  test("run with me with 'npx playwright test -g @grep'", async ({}, testInfo) => {
    expect(testInfo.config.grep).toBe("@grep");
  });
});
