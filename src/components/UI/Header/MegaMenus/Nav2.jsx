"use client";

import React, { useState } from 'react';

function Nav2() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: "정보활용교육",
      items: [], // No list
    },
    {
      title: "논문작성 및 출판지원",
      items: [
        "참고문헌스타일",
        "참고문헌관리도구",
        "논문투고절차",
        "논문교열서비스",
        "논문유사도검사",
        "OA출판지원서비스",
      ],
    },
    {
      title: "연구성과분석",
      items: [], // No list
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
            {group.items.length > 0 && (
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
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav2;
