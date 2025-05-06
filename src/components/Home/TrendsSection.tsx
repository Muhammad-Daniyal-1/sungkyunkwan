"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const tabs = ["대출 Best", "우리과 Best", "학년 Best", "주제별 Trend Best"];

const tabsData = [
  [
    { id: 1, img: "/images/trend-1.jpg", title: "소년이 온다" },
    { id: 2, img: "/images/trend-2.jpg", title: "채식주의자" },
    { id: 3, img: "/images/trend-3.jpg", title: "마음의 기술" },
    { id: 4, img: "/images/trend-4.jpg", title: "마지막 이기적 결정" },
    { id: 5, img: "/images/trend-5.jpg", title: "클래식 수업" },
  ],
  [
    { id: 1, img: "/images/trend-2.jpg", title: "우리과 A" },
    { id: 2, img: "/images/trend-3.jpg", title: "우리과 B" },
  ],
  [
    { id: 1, img: "/images/trend-4.jpg", title: "1학년 추천" },
    { id: 2, img: "/images/trend-5.jpg", title: "2학년 추천" },
  ],
  [
    { id: 1, img: "/images/trend-1.jpg", title: "AI Trend" },
    { id: 2, img: "/images/trend-3.jpg", title: "UX Trend" },
  ],
];

// Custom hook for media query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export default function TrendsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Book item component
  const BookItem = ({ item }: { item: (typeof tabsData)[0][number] }) => (
    <motion.div variants={itemVariants}>
      <div className="flex justify-center">
        <div className="relative">
          <div className="absolute -top-1 -left-1 w-14 h-14 bg-green-500 rounded-tl-sm rounded-t-full rounded-br-full rounded-bl-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">{item.id}</span>
          </div>
          <Image
            src={item.img}
            alt={item.title}
            width={200}
            height={300}
            className="rounded-xl border border-[#C6D7D4] w-[300px] h-[400px] lg:max-w-[200px] lg:max-h-[300px]"
          />
        </div>
      </div>
      <p className="font-bold text-md my-6 text-center">{item.title}</p>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:mt-24">
      {/* left intro */}
      <div className="md:col-span-1 bg-white p-4">
        <div className="flex justify-between items-end lg:items-start lg:flex-col">
          <p className="text-3xl font-bold">
            추천과
            <br className="hidden md:block" />
            트렌드
            <br />
            한눈에 보기
          </p>
          <p className="text-[#8188A1] mt-3 cursor-pointer">+ 더보기</p>
        </div>
        <p className="text-md text-gray mt-10">
          이번 달 가장 많이 대출된
          <br className="hidden xl:block" />
          인기 자료를 만나보세요
          <br className="hidden xl:block" />
          독자들의 선택을 받은
          <br className="hidden xl:block" />
          최고의 자료 목록입니다
        </p>
      </div>

      {/* right content */}
      <div className="md:col-span-4">
        {/* desktop tab bar */}
        <div className="hidden md:flex mb-6 border-b border-[#E2EAE8]">
          {tabs.map((tab, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => setActiveTab(i)}
                className={`pb-2 px-16 font-medium text-base transition-colors duration-700 ease-in-out ${
                  activeTab === i ? "text-[#2D2F3E]" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
              <div
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-700 ease-in-out ${
                  activeTab === i ? "bg-secondary w-full" : "bg-transparent w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* mobile button grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`py-2 rounded-lg border text-sm font-medium transition-colors duration-300 ${
                activeTab === i
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-gray-600 border-[#E2EAE8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* tab content - conditional render based on screen size */}
        {isMobile ? (
          // Mobile view - Swiper slider
          <div className="relative px-2">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.5}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {tabsData[activeTab].map((item) => (
                <SwiperSlide key={item.id}>
                  <BookItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Desktop view - Grid layout
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 transition-all duration-700 ease-in-out"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tabsData[activeTab].map((item) => (
              <BookItem key={item.id} item={item} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
