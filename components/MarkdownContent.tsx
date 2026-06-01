"use client";

import { useEffect, useRef } from "react";

const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
const CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

export function MarkdownContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    container.querySelectorAll("pre").forEach((pre) => {
      // Avoid double-wrapping on hot-reload
      if (pre.parentElement?.classList.contains("code-block-wrapper")) return;

      // Wrap <pre> in a relative container so we can absolutely position the button
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper relative group";
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Build copy button
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Copy code");
      btn.className =
        "absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-md " +
        "px-2.5 py-1 text-xs font-medium border transition-all duration-150 " +
        "opacity-0 group-hover:opacity-100 focus:opacity-100 " +
        "bg-white/10 hover:bg-white/20 border-white/20 text-slate-200 " +
        "cursor-pointer select-none";
      btn.innerHTML = `${COPY_ICON}<span>Copy</span>`;

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = (code ?? pre).innerText;
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          // Fallback for older browsers / http
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }

        btn.innerHTML = `${CHECK_ICON}<span>Copied!</span>`;
        btn.classList.add(
          "bg-emerald-500/20",
          "border-emerald-400/30",
          "text-emerald-300",
        );

        setTimeout(() => {
          btn.innerHTML = `${COPY_ICON}<span>Copy</span>`;
          btn.classList.remove(
            "bg-emerald-500/20",
            "border-emerald-400/30",
            "text-emerald-300",
          );
        }, 2000);
      });

      wrapper.appendChild(btn);
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="markdown-content max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
