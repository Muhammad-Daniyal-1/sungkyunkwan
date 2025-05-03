import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center gap-8 border border-gray  pb-2 pt-3">
        <p>주요전화번호</p>
        <div className="w-[1px] h-4 bg-[#CDD2E0]" />
        <p>개인정보처리방침</p>
        <div className="w-[1px] h-4 bg-[#CDD2E0]" />
        <p>이메일무단수집거부</p>
      </div>
      <div className="flex justify-between items-center py-3 gap-10 max-w-[1200px] mx-auto px-20">
        <div className="flex items-center gap-4">
          <Image
            src="/svgs/footer-logo.svg"
            alt="footer-logo"
            width={90}
            height={90}
          />
          <div>
            <p className="text-[#454F6F] text-sm">
              (03063) 서울시 종로구 성균관로 25-2 성균관대학교 중앙학술정보관
            </p>
            <p className="text-[#B1B7CC] text-xs mt-1">
              COPYRIGHT © 2025 SKKU LIBRARY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/svgs/fb-logo.svg" alt="fb-logo" width={48} height={48} />
          <button className="flex items-center gap-2 border border-[#CDD2E0] rounded-full px-5 py-3 text-[#8188A1]">
            Family Site
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}
