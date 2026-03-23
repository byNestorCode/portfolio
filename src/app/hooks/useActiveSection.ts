"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (!sectionIds?.length) return;

        const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

        if (!elements.length) return;

        let currentSection: string | null = null;

        const observer = new IntersectionObserver(
        (entries) => {
            // 👇 buscamos el primero que esté intersectando
            const visibleEntry = entries.find((entry) => entry.isIntersecting);

            if (visibleEntry) {
            const id = visibleEntry.target.id;

            // 👇 evita re-render innecesario
            if (currentSection !== id) {
                currentSection = id;
                setActiveSection(id);
            }
            } else {
            // 👇 fallback: sección más cercana al centro
            const closest = entries.reduce((prev, curr) => {
                return Math.abs(curr.boundingClientRect.top) <
                Math.abs(prev.boundingClientRect.top)
                ? curr
                : prev;
            });

            if (closest) {
                const id = closest.target.id;
                if (currentSection !== id) {
                currentSection = id;
                setActiveSection(id);
                }
            }
            }
        },
        {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // 🔥 detecta en el centro
            threshold: 0,
        },
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
}
