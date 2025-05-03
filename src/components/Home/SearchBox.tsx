"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoSearchSharp } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

const sampleQuestions = [
  "소프트웨어학과에서 가장 인기 있는 교양 과목은?",
  "소프트웨어학과에서 필수적으로 배우는 프로그래밍 언어는?",
  "소프트웨어학과에서 가장 어려운 과목은?",
  "소프트웨어학과에서 취업에 도움이 되는 자격증은?",
  "소프트웨어학과에서 프로젝트는 어떻게 진행되나요?",
];

export default function SearchBox() {
  //   const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div>
      <div className="mt-5 rounded-2xl border-2 border-primary p-6 flex justify-between gap-4">
        <div className="flex w-full items-center">
          <div className="px-20">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="relative w-[60px] h-[32px] bg-gray-200 peer-focus:outline-none  peer-focus:ring-secondary dark:peer-focus:ring-secondary rounded-full peer dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[28px] after:w-[28px] after:transition-all dark:border-gray peer-checked:bg-secondary dark:peer-checked:bg-secondary"></div>
            </label>
          </div>
          <p className="whitespace-nowrap mr-6">명륜-ai로 검색</p>
          <p className="whitespace-nowrap">키워드나 질문을 입력해 주세요.</p>
          <input type="text" className="rounded-2xl w-full p-4" />
        </div>

        <button className="bg-secondary text-white rounded-full px-4 py-2 flex items-center gap-2 h-auto min-w-[90px]">
          <IoSearchSharp />
          검색
        </button>
      </div>

      <div className="flex mt-4 gap-8 items-start">
        <div className="flex gap-2 items-center max-w-[1440px] mx-auto">
          <Image
            src="/svgs/festival.svg"
            alt="Festival"
            width={24}
            height={24}
          />
          <p className="whitespace-nowrap">
            우리과(소프트웨어공학과) 친구들은 친구들은 이런 질문을 많이 했어요!
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
                onClick={() => alert(`Clicked: ${text}`)}
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
