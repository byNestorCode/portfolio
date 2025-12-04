"use client";

import { NextUIProvider } from "@nextui-org/react";
import { HeroUIProvider } from "@heroui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </HeroUIProvider>
    );
}
