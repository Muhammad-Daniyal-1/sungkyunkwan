import CrownIcon from "@/assets/Svgs/CrownIcon";
import WriteReviewIcon from "@/assets/Svgs/WriteReviewIcon";
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

      <div className="md:col-span-4 relative"></div>
    </div>
  );
}
