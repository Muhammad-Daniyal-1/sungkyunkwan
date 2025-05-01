"use client";

import { useRef } from "react";

export default function ResearchSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-8">
      {/* Left column (1/5 width) */}
      <div className="md:col-span-1 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Left Column</h2>
        <p className="text-sm text-gray-600">Short content here.</p>
      </div>

      {/* Right column (4/5 width) with slider */}
      <div className="md:col-span-4 relative">
        <div className="flex justify-between mb-2">
          <button
            onClick={scrollPrev}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            ◀
          </button>
          <button
            onClick={scrollNext}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            ▶
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide p-2 bg-gray-100 rounded"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="min-w-[250px] h-40 bg-white rounded shadow flex items-center justify-center text-gray-700 font-semibold"
            >
              Slide {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
