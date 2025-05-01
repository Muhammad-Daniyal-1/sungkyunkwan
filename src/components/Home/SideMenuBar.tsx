"use client";

import { useEffect, useState } from "react";
import HomeIcon from "@/assets/Svgs/HomeIcon";
import MenuBookIcon from "@/assets/Svgs/MenuBookIcon";
import MedalIcon from "@/assets/Svgs/MedalIcon";
import ReviewIcon from "@/assets/Svgs/ReviewIcon";
import HeartIcon from "@/assets/Svgs/HeartIcon";
import SpeakerIcon from "@/assets/Svgs/SpeakerIcon";

const sections = [
  { id: "home", icon: (isActive: boolean) => <HomeIcon isActive={isActive} /> },
  {
    id: "about",
    icon: (isActive: boolean) => <MenuBookIcon isActive={isActive} />,
  },
  {
    id: "services",
    icon: (isActive: boolean) => <MedalIcon isActive={isActive} />,
  },
  {
    id: "projects",
    icon: (isActive: boolean) => <ReviewIcon isActive={isActive} />,
  },
  {
    id: "contact",
    icon: (isActive: boolean) => <HeartIcon isActive={isActive} />,
  },
  {
    id: "section",
    icon: (isActive: boolean) => <SpeakerIcon isActive={isActive} />,
  },
];

const SideMenuBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set on mount

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="fixed left-0 top-1/2 translate-y-[-50%] rounded-sm shadow-[4px_4px_4px_0_rgba(0,0,0,0.10)] bg-white z-50">
      <ul className="flex flex-col items-center">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li
              key={section.id}
              className="cursor-pointer p-[14px] transition-colors duration-500"
              onClick={() => (window.location.hash = section.id)}
            >
              {section.icon(isActive)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenuBar;
