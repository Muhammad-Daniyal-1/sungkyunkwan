"use client";

// Home.jsx
import { useEffect, useState, useRef } from "react";
import TopBar from "@/components/UI/Header/TopBar";
import MegaMenu from "@/components/UI/Header/MegaMenu";
import SideMenuBar from "@/components/UI/SideMenuBar";
import SearchBox, { SearchBoxHandle } from "@/components/Home/SearchBox";
import HeroSection from "@/components/Home/HeroSection";
import ResearchSection from "@/components/Home/ResearchSection";
import TrendsSection from "@/components/Home/TrendsSection";
import ReviewsSection from "@/components/Home/ReviewsSection";
import BestReviewSection from "@/components/Home/BestReviewSection";
import LoveProjectSection from "@/components/Home/LoveProjectSection";
import InfoSection from "@/components/Home/InfoSection";
import Footer from "@/components/UI/Footer/Footer";
import RightSidebar from "@/components/UI/RightSidebar";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const contentContainerRef = useRef(null);
  const searchWrapperRef = useRef(null);

  const searchBoxRef = useRef<SearchBoxHandle>(null);


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

  // Handle search box expansion state change
  const handleSearchExpandChange = (expanded) => {
    // setIsSearchExpanded(expanded);
  };

  // Handle section change
  const goToSection = (index) => {
    if (
      isTransitioning ||
      index === currentIndex ||
      index < 0 ||
      index >= sections.length
    ) {
      return;
    }
  
    // Collapse search box before section transition
    if (searchBoxRef.current) {
      searchBoxRef.current.collapse();
    }
  
    setIsTransitioning(true);
    setCurrentIndex(index);
    window.history.replaceState(null, "", `#${sections[index].id}`);
  
    const newOffset = index === 0 ? 0 : -70;
    setScrollOffset(newOffset);
  
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Monitor SearchBox height changes using MutationObserver
  useEffect(() => {
    if (!searchWrapperRef.current || !contentContainerRef.current) return;

    const updateSearchBoxHeight = () => {
      if (searchWrapperRef.current) {
        const height = searchWrapperRef.current.offsetHeight;
        // Only update if the height has actually changed
        if (height !== searchBoxHeight) {
          setSearchBoxHeight(height);
        }
      }
    };

    // Initial measurement
    updateSearchBoxHeight();

    // Setup MutationObserver to detect DOM changes
    const observer = new MutationObserver(() => {
      updateSearchBoxHeight();
    });

    // Observe the search wrapper for any changes
    observer.observe(searchWrapperRef.current, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [isSearchExpanded, searchBoxHeight]);

  // Handle wheel events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isTransitioning) return;

      // Determine scroll direction and move section accordingly
      const direction = e.deltaY > 0 ? 1 : -1;
      goToSection(currentIndex + direction);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
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
  }, [currentIndex, isTransitioning, isSearchExpanded]);

  // Handle touch events for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
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
  }, [currentIndex, isTransitioning, touchStart, isSearchExpanded]);

  // Handle section navigation from sidebar
  const handleSectionClick = (sectionId) => {
    const index = sections.findIndex((section) => section.id === sectionId);
    if (index !== -1) {
      goToSection(index);
    }
  };

  // Calculate additional offset for content based on SearchBox expansion
  const contentOffset = isSearchExpanded ? searchBoxHeight - 80 : 0;

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <div
          className="w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(${scrollOffset}px)` }}
        >
          <TopBar />

          <div className="bg-white" id="fixed-header">
            <MegaMenu />
            <div
              ref={searchWrapperRef}
              className="px-20 mx-auto max-w-[1440px] bg-white"
            >
<SearchBox ref={searchBoxRef} onExpandChange={handleSearchExpandChange} />
</div>
          </div>
        </div>
      </div>

      <SideMenuBar
        activeSection={sections[currentIndex]?.id}
        onSectionClick={handleSectionClick}
      />

      <RightSidebar />

      {/* Sections container with transform for transitions */}
      <div
        ref={contentContainerRef}
        className="absolute left-0 right-0 max-w-[1440px] mx-auto px-20 z-10"
        style={{
          top: `calc(27vh + ${contentOffset}px)`,
          height: `calc(73vh - ${contentOffset}px)`,
          transform: `translateY(-${currentIndex * 100}%)`,
          transition:
            "transform 700ms ease-in-out, top 500ms ease-in-out, height 500ms ease-in-out",
        }}
      >
        {/* All content sections */}
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

      {/* Footer section - appears as last section */}
      <div
        className={`absolute left-0 right-0 w-full transition-transform duration-700 ease-in-out`}
        style={{
          top: "100vh",
          transform: `translateY(${
            currentIndex === sections.length - 1 ? "-100%" : "0"
          })`,
          zIndex: 10,
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
