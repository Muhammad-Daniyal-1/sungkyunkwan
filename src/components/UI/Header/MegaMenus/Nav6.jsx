"use client";

import React, { useState } from 'react';

function Nav6() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: '발전기금',
      items: ['. 모금안내', '. 참여하기', '. 기부자 예우'],
    },
  ];

  return (
    <nav className="mb-10">
      <div className="flex px-14 h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
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
                    className="duration-300 cursor-pointer h-[50px] font-pretendard text-[14px] py-4 pl-3 text-white border-b-1 border-[#454F6F] hover:text-[#11AC57]"
                  >
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

export default Nav6;
