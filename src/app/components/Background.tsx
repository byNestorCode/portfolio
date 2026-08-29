'use client';
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import Grainient from "./Grainient";

function Background() {
    const isMobile = useIsMobile();
    const [supportsWebGL2, setSupportsWebGL2] = useState(false);

    useEffect(() => {
        const canvas = document.createElement("canvas");
        setSupportsWebGL2(Boolean(canvas.getContext("webgl2")));
    }, []);

    const showGrainient = isMobile === false && supportsWebGL2;

    return (
        <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden  pointer-events-none">
            {/* <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }} /> */}

            {showGrainient && (
                <Grainient
                    color1="#006d8f"
                    color2="#002e7a"
                    color3="#B19EEF"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            )}
        </div>
    );
}

export default Background
