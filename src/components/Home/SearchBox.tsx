"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchSharp } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

import Image from "next/image";

const sampleQuestions = [
  "소프트웨어학과에서 가장 인기 있는 교양 과목은?",
  "소프트웨어학과에서 필수적으로 배우는 프로그래밍 언어는?",
  "소프트웨어학과에서 가장 어려운 과목은?",
  "소프트웨어학과에서 취업에 도움이 되는 자격증은?",
  "소프트웨어학과에서 프로젝트는 어떻게 진행되나요?",
];

export default function SearchBox({ onExpandChange }) {
  const [searchText, setSearchText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchBoxRef = useRef(null);

  const totalItems = sampleQuestions.length;

  // Notify parent component when expanded state changes
  useEffect(() => {
    if (onExpandChange) {
      onExpandChange(isExpanded);
    }
  }, [isExpanded, onExpandChange]);

  // Handle clicks outside the search box
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    }

    // Add event listener when expanded
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

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

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleSearchBoxClick = (e) => {
    // Prevent event bubbling
    e.stopPropagation();

    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleCloseExpanded = (e) => {
    // Prevent event bubbling
    if (e) e.stopPropagation();
    setIsExpanded(false);
  };

  const handleQuestionClick = (text) => {
    setSearchText(text);
    // You might want to automatically search when clicking a question
    // handleSearch();
  };

  return (
    <div>
      <motion.div
        ref={searchBoxRef}
        className={`mt-5 rounded-2xl border-2 border-primary overflow-hidden ${
          isExpanded ? "bg-white" : ""
        }`}
        initial={false}
        animate={{
          height: isExpanded ? "auto" : "auto",
          paddingBottom: isExpanded ? "20px" : "0px",
        }}
        transition={{
          duration: 0.5,
          layout: { duration: 0.5 },
        }}
        onClick={handleSearchBoxClick}
        layout
      >
        <div className="p-6 flex justify-between gap-4">
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
              className="rounded-2xl w-full p-4 focus-within:outline-none focus-within:ring-0"
              placeholder="키워드나 질문을 입력해 주세요."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              className="bg-secondary text-white rounded-full px-4 py-2 flex items-center gap-2 h-auto min-w-[90px]"
              onClick={(e) => e.stopPropagation()}
            >
              <IoSearchSharp />
              검색
            </button>
            {isExpanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseExpanded(e);
                }}
              >
                <IoClose size={24} />
              </motion.button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-6"
              onClick={(e) => e.stopPropagation()}
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
                    <motion.button
                      key={question}
                      className="text-left p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-blue-50 text-sm transition-all bg-[#E0E2EBB2]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ scale: 1.02 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuestionClick(question);
                      }}
                    >
                      {question}
                      <div className="flex justify-end mt-2">
                        <FaChevronRight className="text-white" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex mt-4 gap-8 items-start"
        >
          <div className="flex gap-2 items-center max-w-[1440px] mx-auto">
            <Image
              src="/svgs/festival.svg"
              alt="Festival"
              width={24}
              height={24}
            />
            <p className="whitespace-nowrap text-sm">
              우리과(소프트웨어공학과) 친구들은 이런 질문을 많이 했어요!
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <button onClick={handlePrev}>
              <IoChevronBack size={24} />
            </button>
            <div className="flex gap-2 max-w-[700px] overflow-x-auto">
              {getVisibleItems().map(({ text, isActive }) => (
                <motion.button
                  key={text}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuestionClick(text);
                  }}
                  className={`px-3 py-2 whitespace-nowrap transition-all text-xs duration-500 ${
                    isActive
                      ? "text-primary font-semibold scale-105 ease-in-out transition-all duration-500"
                      : "text-[#CDD2E0] ease-in-out transition-all duration-500"
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
        </motion.div>
      )}
    </div>
  );
}
