"use client";

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
  "소프트웨어학과에서 프로젝트는 어떻게 진행되나요?",
];

export default function SearchBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const asRef = useRef<HTMLDivElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  useEffect(() => {
    const suggestionButtons = asRef.current?.querySelectorAll(
      "#focusedSuggestions button"
    );

    if (isFocused) {
      // Animate asRef in
      gsap.set(asRef.current, { display: "block" });
      gsap.to(asRef.current, {
        opacity: 1,
        height: asRef?.current?.scrollHeight,
        duration: 0.5,
        ease: "power2.out",
      });

      // Animate each suggestion from right to left
      if (suggestionButtons) {
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
      }

      // Animate old suggestions out
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
      // Animate asRef out
      gsap.to(asRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(asRef.current, { display: "none" });
        },
      });

      // Show back suggestions
      gsap.set(suggestionsRef.current, { pointerEvents: "auto", opacity: 1 });
      gsap.to(suggestionsRef.current, {
        height: suggestionsRef?.current?.scrollHeight,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isFocused]);

  return (
    <div>
      <div
        onClick={() => setIsFocused(!isFocused)}
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
            <input
              type="text"
              className="rounded-2xl w-full p-4 focus-within:border-none focus-within:ring-0 focus-within:ring-offset-0 focus-within:outline-none"
              placeholder="키워드나 질문을 입력해 주세요."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>

          <button className="bg-secondary text-white rounded-full px-4 py-2 flex items-center gap-2 h-auto min-w-[90px]">
            <IoSearchSharp />
            검색
          </button>
        </div>

        {/* asRef div: shows on input focus */}
        <div
          ref={asRef}
          style={{
            opacity: 0,
            height: "0px",
            overflow: "hidden",
            display: "none",
          }}
        >
          <div className="border-t border-gray-200 pt-4">
            {" "}
            <div className="flex gap-2 items-center mb-4">
              {" "}
              <Image
                src="/svgs/festival.svg"
                alt="Festival"
                width={24}
                height={24}
              />{" "}
              <p className="text-sm font-medium">
                {" "}
                우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-5 gap-4 items-center">
              {" "}
              {sampleQuestions.map((question) => (
                <button
                  key={question}
                  className="text-left p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 text-sm transition-all bg-[#E0E2EBB2]"
                >
                  {" "}
                  {question}{" "}
                  <div className="flex justify-end mt-2">
                    {" "}
                    <FaChevronRight className="text-white" />{" "}
                  </div>{" "}
                </button>
              ))}{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      {/* suggestionsRef div: shows when input is NOT focused */}
      <div
        ref={suggestionsRef}
        className="flex mt-4 gap-8 items-start"
        style={{ opacity: 1, height: "auto", display: "flex" }}
      >
        <div className="flex gap-2 items-center w-fit max-w-[95%] mx-auto">
          <Image
            src="/svgs/festival.svg"
            alt="Festival"
            width={24}
            height={24}
          />
          <p className="whitespace-nowrap w-fit">
            우리과(소프트웨어공학과) 친구들은 친구들은 이런 질문을 많이 했어요!
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <button onClick={handlePrev}>
            <IoChevronBack size={24} />
          </button>
          <div className="flex gap-2 max-w-[700px] overflow-x-hidden">
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
