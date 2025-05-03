"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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

  const [slidesPerView, setSlidesPerView] = useState(1.5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Mobile view
      } else {
        setSlidesPerView(1.5); // Desktop view
      }
    };

    updateSlidesPerView();

    // Add resize event listener to update on window resize
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <div className="mt-8 relative px-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        {/* <button
          onClick={() => swiper?.slidePrev()}
          className="bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button> */}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        {/* <button
          onClick={() => swiper?.slideNext()}
          className="bg-white rounded-full p-2 shadow-lg"
        >
          <ChevronRight size={24} />
        </button> */}
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        initialSlide={1}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{ delay: 100 }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 transform ${
                  isActive ? "scale-100" : "scale-95 opacity-70"
                }`}
              >
                {isActive ? (
                  <div className="bg-white border-4 border-primary-main p-6 rounded-xl h-full">
                    <p className="text-4xl">{slide.id}</p>
                    <div className="text-center flex flex-col items-center">
                      <button className="bg-secondary text-white py-4 px-10 rounded-full">
                        <span className="mr-2">공지사항</span>
                        <span />
                        <span>+ 더보기</span>
                      </button>
                      <div className="border-b-2 border-primary my-10 w-fit">
                        <p className="text-3xl font-bold text-primary">
                          {slide.title}
                        </p>
                      </div>
                      <p className="text-base text-[#8188A1]">
                        {slide.content.split(/[.!]/).map((sentence, i) =>
                          sentence ? (
                            <span key={i}>
                              {sentence.trim()}.<br />
                            </span>
                          ) : null
                        )}
                      </p>
                      <p className="text-gray text-base mt-10">{slide.date}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#8188A1] p-10 rounded-xl flex flex-col justify-between h-[400px]">
                    <div>
                      <p className="text-4xl mb-4">{slide.id}</p>
                      <p className="text-3xl text-white">{slide.title}</p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-white text-base">{slide.date}</p>
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
