"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            // 👇 nos quedamos con la sección MÁS visible
            const visibleSection = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (visibleSection) {
            setActiveSection(visibleSection.target.id);
            }
        },
        {
            threshold: [0.25, 0.5, 0.75], // 👈 clave
        }
        );

        sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
}