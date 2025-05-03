"use client";

import { useEffect } from "react";
import HomeIcon from "@/assets/Svgs/HomeIcon";
import MenuBookIcon from "@/assets/Svgs/MenuBookIcon";
import MedalIcon from "@/assets/Svgs/MedalIcon";
import ReviewIcon from "@/assets/Svgs/ReviewIcon";
import HeartIcon from "@/assets/Svgs/HeartIcon";
import SpeakerIcon from "@/assets/Svgs/SpeakerIcon";

interface SideMenuBarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const sections = [
  { id: "hero", icon: (isActive: boolean) => <HomeIcon isActive={isActive} /> },
  {
    id: "research",
    icon: (isActive: boolean) => <MenuBookIcon isActive={isActive} />,
  },
  {
    id: "trends",
    icon: (isActive: boolean) => <MedalIcon isActive={isActive} />,
  },
  {
    id: "reviews",
    icon: (isActive: boolean) => <ReviewIcon isActive={isActive} />,
  },
  {
    id: "love-project",
    icon: (isActive: boolean) => <HeartIcon isActive={isActive} />,
  },
  {
    id: "info",
    icon: (isActive: boolean) => <SpeakerIcon isActive={isActive} />,
  },
];

const SideMenuBar = ({ activeSection, onSectionClick }: SideMenuBarProps) => {
  // Handle hash change if user manually changes URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== activeSection) {
        onSectionClick(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeSection, onSectionClick]);

  return (
    <div className="fixed left-0 top-1/2 translate-y-[-50%] rounded-sm shadow-[4px_4px_4px_0_rgba(0,0,0,0.10)] bg-white z-50">
      <ul className="flex flex-col items-center">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li
              key={section.id}
              className={`cursor-pointer p-[14px] transition-colors duration-500 ${
                isActive ? "bg-gray-100" : ""
              }`}
              onClick={() => onSectionClick(section.id)}
            >
              {section.icon(isActive)}

              {/* Optional tooltip */}
              {/* {isActive && (
                <span className="absolute left-16 bg-white px-2 py-1 text-xs rounded shadow-md whitespace-nowrap">
                  {section.id
                    .replace("-", " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </span>
              )} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenuBar;
