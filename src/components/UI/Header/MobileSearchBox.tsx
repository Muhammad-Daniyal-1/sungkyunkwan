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

export default function MobileSearchBox() {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const asRef = useRef<HTMLDivElement | null>(null);
  const suggestionsRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  /* ---------- outside‑click close ---------- */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div ref={containerRef} className="px-4 sm:px-6 md:px-8">
      <div
        onClick={(e) => {
          const el = e.target as HTMLElement;
          // if the click is NOT on (or inside) an element that says “data‑ignore‑open”
          if (!el.closest("[data-ignore-open]")) setIsOpen(true);
        }}
        className="mt-6 rounded-2xl border-2 border-primary py-3 px-4"
      >
        <div
          className={`flex justify-between flex-col md:flex-row gap-4 w-full ${
            isOpen ? "" : ""
          }`}
        >
          {/* <div className="flex flex-col md:flex-row w-full md:items-center"> */}
          <div className="flex items-center gap-4">
            <label
              className="inline-flex items-center cursor-pointer relative"
              data-ignore-open
            >
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`relative w-[65px] h-8 rounded-full transition-all duration-300 flex items-center justify-between px-2 text-xs font-bold text-white ${
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
                  absolute top-1 h-6 w-6 rounded-full bg-white transition-all duration-300 ${
                    isChecked ? "left-[calc(100%-28px)]" : "left-1"
                  }
                `}
              ></div>
            </label>

            <p
              className="whitespace-nowrap mr-6 text-[#8188A1]"
              onClick={() => setIsOpen(true)}
            >
              명륜-ai로 검색
            </p>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <input
              type="text"
              className="rounded-2xl w-full p-4 focus-within:border-none focus-within:ring-0 focus-within:ring-offset-0 focus-within:outline-none placeholder:text-[#B1B7CC]"
              placeholder="키워드나 질문을 입력해 주세요."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {/* </div> */}

            <button
              className="bg-secondary text-white rounded-xl p-3 "
              data-ignore-open
            >
              <IoSearchSharp />
            </button>
          </div>
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
            <div className="flex md:flex-row flex-col gap-2 items-center mb-4">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
              {" "}
              {sampleQuestions.map((question) => (
                <button
                  key={question}
                  className="text-left p-3 text-xs lg:text-sm rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50  transition-all bg-[#E0E2EBB2]"
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
        className="mt-4"
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
          className="w-full py-2"
        >
          {sampleQuestions.map((question) => (
            <SwiperSlide key={question}>
              <button
                className="w-full text-center px-3 py-2 text-sm text-primary font-medium transition-all hover:text-primary-dark hover:font-semibold"
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
