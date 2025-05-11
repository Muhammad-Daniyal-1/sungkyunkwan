"use client";

import { useState, useRef, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import gsap from "gsap";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const sampleQuestions = [
  "소프트웨어학과에서 가장 인기 있는 교양 과목은?",
  "소프트웨어학과에서 필수적으로 배우는 프로그래밍 언어는?",
  "소프트웨어학과에서 가장 어려운 과목은?",
  "소프트웨어학과에서 취업에 도움이 되는 자격증은?",
  "소프트웨어학과에서 프로젝트는 어떻게 진행되나요?",
];
export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const asRef = useRef<HTMLDivElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  /* ---------- render ---------- */

  return (
    <div ref={containerRef}>
      {/* search wrapper */}
      <div
        className="mt-6 rounded-2xl border-2 border-primary px-8 py-6"
        onClick={(e) => {
          const el = e.target as HTMLElement;
          // if the click is NOT on (or inside) an element that says “data‑ignore‑open”
          if (!el.closest("[data-ignore-open]")) setIsOpen(true);
        }}
      >
        <div className="flex justify-between items-center gap-4 w-full">
          {/* left side */}
          <div className="flex w-full items-center pr-4">
            {/* toggle – stays inside without closing */}
            <label className="inline-flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`relative w-16 h-9 rounded-full transition-all duration-300 flex items-center justify-between px-2 text-xs font-bold text-white ${
                  isChecked
                    ? "bg-gradient-to-r from-green-600 to-teal-800"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              >
                <span
                  className={`z-10 ${
                    isChecked ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  ON
                </span>
                <span
                  className={`z-10 ${
                    isChecked ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300`}
                >
                  OFF
                </span>
              </div>
              <div
                className={`
                  absolute top-1 h-7 w-7 rounded-full bg-white transition-all duration-300 ${
                    isChecked ? "left-[calc(100%-32px)]" : "left-1"
                  }
                `}
              ></div>
            </label>

            <p className="whitespace-nowrap m-4 text-[#8188A1] text-sm">
              명륜-ai로 검색
            </p>

            {/* input */}
            <input
              ref={inputRef}
              type="text"
              className="rounded-2xl w-full p-4 focus:outline-none text-base"
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
        className="mt-4 grid grid-cols-3 gap-4"
        style={{ height: "auto", opacity: 1 }}
      >
        <div className="flex-col lg:flex-row flex gap-2 items-center mb-2">
          <Image src="/svgs/festival.svg" alt="" width={24} height={24} />
          <p className=" text-[#8188A1] text-sm">
            우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!
          </p>
        </div>

        <Swiper
          modules={[A11y]}
          spaceBetween={10}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          className="w-full py-2 col-span-2"
        >
          {sampleQuestions.map((question) => (
            <SwiperSlide key={question}>
              <button
                className="w-full text-center px-3 py-2 text-xs text-primary font-medium transition-all hover:text-primary-dark hover:font-semibold"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = question;
                  }
                }}
              >
                {question}
              </button>
            </SwiperSlide>
          ))}
          <div>
            {/* Custom navigation buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-0 top-[35%] transform -translate-y-1/2 z-10 p-1"
              aria-label="Previous slide"
            >
              <FaChevronLeft size={24} className="text-primary" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-0 top-[35%] transform -translate-y-1/2 z-10 p-1 "
              aria-label="Next slide"
            >
              <FaChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
