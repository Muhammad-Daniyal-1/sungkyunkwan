"use client";

import React, { useState } from "react";
import Nav1 from "./MegaMenus/Nav1";
import Nav2 from "./MegaMenus/Nav2";
import Nav3 from "./MegaMenus/Nav3";
import Nav4 from "./MegaMenus/Nav4";
import Nav5 from "./MegaMenus/Nav5";
import Nav6 from "./MegaMenus/Nav6";
import Nav7 from "./MegaMenus/Nav7";

function MegaMenu() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navItems = [
    "자료",
    "연구학습지원",
    "서비스이용",
    "도서관안내·알림",
    "오거서",
    "발전기금",
    "My Library",
  ];

  const renderNavComponent = () => {
    switch (activeIndex) {
      case 0:
        return <Nav1 />;
      case 1:
        return <Nav2 />;
      case 2:
        return <Nav3 />;
      case 3:
        return <Nav4 />;
      case 4:
        return <Nav5 />;
      case 5:
        return <Nav6 />;
      case 6:
        return <Nav7 />;
      default:
        return null;
    }
  };

  return (
    <div className="w-screen relative">
      <div
        className="relative "
        onMouseLeave={() => setActiveIndex(null)}
        onMouseEnter={() => {}}
      >
        <ul className="flex justify-center px-14 gap-[5rem] text-[#8188a1] border-b-1">
          {navItems.map((item, index) => (
            <li key={index} className="py-5">
              <a
                onMouseEnter={() => setActiveIndex(index)}
                className={`mx-3 pt-3 pb-1.5 mb-1 cursor-pointer hover:text-[#0A0046] hover:border-b-4 border-[#11AC57] hover:font-bold ${
                  activeIndex === index
                    ? "text-[#0A0046] font-bold border-b-4 border-[#11AC57]"
                    : ""
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Submenu rendered */}
        <div
          className={`absolute left-0 right-0 top-full w-screen max-w-[1500px] mx-auto px-10 z-[9999999] transition-all duration-300 transform ${
            activeIndex !== null
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          }`}
          onMouseEnter={() => {}}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {renderNavComponent()}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
