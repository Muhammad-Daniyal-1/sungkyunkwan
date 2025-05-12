"use client";

import { MdOutlineMenuBook } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { IoFileTrayFull } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{[key: string]: boolean}>({});

  const toggleMobileSection = (section: string) => {
    setMobileExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="my-4 px-4 md:px-0">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-lg" />
        <p className="text-sm md:text-base">오거서</p>
      </div>

      <div>
        {/* Reading Program Section */}
        <div className="my-4 md:my-6">
          <div 
            className="flex items-center justify-between gap-2 cursor-pointer md:cursor-default"
            onClick={() => toggleMobileSection('reading')}
          >
            <div className="flex items-center gap-2">
              <MdOutlineMenuBook
                size={20}
                className={`${
                  hoveredSection === "reading"
                    ? "text-secondary"
                    : "text-text-400"
                } transition-colors md:text-xl`}
              />
              <p
                className={`${
                  hoveredSection === "reading"
                    ? "text-secondary"
                    : "text-text-400"
                } text-base md:text-lg font-semibold transition-colors`}
              >
                독서프로그램
              </p>
            </div>
            <span className="md:hidden">
              {mobileExpanded['reading'] ? '−' : '+'}
            </span>
          </div>
          <ol className={`text-gray mt-4 md:mt-6 border-l-2 border-[#E0E2EB] ${!mobileExpanded['reading'] && 'hidden md:block'}`}>
            {[
              "AI 도서추천",
              "성균고전 100선",
              "독서인증서",
              "오거서장학금",
              "참여프로그램",
            ].map((item, index) => (
              <li
                key={index}
                className={`py-2 mx-3 pl-6 relative cursor-pointer transition-all rounded-sm ${
                  hoveredItem === `reading-${index}` ? "bg-[#EFF2F1]" : ""
                }`}
                onMouseEnter={() => {
                  setHoveredItem(`reading-${index}`);
                  setHoveredSection("reading");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setHoveredSection(null);
                }}
              >
                {hoveredItem === `reading-${index}` && (
                  <span className="absolute -left-3.5 top-0 h-full w-[2px] bg-[#8188A1] rounded" />
                )}
                <span
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                    hoveredItem === `reading-${index}`
                      ? "bg-secondary"
                      : "bg-[#E0E2EB]"
                  }`}
                ></span>

                <span
                  className={
                    hoveredItem === `reading-${index}` ? "text-primary" : ""
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Review Section */}
        <div className="my-4 md:my-6">
          <div 
            className="flex items-center justify-between gap-2 cursor-pointer md:cursor-default"
            onClick={() => toggleMobileSection('review')}
          >
            <div className="flex items-center gap-2">
              <BiSolidMessage
                size={20}
                className={`${
                  hoveredSection === "review" ? "text-secondary" : "text-text-400"
                } transition-colors md:text-xl`}
              />
              <p
                className={`${
                  hoveredSection === "review" ? "text-secondary" : "text-text-400"
                } text-base md:text-lg font-semibold transition-colors`}
              >
                독서리뷰
              </p>
            </div>
            <span className="md:hidden">
              {mobileExpanded['review'] ? '−' : '+'}
            </span>
          </div>
          <ol className={`text-gray mt-4 md:mt-6 border-l-2 border-[#E0E2EB] ${!mobileExpanded['review'] && 'hidden md:block'}`}>
            {["리뷰쓰기", "베스트리뷰", "리뷰작가", "나의리뷰"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`py-1.5 md:py-2 mx-3 pl-6 md:pl-9 relative cursor-pointer transition-all rounded-sm ${
                    hoveredItem === `review-${index}` ? "bg-[#EFF2F1]" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredItem(`review-${index}`);
                    setHoveredSection("review");
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setHoveredSection(null);
                  }}
                >
                  {hoveredItem === `review-${index}` && (
                    <span className="absolute -left-3.5 top-0 h-full w-[2px] bg-[#8188A1] rounded" />
                  )}
                  <span
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                      hoveredItem === `review-${index}`
                        ? "bg-secondary"
                        : "bg-[#E0E2EB]"
                    }`}
                  ></span>

                  <span
                    className={
                      hoveredItem === `review-${index}` ? "text-primary" : ""
                    }
                  >
                    {item}
                  </span>
                </li>
              )
            )}
          </ol>
        </div>

        <div className="my-4 md:my-6">
          <div 
            className="flex items-center justify-between gap-2 cursor-pointer md:cursor-default"
            onClick={() => toggleMobileSection('archive')}
          >
            <div className="flex items-center gap-2">
              <IoFileTrayFull
                size={20}
                className={`${
                  hoveredSection === "archive"
                    ? "text-secondary"
                    : "text-text-400"
                } transition-colors md:text-xl`}
              />
              <p
                className={`${
                  hoveredSection === "archive"
                    ? "text-secondary"
                    : "text-text-400"
                } text-base md:text-lg font-semibold transition-colors`}
              >
                아카이브
              </p>
            </div>
            <span className="md:hidden">
              {mobileExpanded['archive'] ? '−' : '+'}
            </span>
          </div>
          <ol className={`text-gray mt-4 md:mt-6 border-l-2 border-[#E0E2EB] ${!mobileExpanded['archive'] && 'hidden md:block'}`}>
            {["아카이브"].map((item, index) => (
              <li
                key={index}
                className={`py-1.5 md:py-2 mx-3 pl-6 md:pl-9 relative cursor-pointer transition-all rounded-sm ${
                  hoveredItem === `archive-${index}` ? "bg-[#EFF2F1]" : ""
                }`}
                onMouseEnter={() => {
                  setHoveredItem(`archive-${index}`);
                  setHoveredSection("archive");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setHoveredSection(null);
                }}
              >
                {hoveredItem === `archive-${index}` && (
                  <span className="absolute -left-3.5 top-0 h-full w-[2px] bg-[#8188A1] rounded" />
                )}
                <span
                  className={`absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
                    hoveredItem === `archive-${index}`
                      ? "bg-secondary"
                      : "bg-[#E0E2EB]"
                  }`}
                ></span>
                <span
                  className={
                    hoveredItem === `archive-${index}` ? "text-primary" : ""
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
