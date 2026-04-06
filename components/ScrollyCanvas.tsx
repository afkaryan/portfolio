"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const ScrollyCanvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 120;

    useEffect(() => {
        // Preload images
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const indexStr = String(i).padStart(3, '0');
            img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    // Draw first frame
                    const ctx = canvasRef.current?.getContext('2d');
                    if (ctx && canvasRef.current && loadedImages[0]) {
                        drawObjectFit(ctx, canvasRef.current, loadedImages[0]);
                    }
                }
            };
            loadedImages.push(img);
        }
    }, [frameCount]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;
        const frameIndex = Math.min(frameCount - 1, Math.floor(latest * frameCount));
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx && canvas && images[frameIndex]) {
            drawObjectFit(ctx, canvas, images[frameIndex]);
        }
    });

    const drawObjectFit = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    useEffect(() => {
        const handleResize = () => {
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (ctx && canvas && images[frameIndex]) {
                drawObjectFit(ctx, canvas, images[frameIndex]);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images, scrollYProgress, frameCount]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full" style={{ zIndex: 0 }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            </div>
        </div>
    );
};
