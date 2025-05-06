"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function InfoSectionSlider() {
  const slides = [
    {
      id: "01",
      title: "[중앙학술정보관] 소원 트리 초대장",
      date: "2024-12-29",
      content:
        '안녕하세요, 성균관대학교 중앙학술정보관입니다! 다가오는 연말을 맞아 여러분의 소원을 담아볼 특별한 이벤트를 준비했습니다. "소원 트리 이벤트"에 참여해 학술정보관 로비를 따뜻한 소원으로 채워보세요. 이벤트 안내 ...',
    },
    {
      id: "02",
      title: "[중앙학술정보관] 소원 트리 초대장",
      date: "2024-12-29",
      content:
        '안녕하세요, 성균관대학교 중앙학술정보관입니다! 다가오는 연말을 맞아 여러분의 소원을 담아볼 특별한 이벤트를 준비했습니다. "소원 트리 이벤트"에 참여해 학술정보관 로비를 따뜻한 소원으로 채워보세요. 이벤트 안내 ...',
    },
    {
      id: "03",
      title: "[중앙학술정보관] 소원 트리 초대장",
      date: "2024-12-29",
      content:
        '안녕하세요, 성균관대학교 중앙학술정보관입니다! 다가오는 연말을 맞아 여러분의 소원을 담아볼 특별한 이벤트를 준비했습니다. "소원 트리 이벤트"에 참여해 학술정보관 로비를 따뜻한 소원으로 채워보세요. 이벤트 안내 ...',
    },
    {
      id: "04",
      title: "[중앙학술정보관] 소원 트리 초대장",
      date: "2024-12-29",
      content:
        '안녕하세요, 성균관대학교 중앙학술정보관입니다! 다가오는 연말을 맞아 여러분의 소원을 담아볼 특별한 이벤트를 준비했습니다. "소원 트리 이벤트"에 참여해 학술정보관 로비를 따뜻한 소원으로 채워보세요. 이벤트 안내 ...',
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(2);
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.25);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="mt-8 relative px-0 md:px-4 lg:px-8 overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
          slideShadows: false,
        }}
        initialSlide={1}
        className="mySwiper pb-12 pt-4"
        loop={true}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 transform ${
                  isActive ? "scale-100 z-10" : "scale-95 opacity-80"
                }`}
              >
                {isActive ? (
                  <div className="bg-white border-4 border-primary-main p-4 md:p-6 rounded-xl h-full shadow-lg">
                    <p className="text-2xl md:text-4xl font-bold text-primary-main">
                      {slide.id}
                    </p>
                    <div className="text-center flex flex-col items-center">
                      <button className="bg-secondary text-white py-2 md:py-4 px-6 md:px-10 rounded-full mt-4 hover:bg-opacity-90 transition-opacity">
                        <span className="mr-2">공지사항</span>
                        <span>+ 더보기</span>
                      </button>
                      <div className="border-b-2 border-primary my-6 md:my-10 w-fit">
                        <p className="text-xl md:text-3xl font-bold text-primary">
                          {slide.title}
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-[#8188A1] line-clamp-4 md:line-clamp-none">
                        {slide.content.split(/[.!]/).map((sentence, i) =>
                          sentence ? (
                            <span key={i}>
                              {sentence.trim()}.<br />
                            </span>
                          ) : null
                        )}
                      </p>
                      <p className="text-gray text-sm md:text-base mt-6 md:mt-10">
                        {slide.date}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#8188A1] p-6 md:p-10 rounded-xl flex flex-col justify-between h-64 md:h-96 shadow-lg">
                    <div>
                      <p className="text-2xl md:text-4xl mb-2 md:mb-4 text-white font-bold">
                        {slide.id}
                      </p>
                      <p className="text-lg md:text-3xl text-white">
                        {slide.title}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-white text-sm md:text-base">
                        {slide.date}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
