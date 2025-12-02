"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

// The Layout Logic: We define different spans for an "Editorial" feel
const images = [
  { id: 1, src: "/assets/1.jpeg", alt: "Signature Dish", span: "md:col-span-2 md:row-span-2" }, // Big Star
  { id: 2, src: "/assets/1.jpeg", alt: "Plating Detail", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/assets/gallery-3.jpg", alt: "Cocktail Pour", span: "md:col-span-1 md:row-span-2" }, // Tall
  { id: 4, src: "/assets/gallery-4.jpg", alt: "Interior Vibe", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "/assets/3.1.jpeg", alt: "Cheese on top", span: "md:col-span-1 md:row-span-1" },
  { id: 7, src: "/assets/gallery-7.jpg", alt: "Dessert Macro", span: "md:col-span-1 md:row-span-1" },
  { id: 8, src: "/assets/gallery-8.jpg", alt: "Table Spread", span: "md:col-span-2 md:row-span-2" }, // Big Star
  { id: 9, src: "/assets/gallery-9.jpg", alt: "Steam/Smoke", span: "md:col-span-1 md:row-span-1" },
  { id: 10, src: "/assets/2.1.jpeg", alt: "Final Plate", span: "md:col-span-1 md:row-span-1" },
];

export const GallerySection = () => {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 px-4 md:px-12 border-t border-white/10 relative">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 contrast-150 mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24 z-10 relative">
        <span className="text-accent text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
            Curated Works
        </span>
        <h2 className="text-5xl md:text-8xl font-bold uppercase text-primary leading-[0.85] mix-blend-difference">
            The Visual <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #D94E1F" }}>Feast</span>
        </h2>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[250px] gap-4 max-w-[1600px] mx-auto">
        {images.map((img, index) => (
            <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className={`relative group overflow-hidden bg-zinc-900 ${img.span}`}
            >
                {/* Image */}
                <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Border Frame */}
                <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                
                {/* Optional: Caption on Hover */}
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-xs uppercase tracking-widest font-bold bg-black/50 backdrop-blur-md px-3 py-1">
                        {img.alt}
                    </span>
                </div>
            </motion.div>
        ))}
      </div>

    </section>
  );
};
