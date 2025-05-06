"use client";

import React, { useState } from 'react';

function Nav3() {
  const [hoveredGroupIndex, setHoveredGroupIndex] = useState(null);

  const navData = [
    {
      title: "자료이용",
      items: [
        "대출/반납/연장/예약",
        "북사이렌",
        "자료구입신청",
        "캠퍼스/타기관 도서대출",
        "타기관 자료복사",
        "타대학도서관 방문신청"
      ]
    },
    {
      title: "시설이용",
      items: [
        "일반열람실",
        "그룹스터디룸",
        "공동협업공간",
        "무선랜",
        "사물함"
      ]
    },
    {
      title: "이용자별 안내",
      items: [
        "학부생",
        "대학원생",
        "교수",
        "졸업생",
        "지역주민/외부등록이용자",
        "장애학생"
      ]
    },
    {
      title: "모바일서비스",
      items: [
        "학술정보관 모바일앱",
        "모바일학생증"
      ]
    },
    {
      title: "Proxy 서비스",
      items: [
        "전자자료 교외이용"
      ]
    }
  ];

  return (
    <nav className="mb-10">
      <div className="flex justify-between px-14 h-[467px] bg-[#2D2F3E] rounded-b-[32px] pt-10 gap-[40px]">
        {navData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-[400px]"
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

export default Nav3;
