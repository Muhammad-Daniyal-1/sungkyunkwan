import Image from "next/image";
import { MdPhone } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="relative p-4 xl:p-8 rounded-xl xl:mt-28 overflow-hidden">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-[#000E0380] z-0" />

      {/* Main content */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 justify-center items-center text-white">
        <div className="px-3 xl:px-10 py-6">
          <p className="mb-1 text-center xl:text-left">SKKU Library</p>
          <p className="text-3xl font-bold text-center xl:text-left">
            성균관대학교 도서관,
          </p>
          <p className="text-[40px] font-bold text-center xl:text-left">
            스마트한 학습의 시작!
          </p>

          <p className="text-secondary-main -mb-1 underline text-center xl:text-left">
            운영시간부터 좌석 예약까지, 필요한 정보를 한눈에!
          </p>

          <div className="mt-12 xl:mt-28 grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 justify-center lg:justify-start">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-[#0A00464D] rounded-full border border-white w-[120px] h-[120px] p-4">
                <p className="text-secondary-main text-sm">연체 대출건</p>
                <p className="text-2xl">2건</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-[#0A00464D] rounded-full border border-white w-[120px] h-[120px] p-4">
                <p className="text-secondary-main text-sm">자주 예약</p>
                <p className="text-2xl">TP룸1</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-[#0A00464D] rounded-full border border-white w-[120px] h-[120px] p-4">
                <p className="text-secondary-main text-sm">제 2열람실</p>
                <p className="text-2xl">158석 </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-[#0A00464D] rounded-full border border-white w-[120px] h-[120px] p-4">
                <p className="text-secondary-main text-sm">주문 도서 도착</p>
                <p className="text-2xl">북사이렌</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row xl:flex-col xl:gap-4">
          {/* block #1 */}
          <div className="py-4 px-6 rounded-xl bg-[#FFFFFFCC] mb-6 lg:mb-0 text-black lg:w-1/2 xl:w-full">
            <div className="flex justify-between mb-2">
              <p className="font-bold text-sm xl:text-lg">
                학술정보관 운영시간
              </p>
              <p className="text-[#8188A1] text-sm xl:text-base">+ 더보기</p>
            </div>
            <div className="flex items-center mb-3">
              <Image
                src="/svgs/date_range.svg"
                alt="Date Range"
                width={24}
                height={24}
              />
              <p className="text-sm xl:text-base ml-2">
                오늘 12월9일(월)은{" "}
                <span className="text-red font-bold">09:00 ~ 21:40</span> 까지
                운영됩니다.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 xl:gap-10">
              {[
                { label: "자료실", seats: 100 },
                { label: "PC", seats: 50 },
                { label: "열람실", seats: 1000 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center"
                >
                  <p className="text-sm font-bold bg-white rounded-full p-2 text-center w-full mb-3">
                    {item.label}
                  </p>
                  <p className="text-[#454F6F] mb-2 text-xs xl:text-base">
                    09:00 ~ 21:40
                  </p>
                  <p className="text-xs xl:text-base">
                    잔여 : <span className="text-red">{item.seats}</span>석
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/*block #2 */}
          <div className="py-4 px-6 rounded-xl bg-[#FFFFFFCC] text-black lg:w-1/2 xl:w-full">
            <div className="flex justify-between mb-3">
              <p className="font-bold text-sm xl:text-lg">주요전화번호 </p>
              <p className="text-[#8188A1] text-sm xl:text-base">+ 더보기</p>
            </div>
            <div className="flex items-center mb-3">
              <Image
                src="/svgs/date_range.svg"
                alt="Date Range"
                width={24}
                height={24}
              />
              <p className="text-xs xl:text-base ml-2">
                오늘 12월9일(월)은{" "}
                <span className="text-red font-bold">09:00 ~ 21:40</span> 까지
                운영됩니다.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 xl:gap-10">
              {[
                {
                  label: "자료이용",
                  seats: 100,
                  label2: "도서 대출.반납.예약.연장",
                  phone: "02-760-1196, 1206",
                },
                {
                  label: "시설이용",
                  seats: 50,
                  label2: "스터디룸, 케랄",
                  phone: "02-760-1193",
                },
                {
                  label: "기타",
                  seats: 1000,
                  label2: "학위논문 온라인 제출",
                  phone: "031-299-4026/4034",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center"
                >
                  <p className="text-xs xl:text-sm font-bold bg-white rounded-full p-2 text-center w-full mb-3">
                    {item.label}
                  </p>
                  <p className="text-[#454F6F] mb-2 text-xs xl:text-base">
                    {item.label2}
                  </p>
                  <p className="text-xs xl:text-base flex items-center xl:whitespace-nowrap">
                    <MdPhone /> <span className="ml-2">{item.phone}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
