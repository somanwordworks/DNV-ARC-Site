"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    // Trigger hero elements immediately
    document.querySelectorAll(".reveal-hero").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 80 + i * 120);
    });
    return () => obs.disconnect();
  }, []);
  return null;
}
