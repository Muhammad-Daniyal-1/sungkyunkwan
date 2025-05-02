"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/UI/Header/TopBar";
import MegaMenu from "@/components/UI/Header/MegaMenu";
import SideMenuBar from "@/components/Home/SideMenuBar";
import SearchBox from "@/components/Home/SearchBox";
import HeroSection from "@/components/Home/HeroSection";
import ResearchSection from "@/components/Home/ResearchSection";
import TrendsSection from "@/components/Home/TrendsSection";
import ReviewsSection from "@/components/Home/ReviewsSection";
import BestReviewSection from "@/components/Home/BestReviewSection";
import LoveProjectSection from "@/components/Home/LoveProjectSection";
import InfoSection from "@/components/Home/InfoSection";
import Footer from "@/components/UI/Footer/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Array of sections data with their IDs
  const sections = [
    { id: "hero", component: <HeroSection /> },
    { id: "research", component: <ResearchSection /> },
    { id: "trends", component: <TrendsSection /> },
    { id: "reviews", component: <ReviewsSection /> },
    { id: "best-reviews", component: <BestReviewSection /> },
    { id: "love-project", component: <LoveProjectSection /> },
    { id: "info", component: <InfoSection /> },
  ];

  // Handle section change
  const goToSection = (index: number) => {
    if (
      isTransitioning ||
      index === currentIndex ||
      index < 0 ||
      index >= sections.length
    ) {
      return;
    }

    setIsTransitioning(true);
    setCurrentIndex(index);

    // Update URL hash
    window.history.replaceState(null, "", `#${sections[index].id}`);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // Match your CSS transition timing
  };

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      // Determine scroll direction and move section accordingly
      const direction = e.deltaY > 0 ? 1 : -1;
      goToSection(currentIndex + direction);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goToSection(currentIndex - 1);
      } else if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goToSection(currentIndex + 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isTransitioning]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart === null || isTransitioning) return;

      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;

      // Require a minimum movement to trigger section change (to avoid accidental triggers)
      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        goToSection(currentIndex + direction);
        setTouchStart(null);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex, isTransitioning, touchStart]);

  // Handle section navigation from sidebar
  const handleSectionClick = (sectionId: string) => {
    const index = sections.findIndex((section) => section.id === sectionId);
    if (index !== -1) {
      goToSection(index);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Fixed header (40% of screen) */}
      <div
        className="fixed top-0 left-0 right-0 z-40 bg-white"
        style={{ height: "40vh" }}
      >
        <TopBar />
        <MegaMenu />
        <div className="px-20">
          <SearchBox />
        </div>
      </div>

      {/* Side menu bar */}
      <SideMenuBar
        activeSection={sections[currentIndex].id}
        onSectionClick={handleSectionClick}
      />

      {/* Sections container with transform for transitions */}
      <div
        className="absolute left-0 right-0 transition-transform duration-700 ease-in-out px-20"
        style={{
          top: "35vh",
          height: "65vh",
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className="h-full w-full absolute top-0 left-0 px-20"
            style={{
              transform: `translateY(${index * 100}%)`,
            }}
          >
            {section.component}
          </div>
        ))}
      </div>

      {/* Pagination dots (optional) */}
      {/* <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <ul className="flex flex-col items-center gap-4">
          {sections.map((section, index) => (
            <li
              key={section.id}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSection(index)}
            />
          ))}
        </ul>
      </div> */}

      {/* Footer - only shown when on the last section */}
      <div
      // className="fixed bottom-0 left-0 right-0 bg-white transition-transform duration-700 ease-in-out"
      // style={{
      //   transform: `translateY(${
      //     currentIndex === sections.length - 1 ? "0" : "100%"
      //   })`,
      // }}
      >
        <Footer />
      </div>
    </div>
  );
}
