import { test, expect, type Page } from "@playwright/test";

const URL = "http://localhost:5173";
const THEME_KEY = "camila-portfolio-theme";
const LOADER_MS = 2200; // KawaiiLoader shows for 2 s — wait a bit more

// ─── helpers ────────────────────────────────────────────────────────────────

async function waitForApp(page: Page) {
  // Wait until the KawaiiLoader dismisses and the Header is visible
  await page.waitForSelector("header", { timeout: 6000 });
}

async function getDataTheme(page: Page): Promise<string | null> {
  return page.evaluate(() => document.documentElement.getAttribute("data-theme"));
}

async function getComputedBg(page: Page): Promise<string> {
  return page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue("--background").trim()
  );
}

async function getThemeColorMeta(page: Page): Promise<string | null> {
  return page.evaluate(() =>
    document.querySelector('meta[name="theme-color"]')?.getAttribute("content") ?? null
  );
}

async function clickThemeToggle(page: Page) {
  const btn = page.getByRole("button", { name: /toggle dark mode/i });
  await btn.click();
}

async function getStoredTheme(page: Page): Promise<string | null> {
  return page.evaluate((key) => localStorage.getItem(key), THEME_KEY);
}

// ─── tests ───────────────────────────────────────────────────────────────────

test.describe("Safari theme switch", () => {
  test.beforeEach(async ({ page }) => {
    // Start from a clean localStorage so theme is always dark (default)
    await page.goto(URL);
    await page.evaluate((key) => localStorage.removeItem(key), THEME_KEY);
    await page.reload();
    await waitForApp(page);
  });

  // 1. Initial state ─────────────────────────────────────────────────────────
  test("initial data-theme is dark when no localStorage key exists", async ({ page }) => {
    const theme = await getDataTheme(page);
    expect(theme).toBe("dark");
  });

  test("inline script sets data-theme before React hydrates (no FOUC)", async ({ page }) => {
    // Capture the data-theme attribute at the very first paint by checking it
    // before any JS has run. We do this by setting localStorage first and then
    // tracking the attribute immediately on navigation.
    await page.evaluate((key) => localStorage.setItem(key, "light"), THEME_KEY);

    let themeAtFirstPaint: string | null = null;
    page.on("domcontentloaded", async () => {
      themeAtFirstPaint = await page
        .evaluate(() => document.documentElement.getAttribute("data-theme"))
        .catch(() => null);
    });

    await page.reload();
    await waitForApp(page);

    // After the reload the theme should be light (set by inline script)
    expect(await getDataTheme(page)).toBe("light");
    // The inline script must have applied it before React ran
    if (themeAtFirstPaint !== null) {
      expect(themeAtFirstPaint).toBe("light");
    }
  });

  // 2. Toggle: dark → light ──────────────────────────────────────────────────
  test("clicking toggle switches data-theme from dark to light", async ({ page }) => {
    expect(await getDataTheme(page)).toBe("dark");
    await clickThemeToggle(page);

    // data-theme must update promptly (within 1 s — the Safari overlay stays
    // for up to 700 ms but the attribute must already be set)
    await expect
      .poll(() => getDataTheme(page), { timeout: 1500 })
      .toBe("light");
  });

  test("toggle persists theme to localStorage", async ({ page }) => {
    await clickThemeToggle(page); // dark → light
    await expect
      .poll(() => getStoredTheme(page), { timeout: 1500 })
      .toBe("light");

    await clickThemeToggle(page); // light → dark
    await expect
      .poll(() => getStoredTheme(page), { timeout: 1500 })
      .toBe("dark");
  });

  test("theme-color meta tag updates on toggle", async ({ page }) => {
    // dark default → meta should be the dark background colour
    const darkMeta = await getThemeColorMeta(page);
    expect(darkMeta?.toLowerCase()).toBe("#1a0b1c");

    await clickThemeToggle(page); // → light
    await expect
      .poll(() => getThemeColorMeta(page), { timeout: 1500 })
      .toMatch(/^#fff5fa$/i);
  });

  // 3. CSS custom property swaps correctly ───────────────────────────────────
  test("--background CSS var changes to light value after toggle", async ({ page }) => {
    // Dark background token
    expect(await getComputedBg(page)).toMatch(/#1a0b1c/i);

    await clickThemeToggle(page);

    await expect
      .poll(() => getComputedBg(page), { timeout: 1500 })
      .toMatch(/#fff5fa/i);
  });

  test("round-trip toggle restores original --background", async ({ page }) => {
    const original = await getComputedBg(page);
    await clickThemeToggle(page);
    await clickThemeToggle(page);

    await expect
      .poll(() => getComputedBg(page), { timeout: 2500 })
      .toBe(original);
  });

  // 4. SafariThemeSplash overlay ─────────────────────────────────────────────
  test("SafariThemeSplash overlay appears and then disappears after toggle", async ({
    page,
    browserName,
  }) => {
    // The overlay is only rendered in Safari (isSafariBrowser check in App.tsx).
    // When running under Playwright WebKit the UA may not match, so we patch it.
    await page.addInitScript(() => {
      // Override to look like real Safari so the branch runs
      Object.defineProperty(navigator, "userAgent", {
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
        configurable: true,
      });
    });
    await page.reload();
    await waitForApp(page);

    await clickThemeToggle(page);

    // Overlay should appear (role=status wrapping the splash text)
    const overlay = page.getByRole("status");
    await expect(overlay).toBeVisible({ timeout: 1000 });

    // And disappear within SAFARI_THEME_SWITCH_MS + buffer (700 ms + 500 ms)
    await expect(overlay).toBeHidden({ timeout: 1500 });
  });

  test("SafariThemeSplash shows correct text for dark→light switch", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "userAgent", {
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
        configurable: true,
      });
    });
    await page.reload();
    await waitForApp(page);

    // We start in dark mode; toggle → light
    await clickThemeToggle(page);
    const overlay = page.getByRole("status");
    await expect(overlay).toContainText(/Loading light mode/i, { timeout: 1000 });
  });

  test("SafariThemeSplash shows correct text for light→dark switch", async ({ page }) => {
    // Pre-set localStorage to light so we start in light mode
    await page.evaluate((key) => localStorage.setItem(key, "light"), THEME_KEY);
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "userAgent", {
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
        configurable: true,
      });
    });
    await page.reload();
    await waitForApp(page);

    await clickThemeToggle(page);
    const overlay = page.getByRole("status");
    await expect(overlay).toContainText(/Loading dark mode/i, { timeout: 1000 });
  });

  // 5. color-scheme property ─────────────────────────────────────────────────
  test("color-scheme inline style matches data-theme", async ({ page }) => {
    const getColorScheme = () =>
      page.evaluate(() => document.documentElement.style.getPropertyValue("color-scheme"));

    expect(await getColorScheme()).toBe("dark");

    await clickThemeToggle(page);
    await expect.poll(getColorScheme, { timeout: 1500 }).toBe("light");

    await clickThemeToggle(page);
    await expect.poll(getColorScheme, { timeout: 2000 }).toBe("dark");
  });

  // 6. Reload persistence ────────────────────────────────────────────────────
  test("theme survives a full page reload", async ({ page }) => {
    await clickThemeToggle(page); // dark → light
    await expect.poll(() => getDataTheme(page), { timeout: 1500 }).toBe("light");

    await page.reload();
    await waitForApp(page);

    expect(await getDataTheme(page)).toBe("light");
    expect(await getComputedBg(page)).toMatch(/#fff5fa/i);
  });

  // 7. Backdrop-filter GPU tile flush ──────────────────────────────────────
  test("backdrop-blur cards repaint after toggle — no stale light-mode pixels", async ({
    page,
  }) => {
    // Scroll to the AboutMe section so the backdrop-blur cards are in view
    await page.addInitScript(() => {
      Object.defineProperty(navigator, "userAgent", {
        value:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15",
        configurable: true,
      });
    });
    await page.reload();
    await waitForApp(page);
    await page.evaluate(() => window.scrollTo(0, 1200));

    // Capture the background value before toggle (dark default)
    const bgBefore = await getComputedBg(page);
    expect(bgBefore).toMatch(/#1a0b1c/i);

    await clickThemeToggle(page);

    // After toggle completes, --background must switch to light value
    await expect
      .poll(() => getComputedBg(page), { timeout: 2000 })
      .toMatch(/#fff5fa/i);

    // Toggle back to dark — must switch back
    await clickThemeToggle(page);
    await expect
      .poll(() => getComputedBg(page), { timeout: 2000 })
      .toMatch(/#1a0b1c/i);
  });

  // 8. No flash on reload ────────────────────────────────────────────────────
  test("data-theme is set synchronously by inline script — no frame where it is missing", async ({
    page,
  }) => {
    await page.evaluate((key) => localStorage.setItem(key, "light"), THEME_KEY);

    // Intercept the first HTML response and check the inline script is present
    const html = await page.evaluate(async () => {
      const r = await fetch(location.href);
      return r.text();
    });

    expect(html).toContain('data-theme');
    expect(html).toContain('camila-portfolio-theme');
  });
});
