"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrownIcon from "@/assets/Svgs/CrownIcon";
import MessageIcon from "@/assets/Svgs/MessageIcon";
import ReviewLogoIcon from "@/assets/Svgs/ReviewLogoIcon";
import WriteReviewIcon from "@/assets/Svgs/WriteReviewIcon";
import Image from "next/image";
import {
  MdOutlineArrowRightAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

// Sample data for the first tab (Best Reviews)
const bestReviewsData = [
  {
    id: 1,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "홍길동",
    date: "2019/12/31",
    rank: "1등",
    likes: 50,
    comments: 24,
    aiScore: 10,
    bookTitle: "이방인",
    bookInfo: "정혜선 | 산과글 | 2019/02/21",
    reviewText: [
      "가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던 책이었던 것 같다. 가방이 무거워서 나눠주는 책을 가져가야 할지 말지 고민했지만, 좋은 책을 마다할 이유는 없으니까! 가져오고 나서는 이제 고학년이라 취업에 한참 관심이 많아져서, 이 책을 소장할 수 있게 된 것에 조금 감사했다.",
      "제1장 글로벌 취업 문화에 관하여 해외 취업을 생각해 본 적은 없어서 우와! 가방이 무척 무거웠던 날로 기억한다.중앙학술정보관에서 나눠줬던 책이었던 가방이 무척 무거웠던 날로 기억한다.중앙학술정보관에서 나눠줬던 책이었던 가방이 무척 무거웠던 날로 기억한다.중앙학술정보관에서 나눠줬던 책이었던",
    ],
  },
  {
    id: 2,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "김철수",
    date: "2020/01/15",
    rank: "2등",
    likes: 45,
    comments: 18,
    aiScore: 9,
    bookTitle: "데미안",
    bookInfo: "헤르만 헤세 | 민음사 | 2018/05/10",
    reviewText: [
      "헤르만 헤세의 '데미안'은 자아 찾기의 여정을 그린 소설로, 주인공 싱클레어의 성장과 내면의 변화를 섬세하게 묘사하고 있습니다. 이 책은 단순한 성장 소설을 넘어서 인간의 본질과 자아 실현에 대한 깊은 통찰을 담고 있어요.",
      "특히 '각자 자신의 내면으로 돌아가는 길을 찾아야 한다'는 메시지가 인상적이었습니다. 현대 사회에서 자신의 정체성을 찾기 위해 고민하는 많은 이들에게 큰 위로와 영감을 줄 수 있는 작품이라고 생각합니다.",
    ],
  },
  {
    id: 3,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "이영희",
    date: "2020/02/20",
    rank: "3등",
    likes: 42,
    comments: 15,
    aiScore: 8,
    bookTitle: "사피엔스",
    bookInfo: "유발 하라리 | 김영사 | 2015/11/24",
    reviewText: [
      "유발 하라리의 '사피엔스'는 인류의 역사를 거시적인 관점에서 바라보며 우리가 어떻게 지금의 모습에 이르게 되었는지 설명합니다. 인지혁명, 농업혁명, 과학혁명을 통해 인류가 어떻게 발전해왔는지 흥미롭게 풀어내고 있어요.",
      "특히 인간이 '허구를 믿는 능력'을 통해 대규모 협력을 이끌어냈다는 부분이 인상적이었습니다. 종교, 국가, 돈과 같은 집단적 상상이 어떻게 인류 문명을 형성했는지 새로운 시각으로 바라볼 수 있게 해주는 책입니다.",
    ],
  },
];

// Sample data for the second tab (Review Authors)
const reviewAuthorsData = [
  {
    id: 4,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "박지성",
    date: "2020/03/10",
    rank: "작가상",
    likes: 120,
    comments: 45,
    aiScore: 9.5,
    bookTitle: "1984",
    bookInfo: "조지 오웰 | 민음사 | 2012/08/01",
    reviewText: [
      "조지 오웰의 '1984'는 전체주의 사회의 무서움을 경고하는 디스토피아 소설입니다. 빅브라더가 모든 것을 감시하는 사회에서 주인공 윈스턴의 저항과 좌절을 그리고 있어요.",
      "이 책이 1949년에 쓰여졌다는 점을 생각하면 놀랍습니다. 감시 사회, 역사 조작, 사상 통제 등 현대 사회에서도 여전히 유효한 경고를 담고 있기 때문입니다. 특히 '뉴스피크'와 같은 언어 통제를 통한 사고 통제 방식은 오늘날 미디어와 언어가 어떻게 우리의 사고를 형성하는지 생각해보게 합니다.",
    ],
  },
  {
    id: 5,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "최수진",
    date: "2020/04/05",
    rank: "신인상",
    likes: 95,
    comments: 32,
    aiScore: 9,
    bookTitle: "노인과 바다",
    bookInfo: "어니스트 헤밍웨이 | 민음사 | 2012/03/25",
    reviewText: [
      "헤밍웨이의 '노인과 바다'는 단순한 이야기 속에 인간의 의지와 존엄성에 대한 깊은 메시지를 담고 있습니다. 노인 산티아고가 대형 청새치와 사투를 벌이는 과정은 인간의 불굴의 의지를 상징적으로 보여줍니다.",
      "'인간은 패배할 수 있지만 결코 굴복하지 않는다'는 헤밍웨이의 메시지가 가슴에 와닿았습니다. 우리 모두가 살면서 마주하는 도전과 좌절 속에서도 포기하지 않는 정신을 일깨워주는 작품이라고 생각합니다.",
    ],
  },
  {
    id: 6,
    bookImage: "/images/review.png",
    personImage: "/images/review-person.png",
    name: "정민호",
    date: "2020/05/15",
    rank: "인기상",
    likes: 88,
    comments: 27,
    aiScore: 8.5,
    bookTitle: "동물농장",
    bookInfo: "조지 오웰 | 민음사 | 2013/01/20",
    reviewText: [
      "'동물농장'은 우화를 통해 권력의 부패와 혁명의 변질을 날카롭게 비판하고 있습니다. 동물들이 인간의 지배에서 벗어나 자신들의 농장을 세우지만, 결국 돼지들이 새로운 지배계급이 되는 과정이 인상적입니다.",
      "'모든 동물은 평등하다. 그러나 어떤 동물들은 다른 동물들보다 더 평등하다'라는 문장은 권력을 가진 자들이 어떻게 이상을 왜곡하는지 보여주는 명문장입니다. 혁명과 이상이 어떻게 변질될 수 있는지 경고하는 이 작품은 오늘날에도 여전히 유효한 메시지를 전달합니다.",
    ],
  },
];

export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = ["베스트 리뷰", "리뷰 작가"];
  const tabsData = [bestReviewsData, reviewAuthorsData];
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePrevious = () =>
    currentIndex > 0 && setCurrentIndex((i) => i - 1);
  const handleNext = () =>
    currentIndex < tabsData[activeTab].length - 1 &&
    setCurrentIndex((i) => i + 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:mt-24">
      {/* ---------- LEFT COLUMN ---------- */}
      <div className="md:col-span-1 bg-white p-4">
        <p>오거서가 선정한</p>
        <p className="text-3xl font-bold">
          베스트 리뷰
          <br className="hidden md:block" /> & 리뷰 작가
        </p>

        {/* mobile (text‑only) buttons */}
        <div className="grid grid-cols-2 gap-3 mt-6 md:hidden">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                setCurrentIndex(0);
              }}
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

        {/* desktop icon list */}
        <div className="mt-8 hidden md:block">
          {tabs.map((tab, i) => (
            <div
              key={i}
              className="flex items-center gap-5 border-b border-[#E2EAE8] p-4 cursor-pointer"
              onClick={() => {
                setActiveTab(i);
                setCurrentIndex(0);
              }}
            >
              {i === 0 ? (
                <CrownIcon isActive={activeTab === 0} />
              ) : (
                <WriteReviewIcon isActive={activeTab === 1} />
              )}
              <p className={activeTab === i ? "text-black" : "text-gray-500"}>
                {tab}
              </p>
              <MdOutlineArrowRightAlt size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- RIGHT PANEL ---------- */}
      <div className="md:col-span-4 relative">
        {/* mobile header showing active icon + label */}
        <div className="flex items-center gap-2 mb-4 md:hidden">
          {activeTab === 0 ? (
            <CrownIcon isActive />
          ) : (
            <WriteReviewIcon isActive />
          )}
          <h3 className="text-lg font-bold">{tabs[activeTab]}</h3>
        </div>

        {activeTab === 0 ? (
          /* ----- TAB 1 : Vertical slider ----- */
          <div className="flex w-full lg:items-center flex-col-reverse lg:flex-row gap-2">
            {/* up/down buttons */}
            <div className="flex flex-row justify-center lg:flex-col items-center gap-5">
              <button
                className="p-2 rounded-full border border-[#E2EAE8] hover:bg-gray-100 transition-colors"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <MdKeyboardArrowUp
                  className={
                    currentIndex === 0 ? "text-gray-300" : "text-gray-700"
                  }
                />
              </button>
              <p className="text-[#8188A1]">{currentIndex + 1}</p>
              <p className="text-[#8188A1]">/</p>
              <p className="text-[#8188A1]">{tabsData[activeTab].length}</p>
              <button
                className="p-2 rounded-full border border-[#E2EAE8] hover:bg-gray-100 transition-colors"
                onClick={handleNext}
                disabled={currentIndex === tabsData[activeTab].length - 1}
              >
                <MdKeyboardArrowDown
                  className={
                    currentIndex === tabsData[activeTab].length - 1
                      ? "text-gray-300"
                      : "text-gray-700"
                  }
                />
              </button>
            </div>

            {/* slider */}
            <div className="overflow-hidden" ref={containerRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex + "-" + activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-5 gap-6"
                >
                  <div className="flex justify-center border-y border-[#E2EAE8] lg:border-none py-5 lg:py-0">
                    <Image
                      src={tabsData[activeTab][currentIndex].bookImage}
                      alt="review-book"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-5">
                      <div>
                        <Image
                          src={tabsData[activeTab][currentIndex].personImage}
                          alt="review-person"
                          width={100}
                          height={120}
                        />
                      </div>
                      <div>
                        <p className="text-[#2D2F3E] text-lg">
                          by. {tabsData[activeTab][currentIndex].name}
                        </p>
                        <p className="text-[#8188A1] text-sm mt-2">
                          {tabsData[activeTab][currentIndex].date}
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <Image
                            src="/svgs/Union.svg"
                            alt="Union"
                            width={20}
                            height={20}
                          />
                          <p className="text-[#11AC57] text-lg font-bold">
                            {tabsData[activeTab][currentIndex].rank}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#8188A1] mt-5">
                      + {tabsData[activeTab][currentIndex].name}님의 리뷰 더보기
                    </p>
                  </div>
                  <div className="md:col-span-3 p-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 px-5">
                        <div className="w-12 h-12 bg-[#AFE12A1A] border border-[#77A4004D] rounded-full flex items-center justify-center">
                          <ReviewLogoIcon isActive={true} />
                        </div>
                        <p>{tabsData[activeTab][currentIndex].likes}</p>
                      </div>
                      <div className="flex items-center gap-2 px-5">
                        <div className="flex items-center gap-2 border border-[#CDD2E0] p-2 rounded-full w-12 h-12 justify-center bg-[#EFF2F1]">
                          <MessageIcon isActive={true} />
                        </div>
                        <p>{tabsData[activeTab][currentIndex].comments}</p>
                      </div>
                      <div className="flex items-center gap-2 px-5">
                        <p className="bg-[#EFF2F1] p-2 rounded-full border border-[#CDD2E0] px-3">
                          AI점수
                        </p>
                        <p>{tabsData[activeTab][currentIndex].aiScore} 점</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 bg-[#EFF2F1] p-6 rounded-xl my-6">
                      <p>{tabsData[activeTab][currentIndex].bookTitle}</p>
                      <p>{tabsData[activeTab][currentIndex].bookInfo}</p>
                    </div>
                    <div>
                      {tabsData[activeTab][currentIndex].reviewText.map(
                        (paragraph, idx) => (
                          <p
                            key={idx}
                            className={`text-[#8188A1] text-sm leading-6 ${
                              idx > 0 ? "mt-2" : ""
                            }`}
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* ----- TAB 2 : Review–author grid ----- */
          <div className="flex w-full lg:items-center flex-col-reverse lg:flex-row gap-2">
            {/* up/down buttons (same as above) */}
            <div className="flex flex-row justify-center lg:flex-col items-center gap-5">
              <button
                className="p-2 rounded-full border border-[#E2EAE8] hover:bg-gray-100 transition-colors"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <MdKeyboardArrowUp
                  className={
                    currentIndex === 0 ? "text-gray-300" : "text-gray-700"
                  }
                />
              </button>
              <p className="text-[#8188A1]">{currentIndex + 1}</p>
              <p className="text-[#8188A1]">/</p>
              <p className="text-[#8188A1]">{tabsData[activeTab].length}</p>
              <button
                className="p-2 rounded-full border border-[#E2EAE8] hover:bg-gray-100 transition-colors"
                onClick={handleNext}
                disabled={currentIndex === tabsData[activeTab].length - 1}
              >
                <MdKeyboardArrowDown
                  className={
                    currentIndex === tabsData[activeTab].length - 1
                      ? "text-gray-300"
                      : "text-gray-700"
                  }
                />
              </button>
            </div>

            {/* author grid */}
            <div className="overflow-hidden flex-1" ref={containerRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="p-6"
                >
                  {/* ← 지금 슬라이드에 보여줄 작가 데이터 */}
                  {(() => {
                    // const author = tabsData[activeTab][currentIndex];
                    // const month = new Date(author.date).getMonth() + 1;
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center gap-5">
                            <Image
                              src="/images/review-person.png"
                              alt="review-1"
                              width={100}
                              height={120}
                              className="rounded-lg"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/svgs/Union.svg"
                                  alt="Union"
                                  width={20}
                                  height={20}
                                />
                                <p>1등</p>
                              </div>
                              <p>김독서</p>
                              <p>1월 베스트 작가</p>
                            </div>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>총 리뷰</p>
                            <p className="text-secondary">254</p>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>AI 점수</p>
                            <p className="text-secondary">85</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-5">
                            <Image
                              src="/images/review-2.jpg"
                              alt="review-1"
                              width={100}
                              height={120}
                              className="rounded-lg w-[100px] h-[135px]"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/svgs/Union.svg"
                                  alt="Union"
                                  width={20}
                                  height={20}
                                />
                                <p>1등</p>
                              </div>
                              <p>김독서</p>
                              <p>1월 베스트 작가</p>
                            </div>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>총 리뷰</p>
                            <p className="text-secondary">254</p>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>AI 점수</p>
                            <p className="text-secondary">85</p>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-5">
                            <Image
                              src="/images/review-person.png"
                              alt="review-1"
                              width={100}
                              height={120}
                              className="rounded-lg w-[100px] h-[135px]"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/svgs/Union.svg"
                                  alt="Union"
                                  width={20}
                                  height={20}
                                />
                                <p>1등</p>
                              </div>
                              <p>김독서</p>
                              <p>1월 베스트 작가</p>
                            </div>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>총 리뷰</p>
                            <p className="text-secondary">254</p>
                          </div>
                          <div className="bg-[#EFF2F1] p-4 flex justify-between rounded-xl mt-6">
                            <p>AI 점수</p>
                            <p className="text-secondary">85</p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
