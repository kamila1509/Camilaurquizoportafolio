/** True for desktop/mobile Safari, false for Chrome/Firefox/Edge (incl. Chromium-based). */
export function isSafariBrowser(): boolean {
  if (typeof navigator === "undefined") {
    return false;
  }
  const ua = navigator.userAgent;
  if (!/Safari\//.test(ua)) {
    return false;
  }
  if (/Chrome\/|Chromium\/|CriOS|FxiOS|EdgA?\/|OPR\/|DuckDuckGo\//.test(ua)) {
    return false;
  }
  return true;
}
