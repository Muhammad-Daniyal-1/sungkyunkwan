"use client";
import React, { useState } from 'react';

function Nav5() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: '독서프로그램',
      items: ['. 공지사항', '. 프로그램'],
    },
    {
      title: '독서리뷰',
      items: ['. 독서리뷰', '. 작가', '. 독서인증서'],
    },
    {
      title: '독서가이드',
      items: ['. 독서 가이드', '. 성균고전 100선', '. 추천도서'],
    },
    {
      title: '아카이브',
      items: ['. 오거서 갤러리', '. 오거서 기록'],
    },
    {
      title: '오거서 안내',
      items: ['. 오거서 소개', '. FaQ', 'Q&A'],
    },
    {
      title: '마이페이지',
      items: ['. 마이페이지'],
    },
  ];

  return (
    <nav className="mb-10">
      <div className="flex justify-between px-14 flex-wrap h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
        {navData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            onMouseEnter={() => setHoveredGroupIndex(groupIndex)}
            onMouseLeave={() => setHoveredGroupIndex(null)}
          >
            <button
              className={`duration-300 w-[200px] ${hoveredGroupIndex === groupIndex
                  ? 'bg-[#ADDD1D]'
                  : 'bg-[#8188A180] hover:bg-[#ADDD1D]'
                } p-[16px] text-start font-bold text-[1rem] font-pretendard`}
            >
              {group.title}
            </button>
            <ul>
              {group.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="duration-300 cursor-pointer h-[50px] font-pretendard text-[14px] py-4 pl-3 text-white border-b-1 border-[#454F6F] hover:text-[#11AC57]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav5;
