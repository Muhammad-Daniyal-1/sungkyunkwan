"use client";
import React, { useState } from 'react';

function Nav5() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: '독서프로그램',
      items: [
        'AI도서추천',
        '성균고전100선',
        '독서인증서',
        '오거서장학금',
        '참여프로그램',
      ],
    },
    {
      title: '독서리뷰',
      items: [
        '리뷰쓰기',
        '베스트리뷰',
        '리뷰작가',
        '나의리뷰',
      ],
    },
    {
      title: '아카이브',
      items: [
        '행사사진',
        '오거서영상',
        '저자특강',
        'Book&talk',
        '오거서후기',
      ],
    },
  ];


  return (
    <nav className="mb-10">
      <div className="grid grid-cols-3 px-14 flex-wrap h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
        {navData.map((group, groupIndex) => (
          <div
            className="w-full"
            key={groupIndex}
            onMouseEnter={() => setHoveredGroupIndex(groupIndex)}
            onMouseLeave={() => setHoveredGroupIndex(null)}
          >
            <button
              className={`duration-300 w-full ${hoveredGroupIndex === groupIndex
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
                  className="duration-300 cursor-pointer h-[50px] font-pretendard text-[14px] py-4 pl-3 flex items-center gap-1.5 text-white border-b-1 border-[#454F6F] hover:text-[#11AC57]"
                >
                  <span className="w-1 h-1 bg-white rounded-full" />
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
