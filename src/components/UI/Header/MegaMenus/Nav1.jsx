"use client";

import React, { useState } from 'react';

function Nav1() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: "Browse",
      items: ["Database", "E-book", "DVD"],
    },
    {
      title: "Collections",
      items: [
        "핫북",
        "신착자료",
        "성균고전 100선",
        "대한민국학술원 우수학술도서",
        "한국출판문화산업진흥원 세종도서",
        "북 큐레이션",
        "개인문고",
      ],
    },
    {
      title: "SKKU Collection",
      items: ["SKKU 학위논문", "SKKU Archive", "성균고전 희귀도서"],
    },
  ];

  return (
    <nav className="mb-10">
      <div className="flex justify-evenly px-14 h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
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
                  className="duration-300 cursor-pointer h-[50px] font-pretendard text-sm py-4 pl-3 flex items-center gap-1.5 text-white border-b-1 border-[#454F6F] hover:text-[#11AC57]"
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

export default Nav1;

