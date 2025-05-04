"use client";

import { useState, useRef, useEffect } from "react";
import { FiLogIn, FiX, FiHeart, FiBell } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";

export default function MobileHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMainIndex, setActiveMainIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  // For submenu height animations
  const submenuRefs = useRef<any[]>([]);
  const childMenuRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (isNavOpen) {
      // Small delay to ensure visible before transition
      setTimeout(() => setShowMenu(true), 10);
    } else {
      setShowMenu(false);
    }
  }, [isNavOpen]);

  // Main navigation items (same as desktop)
  const navItems = [
    "자료",
    "연구학습지원",
    "서비스이용",
    "도서관안내·알림",
    "오거서",
    "발전기금",
    "My Library",
  ];

  // Example submenu data (based on your Nav1)
  const subMenuData = [
    {
      mainIndex: 0, // For 자료
      title: "Browse",
      items: [". Database", ". E-book", ". DVD"],
    },
    {
      mainIndex: 0,
      title: "Collections",
      items: [
        "핫북",
        "신착자료",
        "성균고전 100선",
        "대한민국학술원 우수학술도서",
        "한국출판문화산업진흥원 세종도서",
        "북 큐레이션",
        "개인문고",
      ],
    },
    {
      mainIndex: 0,
      title: "SKKU Collection",
      items: ["SKKU 학위논문", "SKKU Archive", "성균고전 희귀도서"],
    },
    // Add similar structures for other main menu items
    {
      mainIndex: 1, // For 연구학습지원
      title: "Research Support",
      items: ["Research Guides", "Citation Management", "Academic Writing"],
    },
    // Add more submenu items for other main navigation items
  ];

  const handleMainItemClick = (index: number) => {
    if (activeMainIndex === index) {
      setActiveMainIndex(null);
    } else {
      setActiveMainIndex(index);
      setActiveSubIndex(null);
    }
  };

  const handleSubItemClick = (index: number) => {
    if (activeSubIndex === index) {
      setActiveSubIndex(null);
    } else {
      setActiveSubIndex(index);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    // Add delay to match transition time before removing from DOM
    setTimeout(() => {
      setIsNavOpen(false);
      setActiveMainIndex(null);
      setActiveSubIndex(null);
    }, 500); // Match this to the transition duration
  };

  // Filter submenu items based on active main index
  const filteredSubMenus =
    activeMainIndex !== null
      ? subMenuData.filter((menu) => menu.mainIndex === activeMainIndex)
      : [];

  return (
    <>
      <div className="flex items-center justify-between py-3 px-6 shadow-lg">
        <div className="flex items-center">
          <RxHamburgerMenu
            size={20}
            className="text-primary cursor-pointer"
            onClick={() => setIsNavOpen(true)}
          />
        </div>
        <div>
          <Image src="/svgs/logo.svg" alt="Logo" width={180} height={50} />
        </div>
        <div className="flex items-center">
          <FiLogIn size={20} className="text-primary" />
        </div>
      </div>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      {isNavOpen && (
        <div
          className={`fixed inset-0 z-50 flex bg-[#769D96] flex-col overflow-auto transform transition-all duration-500 ease-in-out ${
            showMenu
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Top Icons */}
          <div
            className={`flex items-center justify-between bg-[#00322A] py-4 px-6 border-b transition-all duration-700 delay-100 ${
              showMenu
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="flex gap-4">
              <Image src="/svgs/heart.svg" alt="Heart" width={24} height={24} />
              {/* <Image
                src="/svgs/notification.svg"
                alt="Notification"
                width={24}
                height={24}
              /> */}
              <FiBell
                size={24}
                className="text-white hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-white text-xs">
                English
                <FaCaretDown />
              </button>
              <button className="flex items-center gap-2 text-white text-xs bg-secondary p-3 rounded-full">
                자과캠
                <FaCaretDown />
              </button>
              <FiX
                size={28}
                className="text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
                onClick={closeMenu}
              />
            </div>
          </div>

          {/* Main Menu Items */}
          <div
            className={`flex-1 overflow-auto transition-all duration-700 delay-300 ${
              showMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="px-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`border-b border-[#5F8D85] transition-all duration-500 ${
                    showMenu
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <div
                    className={`flex items-center justify-between py-4 cursor-pointer text-white ${
                      activeMainIndex === index ? " font-bold" : ""
                    }`}
                    onClick={() => handleMainItemClick(index)}
                  >
                    <span>{item}</span>
                    <IoIosArrowForward
                      size={18}
                      className={`transition-transform duration-500 text-white ${
                        activeMainIndex === index ? "rotate-90 " : ""
                      }`}
                    />
                  </div>

                  {/* Submenu Level 1 */}
                  <div
                    className={`px-4 pb-2 bg-[#235D53] overflow-hidden transition-all duration-500 ease-in-out ${
                      activeMainIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                    ref={(el: never) => (submenuRefs.current[index] = el)}
                  >
                    {filteredSubMenus.map((submenu, subIndex) => (
                      <div
                        key={subIndex}
                        className={`mb-2 transition-all duration-500 ${
                          activeMainIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2"
                        }`}
                        style={{ transitionDelay: `${50 * subIndex}ms` }}
                      >
                        <div
                          className={`flex items-center justify-between py-3 cursor-pointer ${
                            activeSubIndex === subIndex
                              ? "text-[#ADDD1D] font-bold"
                              : "text-white"
                          }`}
                          onClick={() => handleSubItemClick(subIndex)}
                        >
                          <span>{submenu.title}</span>
                          <IoIosArrowForward
                            size={16}
                            className={`transition-transform duration-500 ${
                              activeSubIndex === subIndex
                                ? "rotate-90 text-[#ADDD1D]"
                                : ""
                            }`}
                          />
                        </div>

                        {/* Submenu Level 2 */}
                        <div
                          className={`pl-4 pb-2 overflow-hidden transition-all duration-500 ease-in-out ${
                            activeSubIndex === subIndex
                              ? "max-h-screen opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          ref={(el: HTMLDivElement | null) => {
                            childMenuRefs.current[`${index}-${subIndex}`] = el;
                          }}
                        >
                          {submenu.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={`py-2 text-sm text-white hover:text-[#11AC57] hover:translate-x-1 transition-all duration-300 ${
                                activeSubIndex === subIndex
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-2"
                              }`}
                              style={{ transitionDelay: `${50 * itemIndex}ms` }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
