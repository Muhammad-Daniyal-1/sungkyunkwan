import { TiHome } from "react-icons/ti";

export default function Menu() {
  return (
    <div>
      <div>
        <div className="flex items-center gap-3 border-b border-[#E0E2EB] py-4 px-8">
          <TiHome size={24} className="text-[#769D96]" />
          <p className="text-base font-bold">사이트맵</p>
        </div>

        <div className="py-14 pl-14">
          <p className="text-4xl font-semibold">사이트맵</p>

          <div className="grid grid-cols-4 gap-10 mt-10">
            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                자료검색
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                통합검색
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB] ">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  학술지논문
                </li>
                <li className="px-4 pt-2 pb-4 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  외부기관 자료
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                자료
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                Browse
              </p>
              <ul className="text-text-400 text-base ">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  Database
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  e-Book
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  DVD
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                Collections
              </p>
              <ul className="text-text-400 text-base ">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  핫북
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  신착자료
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer   ">
                  성균고전 100선
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  대한민국학술원 우수학술도서
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  한국출판문화산업진흥원 세종도서
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  북 큐레이션
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  개인문고
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                SKKU Collections
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  SKKU 학위논문
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  SKKU Archive
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  희귀도서
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                연구·학습지원
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                정보활용교육
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  교육안내
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                논문작성 및 출판지원
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  참고문헌스타일
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  참고문헌관리도구
                </li>
                <li className=" px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  논문투고절차
                </li>
                <li className=" px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  논문교열서비스
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  논문유사도검사
                </li>
                <li className=" px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  OA출판지원서비스
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-4 pt-5 border-b border-[#E0E2EB]">
                연구성과분석
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                서비스 이용
              </p>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                자료이용
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  대출/반납/연장/예약d
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  북사이렌
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  자료구입신청
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  캠퍼스/타기관 도서대출
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  타기관 자료복사
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  타대학도서관 방문신청
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                시설이용
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  일반열람실
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  그룹스터디룸
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  공동협업공간
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  무선랜
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  사물함
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                이용자별 안내
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  학부생
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  대학원생
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  교수
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  졸업생
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  지역주민/외부등록이용자
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  장애학생
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                모바일서비스
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  학술정보관 모바일앱
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  모바일학생증
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                Proxy 서비스
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 pt-2 pb-4 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  전자자료 교외이용
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-10 mt-10">
            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                도서관안내·알림·문의
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                학술정보관 소개
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  Ask Us
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  FAQ
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  서비스별 문의
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  도서관 캘린더
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  자료기증
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  연혁
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  조직/직원 안내
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  학술정보관 규정/이용지침/서식
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  Annual Report
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  학술정보관 방문/견학
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  이용시간
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  층별안내
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                알림/문의
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 pt-2 pb-4 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  공지사항
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                발전기금
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                발전기금
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  모금안내
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  참여하기
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  기부자 예우
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                오거서
              </p>
              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                독서프로그램
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  AI도서추천
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  성균고전 100선
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  독서인증서
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  오거서장학금
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  참여프로그램
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                독서리뷰
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  베스트리뷰
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  리뷰작가
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  나의리뷰
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  리뷰쓰기
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-4 pt-5">
                아카이브
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 pt-2 pb-4 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  아카이브
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold text-primary text-center border-b-2 border-secondary">
                My library
              </p>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                My Dashboard
              </p>
              <ul className="text-text-400 text-base">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  대출현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  딸림대출현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  예약현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  위반현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  개인보관함
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  나의 서평
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  나의 연체료
                </li>
              </ul>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                개인공지
              </p>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                개인정보관리
              </p>

              <p className="text-lg font-semibold text-secondary px-4 pb-2 pt-5">
                서비스현황
              </p>
              <ul className="text-text-400 text-base border-b border-[#E0E2EB]">
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  자료구입 신청현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  캠퍼스간 도서대출 현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  타기관 도서대출 이용현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  원문복사 이용현황
                </li>
                <li className="px-4 py-2 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  타기관 열람의뢰 현황
                </li>
                <li className="px-4 pt-2 pb-4 hover:text-secondary transition-colors duration-500 cursor-pointer">
                  서고도서 신청현황
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
