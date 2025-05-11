import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MobileFooter() {
  return (
    <div className="bg-[#E0E2EB] py-6 px-5 xl:hidden">
      <Image
        src="/svgs/footer-logo.svg"
        alt="footer-logo"
        width={90}
        height={90}
        className="mb-2"
      />
      <ul className="flex gap-2 text-sm text-[#454F6F] mb-2">
        <li>학술정보관</li>
        <li>개인정보처리방침</li>
        <li>독서인증서</li>
        <li>사이트맵</li>
      </ul>
      <p className="text-sm text-[#8188A1] mb-3">
        서울시 종로구 성균관로 25-2 성균관대학교 중앙학술정보관 3F
        인문학술정보팀 (우 03063)
      </p>
      <div className="flex gap-4 mb-3">
        <p className="text-sm text-[#454F6F]">Tel. 02-760-1207</p>
        <p className="text-sm text-[#454F6F]">Fax. 02-760-1197</p>
      </div>
      <button className="flex justify-between items-center gap-2 border border-[#CDD2E0] rounded-full px-5 py-2 w-full text-[#454F6F] bg-white text-sm">
        Family Site
        <MdKeyboardArrowDown />
      </button>
      <p className="text-xs text-[#8188A1] mt-3">
        COPYRIGHT © 2025 SKKU LIBRARY. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}
