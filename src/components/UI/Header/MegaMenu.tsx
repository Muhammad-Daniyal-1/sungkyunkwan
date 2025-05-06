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

// 'use client'

// import { useState, useEffect, useRef } from 'react';

// import { menuData } from './menuData';

// export default function MegaMenu() {
//     const [activeMenu, setActiveMenu] = useState<number | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState<number | null>(null);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const [isMobile, setIsMobile] = useState(false);

//     // Check if we're on mobile
//     useEffect(() => {
//         const checkIfMobile = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         checkIfMobile();
//         window.addEventListener('resize', checkIfMobile);

//         return () => {
//             window.removeEventListener('resize', checkIfMobile);
//         };
//     }, []);

//     // Close menu when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//                 // Clear any hover timers first
//                 if (hoverDelayRef.current) {
//                     clearTimeout(hoverDelayRef.current);
//                     hoverDelayRef.current = null;
//                 }
//                 if (leaveDelayRef.current) {
//                     clearTimeout(leaveDelayRef.current);
//                     leaveDelayRef.current = null;
//                 }
//                 setActiveMenu(null);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [menuRef]);

//     // Handle escape key press to close menu
//     useEffect(() => {
//         const handleEscapeKey = (event: KeyboardEvent) => {
//             if (event.key === 'Escape') {
//                 // Clear any hover timers first
//                 if (hoverDelayRef.current) {
//                     clearTimeout(hoverDelayRef.current);
//                     hoverDelayRef.current = null;
//                 }
//                 if (leaveDelayRef.current) {
//                     clearTimeout(leaveDelayRef.current);
//                     leaveDelayRef.current = null;
//                 }
//                 setActiveMenu(null);
//                 setIsMobileMenuOpen(false);
//             }
//         };

//         document.addEventListener('keydown', handleEscapeKey);
//         return () => {
//             document.removeEventListener('keydown', handleEscapeKey);
//         };
//     }, []);

//     // Toggle mobile menu
//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         setMobileActiveSubmenu(null);
//     };

//     // Toggle mobile submenu
//     const toggleMobileSubmenu = (index: number) => {
//         setMobileActiveSubmenu(mobileActiveSubmenu === index ? null : index);
//     };

//     // Add delay timers to prevent flickering
//     const hoverDelayRef = useRef<NodeJS.Timeout | null>(null);
//     const leaveDelayRef = useRef<NodeJS.Timeout | null>(null);

//     // Handle desktop hover with delay to prevent flickering
//     const handleMouseEnter = (index: number) => {
//         if (!isMobile) {
//             // Clear any pending leave timer
//             if (leaveDelayRef.current) {
//                 clearTimeout(leaveDelayRef.current);
//                 leaveDelayRef.current = null;
//             }

//             // Set menu active after a slight delay
//             if (!hoverDelayRef.current) {
//                 hoverDelayRef.current = setTimeout(() => {
//                     setActiveMenu(index);
//                     hoverDelayRef.current = null;
//                 }, 50); // Small delay to prevent accidental triggers
//             }
//         }
//     };

//     const handleMouseLeave = () => {
//         if (!isMobile) {
//             // Clear any pending enter timer
//             if (hoverDelayRef.current) {
//                 clearTimeout(hoverDelayRef.current);
//                 hoverDelayRef.current = null;
//             }

//             // Set menu inactive after a delay
//             leaveDelayRef.current = setTimeout(() => {
//                 setActiveMenu(null);
//                 leaveDelayRef.current = null;
//             }, 300); // Longer delay when leaving to prevent flickering
//         }
//     };

//     // Handle desktop click for accessibility
//     const handleMenuClick = (index: number) => {
//         if (!isMobile) {
//             setActiveMenu(activeMenu === index ? null : index);
//         } else {
//             toggleMobileSubmenu(index);
//         }
//     };

//     return (
//         <div className="relative" ref={menuRef}>
//             {/* Mobile menu button */}
//             <div className="md:hidden flex justify-end p-4">
//                 <button
//                     onClick={toggleMobileMenu}
//                     className="text-gray-800 hover:text-gray-600 focus:outline-none"
//                     aria-label="Toggle menu"
//                 >
//                     {isMobileMenuOpen ? (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </div>

//             {/* Desktop Menu */}
//             <nav className="hidden md:flex justify-center bg-white shadow-sm">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <ul className="flex space-x-8">
//                         {menuData.map((item, index) => (
//                             <li
//                                 key={index}
//                                 className="relative py-4"
//                                 onMouseEnter={() => handleMouseEnter(index)}
//                                 onMouseLeave={handleMouseLeave}
//                             >
//                                 <button
//                                     className={`text-gray-800 hover:text-blue-600 font-medium transition-colors duration-200 px-1 ${activeMenu === index ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
//                                     onClick={() => handleMenuClick(index)}
//                                     aria-expanded={activeMenu === index}
//                                     aria-haspopup="true"
//                                 >
//                                     {item.title}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </nav>

//             {/* Mobile Menu */}
//             <div
//                 className={`md:hidden fixed inset-0 z-40 bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
//                 style={{ top: '60px' }}
//             >
//                 <nav className="h-full overflow-y-auto pb-16">
//                     <ul className="px-4 pt-2 pb-3 space-y-1">
//                         {menuData.map((item, index) => (
//                             <li key={index} className="py-2">
//                                 <button
//                                     className="flex justify-between items-center w-full py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out"
//                                     onClick={() => toggleMobileSubmenu(index)}
//                                     aria-expanded={mobileActiveSubmenu === index}
//                                 >
//                                     <span className="font-medium">{item.title}</span>
//                                     <svg
//                                         className={`w-5 h-5 transition-transform duration-200 ${mobileActiveSubmenu === index ? 'transform rotate-180' : ''}`}
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                     </svg>
//                                 </button>

//                                 {/* Mobile Mega Menu Content */}
//                                 {mobileActiveSubmenu === index && (
//                                     <div className="mt-2 pl-4 space-y-4 animate-fadeIn">
//                                         {item.categories.map((category, catIndex) => (
//                                             <div key={catIndex} className="border-l-2 border-gray-200 pl-4">
//                                                 <h3 className="font-semibold text-gray-900 mb-2">{category.heading}</h3>
//                                                 <ul className="space-y-2">
//                                                     {category.links.map((link, linkIndex) => (
//                                                         <li key={linkIndex}>
//                                                             <a
//                                                                 href={link.href}
//                                                                 className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-1"
//                                                             >
//                                                                 {link.label}
//                                                             </a>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>

//             {/* Desktop Mega Menu */}
//             {activeMenu !== null && !isMobile && (
//                 <div
//                     className="fixed inset-x-0 z-40 animate-fadeIn"
//                     style={{ top: '56px' }}
//                     onMouseEnter={() => {
//                         // Clear any pending leave timer when mouse enters mega menu
//                         if (leaveDelayRef.current) {
//                             clearTimeout(leaveDelayRef.current);
//                             leaveDelayRef.current = null;
//                         }
//                     }}
//                     onMouseLeave={() => handleMouseLeave()}
//                 >
//                     <div
//                         className="w-full h-screen absolute bg-black bg-opacity-50 backdrop-blur-sm"
//                         onClick={() => setActiveMenu(null)}
//                     />
//                     <div className="relative">
//                         <div className="absolute inset-x-0 bg-primary shadow-lg rounded-b-lg overflow-hidden mx-auto max-w-7xl">
//                             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-8">
//                                 {menuData[activeMenu].categories.map((category, catIndex) => (
//                                     <div key={catIndex} className="mb-4">
//                                         <h3 className="font-bold text-white mb-3 text-lg">{category.heading}</h3>
//                                         <ul className="space-y-2">
//                                             {category.links.map((link, linkIndex) => (
//                                                 <li key={linkIndex}>
//                                                     <a
//                                                         href={link.href}
//                                                         className="text-gray-200 hover:text-white transition-colors duration-200 block"
//                                                     >
//                                                         {link.label}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
