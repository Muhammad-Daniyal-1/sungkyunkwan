"use client";
import { forwardRef, useImperativeHandle } from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  IoSearchSharp,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import Image from "next/image";
import gsap from "gsap";
import { FaChevronRight } from "react-icons/fa";

const sampleQuestions = [
  "소프트웨어학과에서 가장 인기 있는 교양 과목은?",
  "소프트웨어학과에서 필수적으로 배우는 프로그래밍 언어는?",
  "소프트웨어학과에서 가장 어려운 과목은?",
  "소프트웨어학과에서 취업에 도움이 되는 자격증은?",
  "소프트웨어학과에서 프로젝트는 어떻게 진행되 HZ?",
];
export interface SearchBoxHandle {
  collapse: () => void;
}

interface SearchBoxProps {
  onExpandChange: (isExpanded: boolean, height: number) => void;
}
const SearchBox = forwardRef<SearchBoxHandle, SearchBoxProps>(
  ({ onExpandChange }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [searchBoxHeight, setSearchBoxHeight] = useState(0);

    const searchBoxRef = useRef(null);
    const asRef = useRef(null);
    const suggestionsRef = useRef(null);

    const totalItems = sampleQuestions.length;

    const getVisibleItems = () => {
      const indices = [
        (currentIndex - 1 + totalItems) % totalItems,
        currentIndex,
        (currentIndex + 1) % totalItems,
      ];
      return indices.map((i) => ({
        text: sampleQuestions[i],
        isActive: i === currentIndex,
      }));
    };
    useImperativeHandle(ref, () => ({
      collapse: () => {
        setIsFocused(false);
      },
    }));

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    // Measure and update height when expanded/collapsed
    useEffect(() => {
      if (searchBoxRef.current) {
        const updateHeight = () => {
          const height = searchBoxRef.current.offsetHeight;
          setSearchBoxHeight(height);
          onExpandChange(isFocused, height);
        };

        updateHeight();

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(searchBoxRef.current);

        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [isFocused, onExpandChange]);

    // Handle scroll to collapse search box
    // Handle scroll to collapse search box
    useEffect(() => {
      const handleScroll = () => {
        if (isFocused) {
          setIsFocused(false); // Only collapse if currently expanded
        }
      };

      // Use passive scroll listener for better performance
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isFocused]); // Add isFocused to dependency array

    // Animation logic for focus state
    useEffect(() => {
      const as = asRef.current;
      const suggestionButtons = as?.querySelectorAll(
        "#focusedSuggestions button"
      );

      if (!as) return;

      if (isFocused) {
        const targetHeight = as.scrollHeight;

        gsap.to(as, {
          opacity: 1,
          height: targetHeight,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            if (searchBoxRef.current) {
              const height = searchBoxRef.current.offsetHeight;
              setSearchBoxHeight(height);
              onExpandChange(true, height);
            }
          },
        });

        gsap.fromTo(
          suggestionButtons,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
          }
        );

        gsap.to(suggestionsRef.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(suggestionsRef.current, { pointerEvents: "none" });
          },
        });
      } else {
        gsap.to(as, {
          opacity: 0,
          height: 0,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            if (searchBoxRef.current) {
              const height = searchBoxRef.current.offsetHeight;
              setSearchBoxHeight(height);
              onExpandChange(false, height);
            }
          },
        });

        gsap.to(suggestionsRef.current, {
          pointerEvents: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(suggestionsRef.current, {
          height: suggestionsRef.current.scrollHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }, [isFocused, onExpandChange]);

    // Handle click outside to collapse
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (searchBoxRef.current?.contains(target)) return;
        setIsFocused(false);
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleToggleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsFocused(true);
    };

    return (
      <div ref={searchBoxRef}>
        <div
          onClick={handleToggleClick}
          className="mt-6 rounded-2xl border-2 border-primary p-8"
        >
          <div className="flex justify-between gap-4 w-full">
            <div className="flex w-full items-center">
              <div className="px-20">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-[60px] h-[32px] bg-gray-200 peer-focus:outline-none peer-focus:ring-secondary dark:peer-focus:ring-secondary rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all dark:border-gray peer-checked:bg-secondary dark:peer-checked:bg-secondary"></div>
                </label>
              </div>
              <p className="whitespace-nowrap mr-6">명륜-ai로 검색</p>
              <p className="whitespace-nowrap">
                키워드나 질문을 입력해 주세요.
              </p>
              <input
                type="text"
                className="rounded-2xl w-full p-4"
                // onFocus={() => setIsFocused(true)}
                // onBlur={() => setIsFocused(false)}
              />
            </div>

            <button className="bg-secondary text-white rounded-full px-4 py-2 flex items-center gap-2 h-auto min-w-[90px]">
              <IoSearchSharp />
              검색
            </button>
          </div>

          <div
            ref={asRef}
            style={{
              opacity: 0,
              height: 0,
              marginTop: "5px",
              overflow: "hidden",
              transition: "all 0.5s ease",
            }}
          >
            <div className="border-t border-gray-200 pt-4">
              <div className="flex gap-2 items-center mb-4">
                <Image
                  src="/svgs/festival.svg"
                  alt="Festival"
                  width={24}
                  height={24}
                />
                <p className="text-sm font-medium">
                  우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!
                </p>
              </div>
              <div className="grid grid-cols-5 gap-4 items-center">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={question}
                    className="text-left p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 text-sm transition-all bg-[#E0E2EBB2]"
                  >
                    {question}
                    <div className="flex justify-end mt-2">
                      <FaChevronRight className="text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={suggestionsRef}
          className="flex mt-4 gap-8 items-start"
          style={{ opacity: 1, height: "auto", display: "flex" }}
        >
          <div className="flex gap-2 items-center w-fit">
            <Image
              src="/svgs/festival.svg"
              alt="Festival"
              width={24}
              height={24}
            />
            <p className="whitespace-nowrap w-fit">
              우리과(소프트웨어공학과) 친구들은 친구들은 이런 질문을 많이
              했어요!
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <button onClick={handlePrev}>
              <IoChevronBack size={24} />
            </button>
            <div className="flex gap-2">
              {getVisibleItems().map(({ text, isActive }) => (
                <motion.button
                  key={text}
                  onMouseDown={() => alert(`Clicked: ${text}`)}
                  className={`px-3 py-2 whitespace-nowrap transition-all text-xs duration-300 ${
                    isActive
                      ? "text-primary font-semibold scale-105"
                      : "text-[#CDD2E0]"
                  }`}
                >
                  {text}
                </motion.button>
              ))}
            </div>
            <button onClick={handleNext}>
              <IoChevronForward size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default SearchBox;
