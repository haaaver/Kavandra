"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    navigator.serviceWorker.register("/sw.js").then((reg) => {
      
      // ha már várakozik új SW
      if (reg.waiting) {
        reg.waiting.postMessage("SKIP_WAITING");
      }

      // új SW figyelése
      reg.addEventListener("updatefound", () => {
        const newWorker = reg.installing;

        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            newWorker.postMessage("SKIP_WAITING");
          }
        });
      });

    });

  }, []);

  return null;
}
