"use client";

import MenuBookIcon from "@/assets/Svgs/MenuBookIcon";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";

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
];

export default function ResearchSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-24">
      <div className="md:col-span-1 bg-white p-4 ">
        <h2 className="text-lg font-bold mb-2">SKKU </h2>
        <p className="text-3xl font-bold">Research</p>
        <p className="text-[#8188A1] mt-3">+ 더보기</p>
        <p className="text-md text-gray mt-10">
          최근 성균관대학교에서 발행한 신규 논문입니다.
        </p>
      </div>

      <div className="md:col-span-4 relative">
        <div className="grid grid-cols-4 gap-3.5">
          {data.map((item) => (
            <div
              key={item.id}
              className="border border-[#E2EAE8] px-4 py-7 rounded-xl"
            >
              <div className="flex justify-between gap-2">
                <FaRegHeart />
                <p className="border-x-2 border-gray text-xs items-center px-1.5 flex">
                  <span className="text-red font-bold mx-1">SCOPUS</span>
                  <span className="mx-1">6회인용</span>
                </p>
                <p className="items-center flex text-xs">
                  <span className="text-red font-bold mx-1">KCI</span>
                  <span className="mx-1">1회인용</span>
                </p>
              </div>
              <p className="font-bold text-md my-6 ">{item.title}</p>
              <div className="flex gap-1 text-[#8188A1] text-sm justify-center items-center my-6">
                <MenuBookIcon />
                <p>{item.journal}</p>
              </div>
              <div className="flex gap-1 justify-center items-center text-[#8188A1] text-sm">
                <MenuBookIcon />
                <p>{item.authors}</p>
              </div>

              <button className="flex justify-center items-center w-full bg-[#1D4676] rounded-full text-white p-2.5 mt-6">
                PDF다운로드
                <Image
                  src="/svgs/download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                  className="ml-2"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
