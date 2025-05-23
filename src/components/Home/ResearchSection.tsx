"use client";

import { useState, useRef } from "react";
import MenuBookIcon from "@/assets/Svgs/MenuBookIcon";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType } from "swiper";

const data = [
  {
    id: 1,
    title: "Local & Federated Learning at the network edge for...",
    journal: "Future Generation Computer Systems 2022",
    authors: "Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos K.",
  },
  {
    id: 2,
    title: "Local & Federated Learning at the network edge for...",
    journal: "Future Generation Computer Systems 2022",
    authors: "Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos K.",
  },
  {
    id: 3,
    title: "Local & Federated Learning at the network edge for...",
    journal: "Future Generation Computer Systems 2022",
    authors: "Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos K.",
  },
  {
    id: 4,
    title: "Local & Federated Learning at the network edge for...",
    journal: "Future Generation Computer Systems 2022",
    authors: "Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos K.",
  },
  {
    id: 5,
    title: "Local & Federated Learning at the network edge for...",
    journal: "Future Generation Computer Systems 2022",
    authors: "Harth N.,Anagnostopoulos C.,Voegel H.J.,Kolomvatsos K.",
  },
];

const recentData = [
  {
    id: 5,
    title: "Recent advances in machine learning applications...",
    journal: "IEEE Transactions on Neural Networks 2023",
    authors: "Kim J., Lee S., Park H., Choi M.",
  },
  {
    id: 6,
    title:
      "Artificial intelligence in healthcare: challenges and opportunities",
    journal: "Journal of Medical Systems 2023",
    authors: "Park S., Jung Y., Kim D., Lee J.",
  },
  {
    id: 7,
    title: "Deep learning approaches for natural language processing",
    journal: "Computational Linguistics 2022",
    authors: "Yoon K., Jeong H., Lim S., Kang J.",
  },
  {
    id: 8,
    title: "Blockchain technology for secure data sharing in IoT",
    journal: "IEEE Internet of Things Journal 2023",
    authors: "Lee J., Kim H., Choi S., Park M.",
  },
];

export default function ResearchSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["최신", "많이 인용됨"];
  const tabsData = [data, recentData];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const swiperRef = useRef<SwiperType>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:mt-24">
      <div className="md:col-span-1 bg-white p-4 ">
        <h2 className="text-lg font-bold mb-2">SKKU </h2>
        <div className="flex justify-between items-end lg:items-start lg:flex-col">
          <p className="text-3xl font-bold">Research</p>
          <p className="text-[#8188A1] mt-3">+ 더보기</p>
        </div>
        <p className="text-md text-gray mt-10">
          최근 성균관대학교에서 발행한 신규 논문입니다.
        </p>
      </div>

      <div className="md:col-span-4 relative">
        {/* Tabs navigation */}
        <div className="hidden md:flex mb-6 border-b border-[#E2EAE8]">
          {tabs.map((tab, index) => (
            <div key={index} className="relative ">
              <button
                onClick={() => setActiveTab(index)}
                className={`pb-2 px-24  font-medium text-base transition-colors duration-700 ease-in-out ${
                  activeTab === index ? "text-[#2D2F3E]" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
              <div
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-700 ease-in-out ${
                  activeTab === index
                    ? "bg-secondary w-full"
                    : "bg-transparent w-0"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6 md:hidden">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 rounded-lg border text-sm font-medium transition-colors duration-300 ${
                activeTab === index
                  ? "bg-secondary text-white border-secondary"
                  : "bg-white text-gray-600 border-[#E2EAE8]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content with slider */}
        <div className="relative px-2 md:px-10">
          {/* Navigation buttons for desktop */}
          {!isMobile && (
            <>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
              >
                <FaChevronLeft size={32} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center cursor-pointer"
              >
                <FaChevronRight size={32} />
              </button>
            </>
          )}

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={isMobile ? 1.15 : 4}
            slidesPerGroup={1}
            loop={true}
            pagination={isMobile ? { clickable: true } : false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
            key={`swiper-${activeTab}`}
          >
            {tabsData[activeTab].map((item) => (
              <SwiperSlide key={`${activeTab}-${item.id}`}>
                <div className=" border border-[#E2EAE8] px-3 py-7 rounded-xl">
                  <div className="flex justify-between items-center gap-2">
                    <FaRegHeart />
                    <p className="border-x-2 border-gray text-xs items-center flex">
                      <span className="text-red font-bold mx-1">SCOPUS</span>
                      <span className="mx-1">6회인용</span>
                    </p>
                    <p className="items-center flex text-xs">
                      <span className="text-red font-bold mx-1">KCI</span>
                      <span className="mx-1">1회인용</span>
                    </p>
                  </div>
                  <p className="font-bold text-md my-6 line-clamp-2">
                    {item.title}
                  </p>
                  <div className="flex gap-1 text-[#8188A1] text-sm justify-center items-center my-6">
                    <MenuBookIcon />
                    <p>{item.journal}</p>
                  </div>
                  <div className="flex gap-1 justify-center items-center text-[#8188A1] text-sm">
                    <MenuBookIcon />
                    <p>{item.authors}</p>
                  </div>

                  <button className="flex justify-center items-center w-full bg-[#1D4676] rounded-full text-white p-2.5 mt-6">
                    PDF 다운로드
                    <Image
                      src="/svgs/download.svg"
                      alt="Download"
                      width={24}
                      height={24}
                      className="ml-2"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}

            {!isMobile &&
              tabsData[activeTab].length < 4 &&
              Array.from({ length: 4 - tabsData[activeTab].length }).map(
                (_, index) => (
                  <SwiperSlide key={`empty-${index}`} className="opacity-0">
                    <div className="invisible"></div>
                  </SwiperSlide>
                )
              )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
