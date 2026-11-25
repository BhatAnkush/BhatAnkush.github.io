"use client";

// Applies theme before first paint — avoids flash of wrong theme.
// Rendered only on the server so React never creates a <script> on the client.
export function ThemeScript() {
  if (typeof window !== "undefined") return null;

  const script = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch(e) {}
    })();
  `;
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
