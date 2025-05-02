"use client";

import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/images/trend-1.jpg",
    title: "소년이 온다",
  },
  {
    id: 2,
    img: "/images/trend-2.jpg",
    title: "채식주의자",
  },
  {
    id: 3,
    img: "/images/trend-3.jpg",
    title: "마음의 기술",
  },
  {
    id: 4,
    img: "/images/trend-4.jpg",
    title: "마지막 이기적 결정",
  },
  {
    id: 5,
    img: "/images/trend-5.jpg",
    title: "클래식 수업",
  },
];

export default function TrendsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-24">
      <div className="md:col-span-1 bg-white p-4 ">
        <p className="text-3xl font-bold">
          추천과
          <br />
          트렌드
          <br />
          한눈에 보기
        </p>
        <p className="text-[#8188A1] mt-3">+ 더보기</p>
        <p className="text-md text-gray mt-10">
          이번 달 가장 많이 대출된
          <br />
          인기 자료를 만나보세요!
          <br />
          독자들의 선택을 받은
          <br />
          최고의 자료 목록입니다.
        </p>
      </div>

      <div className="md:col-span-4 relative">
        <div className="grid grid-cols-5 gap-3.5">
          {data.map((item) => (
            <div key={item.id} className="">
              <div className=" relative">
                <div className="absolute -top-1 -left-1 w-14 h-14 bg-green-500 rounded-tl-sm rounded-t-full rounded-br-full rounded-bl-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {item.id}
                  </span>
                </div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={300}
                  className="rounded-xl border border-[#C6D7D4]"
                />
              </div>
              <p className="font-bold text-md my-6 text-center ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
