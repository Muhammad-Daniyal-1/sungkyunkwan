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
  const [isOpen, setIsOpen] = useState(false); // ① rename

  const containerRef = useRef<HTMLDivElement | null>(null); // ② for outside‑click
  const asRef = useRef<HTMLDivElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* ---------- helpers ---------- */

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

  /* ---------- navigation ---------- */

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalItems);

  /* ---------- outside‑click close ---------- */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false); // ③ close
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------- GSAP animations ---------- */

  useEffect(() => {
    const suggestionButtons = Array.from(
      asRef.current?.querySelectorAll("#focusedSuggestions button") || []
    ); // ④ cast to Element[]
    if (isOpen) {
      gsap.set(asRef.current, { display: "block" });
      gsap.fromTo(
        asRef.current,
        { opacity: 0, height: 0 },
        {
          opacity: 1,
          height: asRef.current?.scrollHeight,
          duration: 0.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        suggestionButtons,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
      gsap.to(suggestionsRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: "power1.out",
        pointerEvents: "none",
      });
    } else {
      gsap.to(asRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          if (asRef.current) {
            gsap.set(asRef.current, { display: "none" });
          }
        },
      });
      gsap.set(suggestionsRef.current, { pointerEvents: "auto" });
      gsap.to(suggestionsRef.current, {
        opacity: 1,
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  /* ---------- render ---------- */

  return (
    <div ref={containerRef}>
      {/* search wrapper */}
      <div
        className="mt-6 rounded-2xl border-2 border-primary p-8"
        onClick={(e) => {
          const el = e.target as HTMLElement;
          // if the click is NOT on (or inside) an element that says “data‑ignore‑open”
          if (!el.closest("[data-ignore-open]")) setIsOpen(true);
        }}
      >
        <div className="flex justify-between gap-4 w-full">
          {/* left side */}
          <div className="flex w-full items-center">
            {/* toggle – stays inside without closing */}
            <div className="px-20">
              <label
                className="inline-flex items-center cursor-pointer"
                data-ignore-open
              >
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-[60px] h-[32px] bg-gray-200 peer-focus:outline-none peer-focus:ring-secondary dark:peer-focus:ring-secondary rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all dark:border-gray peer-checked:bg-secondary dark:peer-checked:bg-secondary"></div>
              </label>
            </div>

            <p className="whitespace-nowrap mr-6">명륜-ai로 검색</p>

            {/* input */}
            <input
              ref={inputRef}
              type="text"
              className="rounded-2xl w-full p-4 focus:outline-none"
              placeholder="키워드나 질문을 입력해 주세요."
              onFocus={() => setIsOpen(true)} // ⑤ open only
            />
          </div>

          {/* search button */}
          <button
            className="bg-secondary text-white rounded-full px-4 py-2 flex items-center gap-2 min-w-[90px]"
            data-ignore-open
          >
            <IoSearchSharp />
            검색
          </button>
        </div>

        {/* ---------- expanded panel ---------- */}
        <div
          ref={asRef}
          style={{ opacity: 0, height: 0, overflow: "hidden", display: "none" }}
        >
          <div className="border-t border-gray-200 pt-4">
            <div className="flex gap-2 items-center mb-4">
              <Image src="/svgs/festival.svg" alt="" width={24} height={24} />
              <p className="text-sm font-medium">
                우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!
              </p>
            </div>

            <div id="focusedSuggestions" className="grid grid-cols-5 gap-4">
              {sampleQuestions.map((q) => (
                <button
                  key={q}
                  className="text-left p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 text-sm bg-[#E0E2EBB2]"
                  onMouseDown={(e) => e.preventDefault()} // keep focus
                  onClick={() => {
                    inputRef.current!.value = q; // set value
                    /* keep panel open */
                  }}
                >
                  {q}
                  <div className="flex justify-end mt-2">
                    <FaChevronRight className="text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- collapsed suggestions ---------- */}
      <div
        ref={suggestionsRef}
        className="flex mt-4 gap-8 items-start"
        style={{ height: "auto", opacity: 1 }}
      >
        <div className="flex gap-2 items-center w-fit max-w-[95%] mx-auto">
          <Image src="/svgs/festival.svg" alt="" width={24} height={24} />
          <p className="whitespace-nowrap">
            우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!
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
                onMouseDown={(e) => e.preventDefault()} // keep outside blur
                onClick={() => (inputRef.current!.value = text)}
                className={`px-3 py-2 whitespace-nowrap text-xs transition-all ${
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
