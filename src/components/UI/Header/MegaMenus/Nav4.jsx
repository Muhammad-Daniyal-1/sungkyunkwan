"use client";
import React, { useState } from 'react';

function Nav4() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: '알림문의',
      items: ['공지사항'],
    },
    {
      title: '학술정보관 소개',
      items: [
        'Ask Us',
        'FaQ',
        '서비스별 문의',
        '도서관 캘린더',
        '자료기증',
        '연혁',
        '조직/직원 안내',
        '학술정보관 규정/이용지침/서식',
        'Annual Report',
        '학술정보관 방문/견학',
        '이용시간',
        '층별안내',
      ],
    },
  ];

  return (
    <nav className="mb-10">
      <div className="flex justify-between px-14 h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-20">
        {navData.map((group, groupIndex) => (
          <div
            className="w-full"
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

            {group.items.length > 6 ? (
              <ul className="grid grid-cols-2 gap-x-4">
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
            ) : (
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

export default Nav4;
