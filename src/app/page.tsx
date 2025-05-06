"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import TopBar from "@/components/UI/Header/TopBar";
import MegaMenu from "@/components/UI/Header/MegaMenu";
import SideMenuBar from "@/components/UI/SideMenuBar";
import SearchBox from "@/components/Home/SearchBox";
import HeroSection from "@/components/Home/HeroSection";
import ResearchSection from "@/components/Home/ResearchSection";
import TrendsSection from "@/components/Home/TrendsSection";
import ReviewsSection from "@/components/Home/ReviewsSection";
import LoveProjectSection from "@/components/Home/LoveProjectSection";
import InfoSection from "@/components/Home/InfoSection";
import Footer from "@/components/UI/Footer/Footer";
import RightSidebar from "@/components/UI/RightSidebar";
import MobileHeader from "@/components/UI/Header/MobileHeader";
import MobileSearchBox from "@/components/UI/Header/MobileSearchBox";
import MobileFooter from "@/components/UI/Footer/MobileFooter";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [footerTransitionProgress, setFooterTransitionProgress] = useState(0);

  // Check if window width is desktop on mount and resize
  useLayoutEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    // Initial check
    checkIsDesktop();

    // Add resize listener
    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  // Array of sections data with their IDs
  const sections = [
    { id: "hero", component: <HeroSection /> },
    { id: "research", component: <ResearchSection /> },
    { id: "trends", component: <TrendsSection /> },
    { id: "reviews", component: <ReviewsSection /> },
    // { id: "best-reviews", component: <BestReviewSection /> },
    { id: "love-project", component: <LoveProjectSection /> },
    { id: "info", component: <InfoSection /> },
  ];

  // Animated transition for footer
  const animateFooterTransition = (show: boolean) => {
    setIsTransitioning(true);
    setIsFooterVisible(show);

    const startTime = performance.now();
    const duration = 700;
    const startValue = show ? 0 : 1;
    const endValue = show ? 1 : 0;

    const animate = (time: number) => {
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease in-out cubic function for smoother animation
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentValue = startValue + (endValue - startValue) * easedProgress;
      setFooterTransitionProgress(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
      }
    };

    requestAnimationFrame(animate);

    // Update URL hash
    window.history.replaceState(
      null,
      "",
      show ? "#footer" : `#${sections[currentIndex].id}`
    );
  };

  // Handle section change
  const goToSection = (index: number) => {
    if (
      !isDesktop ||
      isTransitioning ||
      index === currentIndex ||
      index < 0 ||
      index >= sections.length
    ) {
      return;
    }

    // First, hide footer if it's visible
    if (isFooterVisible) {
      animateFooterTransition(false);

      // Wait for footer to finish hiding before changing section
      setTimeout(() => {
        setCurrentIndex(index);
        window.history.replaceState(null, "", `#${sections[index].id}`);

        // Calculate scroll offset for header
        const newOffset = index === 0 ? 0 : -70;
        setScrollOffset(newOffset);
      }, 700);
    } else {
      setIsTransitioning(true);

      setCurrentIndex(index);
      window.history.replaceState(null, "", `#${sections[index].id}`);

      // Calculate scroll offset for header
      const newOffset = index === 0 ? 0 : -70;
      setScrollOffset(newOffset);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
  };

  // Handle showing footer
  const showFooter = () => {
    if (isTransitioning || isFooterVisible) return;
    animateFooterTransition(true);
  };

  // Handle hiding footer
  const hideFooter = () => {
    if (isTransitioning || !isFooterVisible) return;
    animateFooterTransition(false);
  };

  // Handle wheel events for desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? 1 : -1;

      // Special case for last section and footer
      if (currentIndex === sections.length - 1) {
        if (direction > 0 && !isFooterVisible) {
          // Scroll down from last section shows footer
          showFooter();
          return;
        }
      }

      // Special case for footer
      if (isFooterVisible) {
        if (direction < 0) {
          // Scroll up from footer hides footer
          hideFooter();
          return;
        }
        return; // Ignore further downward scrolls when footer is visible
      }

      // Normal section navigation
      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < sections.length) {
        goToSection(nextIndex);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, isTransitioning, isDesktop, isFooterVisible]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;

      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();

        if (isFooterVisible) {
          hideFooter();
        } else if (currentIndex > 0) {
          goToSection(currentIndex - 1);
        }
      } else if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();

        if (isFooterVisible) {
          return; // Already at the bottom
        } else if (currentIndex === sections.length - 1) {
          showFooter();
        } else if (currentIndex < sections.length - 1) {
          goToSection(currentIndex + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isTransitioning, isDesktop, isFooterVisible]);

  // Handle touch events
  useEffect(() => {
    if (!isDesktop) return;

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStart === null || isTransitioning) return;

      const touchEnd = e.touches[0].clientY;
      const diff = touchStart - touchEnd;

      // Require a minimum movement to trigger section change
      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;

        // Handle footer visibility
        if (
          direction > 0 &&
          currentIndex === sections.length - 1 &&
          !isFooterVisible
        ) {
          showFooter();
        } else if (direction < 0 && isFooterVisible) {
          hideFooter();
        } else if (!isFooterVisible) {
          // Normal section navigation
          const nextIndex = currentIndex + direction;
          if (nextIndex >= 0 && nextIndex < sections.length) {
            goToSection(nextIndex);
          }
        }

        setTouchStart(null);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex, isTransitioning, touchStart, isDesktop, isFooterVisible]);

  // Handle section navigation from sidebar
  const handleSectionClick = (sectionId: string) => {
    if (isTransitioning) return;

    if (sectionId === "footer") {
      // Only show footer if on last section
      if (currentIndex === sections.length - 1) {
        showFooter();
      } else {
        // First go to last section
        goToSection(sections.length - 1);
        // Then after transition, show footer
        setTimeout(() => {
          showFooter();
        }, 800);
      }
      return;
    }

    const index = sections.findIndex((section) => section.id === sectionId);
    if (index !== -1) {
      if (isFooterVisible) {
        // Hide footer first, then navigate
        hideFooter();
        setTimeout(() => {
          goToSection(index);
        }, 800);
      } else {
        // Direct navigation
        goToSection(index);
      }
    }
  };

  // Add class to body based on device type
  useEffect(() => {
    if (isDesktop) {
      document.body.classList.add("desktop-view");
      document.body.classList.remove("mobile-view");
    } else {
      document.body.classList.add("mobile-view");
      document.body.classList.remove("desktop-view");
    }
  }, [isDesktop]);

  // Calculate dynamic styles for footer and content
  const footerStyle = {
    bottom: `${-100 * (1 - footerTransitionProgress)}vh`,
    opacity: footerTransitionProgress,
    transition: "opacity 700ms ease-in-out",
  };

  const contentSectionStyle = {
    top: `${27 - footerTransitionProgress * 10}vh`, // Gradually move content up
    height: "73vh",
    transform: `translateY(-${currentIndex * 100}%)`,
    zIndex: 10,
  };

  return (
    <>
      {/* Desktop Version with Animations */}
      <div className="h-screen w-screen overflow-hidden hidden xl:block">
        <div className="w-full fixed top-0 left-0 right-0 z-50">
          <div
            className="w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(${scrollOffset}px)` }}
          >
            <TopBar />

            <div className="bg-white">
              <MegaMenu />
              <div className="px-20 mx-auto max-w-[1560px]">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>

        <SideMenuBar
          activeSection={
            isFooterVisible ? "footer" : sections[currentIndex]?.id
          }
          onSectionClick={handleSectionClick}
        />

        <RightSidebar />

        {/* Sections container with transform for transitions */}
        <div
          className="absolute left-0 right-0 max-w-[1560px] mx-auto transition-all duration-700 ease-in-out px-20"
          style={contentSectionStyle}
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

        {/* Footer section - appears below the last section */}
        <div
          className="absolute left-0 right-0 w-full transition-all duration-700 ease-in-out"
          style={footerStyle}
        >
          <Footer />
        </div>
      </div>

      {/* Mobile Version with Normal Scrolling */}
      <div className="mobile-sections-container xl:hidden">
        <MobileHeader />
        <div className="px-4 sm:px-6 md:px-8">
          <MobileSearchBox />
        </div>
        <div className="py-8 md:py-12">
          <HeroSection />
        </div>
        {/* Render all sections in normal flow for mobile */}
        <div className="px-4 sm:px-6 md:px-8">
          {sections.slice(1).map((section) => (
            <section key={section.id} id={section.id} className="py-8 md:py-12">
              {section.component}
            </section>
          ))}
        </div>
      </div>
      {/* Mobile Footer */}
      <MobileFooter />
    </>
  );
}
