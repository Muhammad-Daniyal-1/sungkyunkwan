import CrownIcon from "@/assets/Svgs/CrownIcon";
import WriteReviewIcon from "@/assets/Svgs/WriteReviewIcon";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function ReviewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-16">
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
        <div className="flex items-center">
          <div className="flex flex-col justify-between mb-2">
            <button className="px-3 py-1 bg-gray-200 rounded">◀</button>
            <button className="px-3 py-1 bg-gray-200 rounded">▶</button>
          </div>
          <div>
            <Image
              src="/images/review.png"
              alt="review-1"
              width={200}
              height={300}
            />
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div>
                <Image
                  src="/images/review-person.png"
                  alt="review-1"
                  width={100}
                  height={120}
                />
              </div>
              <div>
                <p>by. 홍길동</p>
                <p>2019/12/31</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/svgs/Union.svg"
                    alt="Union"
                    width={20}
                    height={20}
                  />
                  <p>1등</p>
                </div>
              </div>
            </div>
            <p className="text-[#8188A1]">+ 홍길동님의 리뷰 더보기</p>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 px-5">
                <p>50</p>
              </div>
              <div className="flex items-center gap-2 px-5">
                <p>24</p>
              </div>
              <div className="flex items-center gap-2 px-5">
                <p>AI점수</p>
                <p>10 점</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 bg-[#EFF2F1] p-2">
              <p>이방인</p>
              <p>정혜선 | 산과글 | 2019/02/21</p>
            </div>
            <div>
              <p>
                가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던
                책이었던 것 같다. 가방이무거워서 나눠주는 책을 가져가야 할지
                말지 고민했지만, 좋은 책을 마다할 이유는 없으니까! 가져오고
                나서는 이제 고학년이라 취업에 한참 관심이 많아져서, 이 책을
                소장할 수 있게 된 것에 조금 감사했다.
              </p>
              <p>
                제1장 글로벌 취업 문화에 관하여 해외 취업을 생각해 본 적은
                없어서 우와! 가방이 무척 무거웠던 날로
                기억한다. 중앙학술정보관에서 나눠줬던 책이었던 가방이 무척
                무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던 책이었던
                가방이 무척 무거웠던 날로 기억한다. 중앙학술정보관에서 나눠줬던
                책이었던
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
