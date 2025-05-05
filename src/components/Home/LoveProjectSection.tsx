import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/images/project-1.png",
    title: "소프트웨어공학과 김상희",
  },
  {
    id: 2,
    img: "/images/project-2.png",
    title: "철학과 김명륜",
  },
  {
    id: 3,
    img: "/images/project-3.png",
    title: "영어교육과 홍길동",
  },
  {
    id: 4,
    img: "/images/project-4.png",
    title: "산업공학과 김영희",
  },
];

export default function LoveProjectSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-24">
      <div className="md:col-span-1 bg-white p-4 ">
        <p className="text-2xl mb-1">Love Project1</p>
        <div className="flex justify-between items-end lg:items-start lg:flex-col">
          <p className="text-3xl font-bold">사랑해서가</p>
          <p className="text-[#8188A1] mt-3">+ 더보기</p>
        </div>
      </div>

      <div className="md:col-span-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {data.map((item) => (
            <div key={item.id} className="">
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={260}
                  height={340}
                  className="rounded-xl border border-[#C6D7D4] w-[260px] h-[340px]"
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
