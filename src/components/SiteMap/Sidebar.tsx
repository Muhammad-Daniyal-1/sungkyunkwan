"use client";

import { MdOutlineMenuBook } from "react-icons/md";
import { BiSolidMessage } from "react-icons/bi";
import { IoFileTrayFull } from "react-icons/io5";
import { useState } from "react";

export default function Sidebar() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="my-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg" />
        <p>오거서</p>
      </div>

      <div>
        {/* Reading Program Section */}
        <div className="my-6">
          <div className="flex items-center gap-2">
            <MdOutlineMenuBook
              size={24}
              className={`${
                hoveredSection === "reading"
                  ? "text-secondary"
                  : "text-text-400"
              } transition-colors`}
            />
            <p
              className={`${
                hoveredSection === "reading"
                  ? "text-secondary"
                  : "text-text-400"
              } text-lg font-semibold transition-colors`}
            >
              독서프로그램
            </p>
          </div>
          <ol className="text-gray mt-6 border-l-2 border-[#E0E2EB] ">
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
        <div className="my-6">
          <div className="flex items-center gap-2">
            <BiSolidMessage
              size={24}
              className={`${
                hoveredSection === "review" ? "text-secondary" : "text-text-400"
              } transition-colors`}
            />
            <p
              className={`${
                hoveredSection === "review" ? "text-secondary" : "text-text-400"
              } text-lg font-semibold transition-colors`}
            >
              독서리뷰
            </p>
          </div>
          <ol className="text-gray mt-6 border-l-2 border-[#E0E2EB]">
            {["리뷰쓰기", "베스트리뷰", "리뷰작가", "나의리뷰"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`py-2 mx-3 pl-9 relative cursor-pointer transition-all rounded-sm ${
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

        <div className="my-6">
          <div className="flex items-center gap-2">
            <IoFileTrayFull
              size={24}
              className={`${
                hoveredSection === "archive"
                  ? "text-secondary"
                  : "text-text-400"
              } transition-colors`}
            />
            <p
              className={`${
                hoveredSection === "archive"
                  ? "text-secondary"
                  : "text-text-400"
              } text-lg font-semibold transition-colors`}
            >
              아카이브
            </p>
          </div>
          <ol className="text-gray mt-6 border-l-2 border-[#E0E2EB]">
            {["아카이브"].map((item, index) => (
              <li
                key={index}
                className={`py-2 mx-3 pl-9 relative cursor-pointer transition-all rounded-sm ${
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
