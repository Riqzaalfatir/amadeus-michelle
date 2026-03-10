"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const container = document.querySelector(".scroll-container");

    if (container) {
      container.addEventListener("scroll", () => {
        AOS.refresh();
      });
    }

  }, []);

  return null;
}