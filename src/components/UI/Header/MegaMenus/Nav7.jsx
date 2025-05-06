"use client";
import React, { useState } from 'react';

function Nav7() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: 'My Dashboard',
      items: ['Database', 'E-book', 'DVD'],
    },
    {
      title: '개인공지',
      items: [],
    },
    {
      title: '개인정보관리',
      items: [
        '자료구입 신청현황',
        '캠퍼스간 도서대출 현황',
        '타기관 도서대출 이용현황',
        '원문복사 이용현황',
        '타기관 열람의뢰 현황',
        '부재도서확인 이용현황',
        '서고도서 신청현황',
      ],
    },
  ];

  return (
    <nav className="mb-10">
      <div className="flex justify-between px-14 h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
        {navData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            onMouseEnter={() => setHoveredGroupIndex(groupIndex)}
            onMouseLeave={() => setHoveredGroupIndex(null)}
          >
            <button
              className={`duration-300 w-[400px] ${hoveredGroupIndex === groupIndex
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
                  className="duration-300 cursor-pointer h-[50px] font-pretendard text-[14px] py-4 pl-3 text-white border-b-1 border-[#454F6F] hover:text-[#11AC57] flex items-center gap-1.5"
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

export default Nav7;
