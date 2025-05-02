import CrownIcon from "@/assets/Svgs/CrownIcon";
import WriteReviewIcon from "@/assets/Svgs/WriteReviewIcon";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function BestReviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-24">
      <div className="md:col-span-1 bg-white p-4 ">
        <p>오거서가 선정한</p>
        <p className="text-3xl font-bold">
          베스트 리뷰
          <br />& 리뷰 작가
        </p>
        <div className="mt-8">
          <div className="flex items-center gap-5 border-b border-[#E2EAE8] p-4">
            <CrownIcon isActive={true} />
            <p>베스트 리뷰</p>
            <MdOutlineArrowRightAlt size={24} />
          </div>
          <div className="flex items-center gap-5 border-b border-[#E2EAE8] p-4">
            <WriteReviewIcon isActive={false} />
            <p>리뷰 작가</p>
            <MdOutlineArrowRightAlt size={24} />
          </div>
        </div>
      </div>

      <div className="md:col-span-4 relative">
        <div className="grid grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
